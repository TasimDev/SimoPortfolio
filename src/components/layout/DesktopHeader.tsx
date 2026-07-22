"use client";

import Image from "next/image";
import Link from "next/link";
import { Phone } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { navigationItems } from "@/content/navigation";
import { siteConfig } from "@/content/site";
import { useNavigationMode } from "@/hooks/use-navigation-mode";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/bg";
import { routes } from "@/lib/routes";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { NavigationItem } from "./NavigationItem";
import { NavigationTooltip } from "./NavigationTooltip";

const DARK_LUMINANCE_THRESHOLD = 0.38;

function isDarkColor(color: string): boolean | null {
  const match = color.match(
    /rgba?\((\d+)[, ]+(\d+)[, ]+(\d+)(?:[, /]+([\d.]+))?\)/,
  );

  if (!match || Number(match[4] ?? 1) <= 0.15) return null;

  const red = Number(match[1]) / 255;
  const green = Number(match[2]) / 255;
  const blue = Number(match[3]) / 255;
  const luminance = 0.2126 * red + 0.7152 * green + 0.0722 * blue;

  return luminance < DARK_LUMINANCE_THRESHOLD;
}

export function DesktopHeader({
  locale,
  dictionary,
}: {
  locale: Locale;
  dictionary: Dictionary;
}) {
  const pathname = usePathname();
  const [hash, setHash] = useState("");
  const [open, setOpen] = useState(false);
  const [pinned, setPinned] = useState(false);
  const [overDark, setOverDark] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const region = useRef<HTMLElement>(null);
  const logo = useRef<HTMLButtonElement>(null);
  const navigation = dictionary.navigation;
  const compact = useNavigationMode(() => {
    setOpen(false);
    setPinned(false);
  });

  const cancelClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  };

  const scheduleClose = () => {
    cancelClose();
    if (!pinned) closeTimer.current = setTimeout(() => setOpen(false), 220);
  };

  useEffect(() => {
    if (!compact || !open) return;

    const closeOutside = (event: PointerEvent) => {
      if (compact && !region.current?.contains(event.target as Node)) {
        setOpen(false);
        setPinned(false);
      }
    };

    const closeWithEscape = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      setOpen(false);
      setPinned(false);
      logo.current?.focus();
    };

    document.addEventListener("pointerdown", closeOutside);
    document.addEventListener("keydown", closeWithEscape);

    return () => {
      document.removeEventListener("pointerdown", closeOutside);
      document.removeEventListener("keydown", closeWithEscape);
      cancelClose();
    };
  }, [compact, open]);

  useEffect(() => {
    const updateHash = () => setHash(window.location.hash);
    updateHash();
    window.addEventListener("hashchange", updateHash);
    return () => window.removeEventListener("hashchange", updateHash);
  }, [pathname]);

  useEffect(() => {
    let frame = 0;

    const readSurfaceTone = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        if (!compact || !logo.current) {
          setOverDark(false);
          return;
        }

        const rect = logo.current.getBoundingClientRect();
        const elements = document
          .elementsFromPoint(rect.left + rect.width / 2, rect.top + rect.height / 2)
          .filter((element) => !region.current?.contains(element));

        for (const candidate of elements) {
          let element: Element | null = candidate;

          while (element) {
            const dark = isDarkColor(getComputedStyle(element).backgroundColor);
            if (dark !== null) {
              setOverDark(dark);
              return;
            }
            element = element.parentElement;
          }
        }

        setOverDark(false);
      });
    };

    readSurfaceTone();
    window.addEventListener("scroll", readSurfaceTone, { passive: true });
    window.addEventListener("resize", readSurfaceTone);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", readSurfaceTone);
      window.removeEventListener("resize", readSurfaceTone);
    };
  }, [compact]);

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

  const selectItem = (id?: string) => {
    setHash(id === "services" || id === "about" ? `#${id}` : "");
    setOpen(false);
    setPinned(false);
  };

  const togglePinnedMenu = () => {
    if (!compact) return;
    if (pinned) {
      setPinned(false);
      setOpen(false);
      return;
    }
    setPinned(true);
    setOpen(true);
  };

  return (
    <header
      ref={region}
      className={`desktop-header ${compact ? "is-compact" : "is-normal"} ${open ? "is-open" : ""} ${overDark ? "is-over-dark" : ""}`}
      onPointerEnter={() => {
        cancelClose();
        if (compact) setOpen(true);
      }}
      onPointerLeave={scheduleClose}
      onFocusCapture={() => {
        if (compact) setOpen(true);
      }}
      onBlurCapture={(event) => {
        if (!region.current?.contains(event.relatedTarget as Node)) scheduleClose();
      }}
    >
      <button
        ref={logo}
        className="navigation-logo"
        tabIndex={compact ? 0 : -1}
        aria-label={
          compact
            ? open
              ? navigation.collapseMenu
              : navigation.expandMenu
            : siteConfig.fullBrandName
        }
        aria-expanded={compact ? open : undefined}
        aria-controls={compact ? "compact-navigation" : undefined}
        onClick={togglePinnedMenu}
      >
        <Image
          className="navigation-logo__image navigation-logo__image--light"
          src={siteConfig.logo}
          alt=""
          width={1080}
          height={1080}
          priority
        />
        <Image
          className="navigation-logo__image navigation-logo__image--dark"
          src={siteConfig.logoOnDark}
          alt=""
          width={1080}
          height={1080}
          priority
        />
      </button>

      <div className="horizontal-content" aria-hidden={compact} inert={compact || undefined}>
        <nav aria-label={navigation.label}>
          {navigationItems.map((item) => (
            <Link
              key={item.id}
              href={routes[item.route](locale)}
              aria-current={isActive(item.id) ? "page" : undefined}
              onClick={() => selectItem(item.id)}
            >
              {navigation[item.labelKey]}
            </Link>
          ))}
        </nav>
        <a
          className="phone-action tooltip-anchor"
          href={siteConfig.phoneHref}
          aria-label={navigation.callMe}
        >
          <Phone aria-hidden size={18} />
          <NavigationTooltip>{navigation.callMe}</NavigationTooltip>
        </a>
        <LanguageSwitcher locale={locale} label={navigation.changeLanguage} />
      </div>

      <div
        id="compact-navigation"
        className="compact-content"
        aria-hidden={!compact || !open}
        inert={!compact || !open || undefined}
      >
        <nav aria-label={navigation.label}>
          {navigationItems.map((item, index) => (
            <span
              className="compact-stagger"
              style={{ "--item-delay": `${90 + index * 45}ms` } as React.CSSProperties}
              key={item.id}
            >
              <NavigationItem
                item={item}
                locale={locale}
                dictionary={dictionary}
                active={isActive(item.id)}
                onSelect={() => selectItem(item.id)}
              />
            </span>
          ))}
        </nav>
        <span className="compact-divider" />
        <a
          className="compact-item tooltip-anchor phone-compact"
          href={siteConfig.phoneHref}
          aria-label={navigation.callMe}
        >
          <Phone aria-hidden size={20} />
          <i />
          <NavigationTooltip detail={siteConfig.phoneDisplay}>
            {navigation.callMe}
          </NavigationTooltip>
        </a>
        <LanguageSwitcher locale={locale} label={navigation.changeLanguage} compact />
      </div>
    </header>
  );
}
