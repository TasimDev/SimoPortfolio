import { ArrowUp } from "lucide-react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { navigationItems } from "@/content/navigation";
import { siteConfig } from "@/content/site";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/bg";
import { routes } from "@/lib/routes";

export function Footer({ locale, dictionary }: { locale: Locale; dictionary: Dictionary }) {
  return (
    <footer className="site-footer">
      <Container>
        <div className="site-footer__top">
          <p className="site-footer__brand">SIMO<span>Digital Craftsman</span></p>
          <a className="site-footer__top-link" href="#main-content">
            {dictionary.footer.backToTop}<ArrowUp aria-hidden="true" />
          </a>
        </div>

        <div className="site-footer__links">
          <nav aria-label={dictionary.footer.navigationLabel}>
            {navigationItems.map((item) => (
              <Link key={item.id} href={routes[item.route](locale)}>{dictionary.navigation[item.labelKey]}</Link>
            ))}
          </nav>
          <nav aria-label={dictionary.footer.socialLabel}>
            {siteConfig.socialLinks.map((social) => (
              <a key={social.id} href={social.url} target="_blank" rel="noreferrer">{social.label}</a>
            ))}
          </nav>
        </div>

        <div className="site-footer__bottom">
          <p>© {new Date().getFullYear()} {siteConfig.fullBrandName}. {dictionary.footer.rights}</p>
          <Link href={routes.privacy(locale)}>{dictionary.footer.privacy}</Link>
        </div>
      </Container>
    </footer>
  );
}
