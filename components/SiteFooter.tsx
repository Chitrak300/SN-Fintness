import Link from 'next/link';
import { NAV, SITE } from '../lib/site';

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="wrap foot-grid">
        <div>
          <div className="foot-logo">S.N. <span>FITNESS</span></div>
          <p>{SITE.address}</p>
        </div>
        <nav className="foot-links" aria-label="Footer">
          {NAV.map((item) => (
            <Link key={item.href} href={item.href}>{item.label}</Link>
          ))}
        </nav>
      </div>
      <div className="wrap foot-bottom">
        © {new Date().getFullYear()} S.N. Fitness. All rights reserved.
      </div>
    </footer>
  );
}
