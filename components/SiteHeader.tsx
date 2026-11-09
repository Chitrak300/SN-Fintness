'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { NAV } from '../lib/site';

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <nav className="wrap nav" aria-label="Main">
        <Link href="/" className="logo" onClick={() => setOpen(false)}>
          S.N. <span>FITNESS</span>
        </Link>
        <ul className={`nav-links ${open ? 'open' : ''}`}>
          {NAV.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={pathname === item.href ? 'active' : undefined}
                aria-current={pathname === item.href ? 'page' : undefined}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="nav-cta">
          <Link href="/pricing" className="btn btn-solid">Join Now</Link>
          <button
            className="burger"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            ☰
          </button>
        </div>
      </nav>
    </header>
  );
}
