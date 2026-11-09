import { WHATSAPP_HREF } from '../lib/site';

// Plain link (no JS needed), so it works before hydration and for crawlers.
export default function WhatsAppFloat() {
  return (
    <a
      className="whatsapp-float"
      href={WHATSAPP_HREF}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      title="Chat on WhatsApp"
    >
      <span className="ping" />
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <path d="M16.001 3C9.376 3 4 8.373 4 15c0 2.61.86 5.02 2.32 6.98L4.99 27.98a1 1 0 0 0 1.24 1.22l6.2-1.98A11.94 11.94 0 0 0 16 27c6.627 0 12-5.373 12-12S22.628 3 16.001 3Zm6.24 16.63c-.27.75-1.55 1.44-2.13 1.5-.55.06-1.05.28-3.54-.74-2.98-1.22-4.9-4.2-5.05-4.4-.15-.2-1.22-1.62-1.22-3.1 0-1.47.77-2.19 1.05-2.49.27-.29.6-.36.8-.36.2 0 .4 0 .58.01.19.01.44-.07.68.53.27.68.9 2.34.98 2.51.08.17.13.37.02.59-.11.22-.17.36-.33.55-.16.19-.34.42-.49.57-.16.15-.33.32-.14.63.19.31.85 1.4 1.83 2.27 1.26 1.12 2.32 1.47 2.65 1.63.33.16.52.14.71-.08.22-.25.9-1.06 1.14-1.42.24-.36.48-.3.79-.18.32.12 2.02.96 2.37 1.13.35.17.58.26.66.4.09.15.09.85-.18 1.6Z" />
      </svg>
    </a>
  );
}
