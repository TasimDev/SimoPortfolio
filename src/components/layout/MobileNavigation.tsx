"use client";

import Link from "next/link";
import { Ellipsis, Phone } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { navigationItems } from "@/content/navigation";
import { siteConfig } from "@/content/site";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/bg";
import { routes } from "@/lib/routes";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { NavigationIcon } from "./NavigationIcon";

export function MobileNavigation({
  locale,
  dictionary,
}: {
  locale: Locale;
  dictionary: Dictionary;
}) {
  const pathname = usePathname();
  const [hash, setHash] = useState("");
  const [utilitiesOpen, setUtilitiesOpen] = useState(false);
  const utilitiesRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const navigation = dictionary.navigation;

  useEffect(() => {
    const updateHash = () => setHash(window.location.hash);
    const frame = requestAnimationFrame(updateHash);
    window.addEventListener("hashchange", updateHash);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("hashchange", updateHash);
    };
  }, [pathname]);

  useEffect(() => {
    if (!utilitiesOpen) return;

    const closeOutside = (event: PointerEvent) => {
      if (!utilitiesRef.current?.contains(event.target as Node)) setUtilitiesOpen(false);
    };

    const closeWithEscape = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      setUtilitiesOpen(false);
      triggerRef.current?.focus();
    };

    document.addEventListener("pointerdown", closeOutside);
    document.addEventListener("keydown", closeWithEscape);
    return () => {
      document.removeEventListener("pointerdown", closeOutside);
      document.removeEventListener("keydown", closeWithEscape);
    };
  }, [utilitiesOpen]);

  const isActive = (id: string) =>
    id === "projects"
      ? pathname.includes("/projects")
      : id === "pricing"
        ? pathname.includes("/pricing")
      : id === "contact"
        ? pathname.includes("/contact")
        : id === "services"
          ? hash === "#services"
          : id === "about"
            ? hash === "#about"
            : id === "home" &&
              !pathname.includes("/projects") &&
              !pathname.includes("/pricing") &&
              !pathname.includes("/contact") &&
              hash !== "#services" &&
              hash !== "#about";

  return (
    <nav className="mobile-dock" aria-label={navigation.label}>
      {navigationItems.filter((item) => !item.mobileUtility).map((item) => (
        <Link
          className="mobile-dock__item"
          key={item.id}
          href={routes[item.route](locale)}
          aria-label={navigation[item.labelKey]}
          aria-current={isActive(item.id) ? "page" : undefined}
          onClick={() => setUtilitiesOpen(false)}
        >
          <NavigationIcon name={item.icon} />
        </Link>
      ))}

      <div className="mobile-dock__utilities" ref={utilitiesRef}>
        <div
          className={`mobile-utilities ${utilitiesOpen ? "is-open" : ""}`}
          id="mobile-utilities"
          aria-hidden={!utilitiesOpen}
          inert={!utilitiesOpen || undefined}
        >
          {navigationItems.filter((item) => item.mobileUtility).map((item) => (
            <Link
              className="mobile-utilities__link"
              key={item.id}
              href={routes[item.route](locale)}
              aria-current={isActive(item.id) ? "page" : undefined}
              onClick={() => setUtilitiesOpen(false)}
            >
              <NavigationIcon name={item.icon} />
              <span>{navigation[item.labelKey]}</span>
            </Link>
          ))}
          <a
            className="mobile-utilities__phone"
            href={siteConfig.phoneHref}
            aria-label={navigation.callMe}
          >
            <Phone aria-hidden size={19} />
            <span>{navigation.callMe}</span>
          </a>
          <LanguageSwitcher locale={locale} label={navigation.changeLanguage} />
        </div>
        <button
          ref={triggerRef}
          className="mobile-dock__item"
          type="button"
          aria-label={utilitiesOpen ? navigation.closeMenu : navigation.openMenu}
          aria-expanded={utilitiesOpen}
          aria-controls="mobile-utilities"
          onClick={() => setUtilitiesOpen((value) => !value)}
        >
          <Ellipsis aria-hidden size={21} />
        </button>
      </div>
    </nav>
  );
}
