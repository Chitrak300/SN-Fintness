import type { Metadata } from 'next';
import PageHero from '../../components/PageHero';
import { SITE, WHATSAPP_HREF } from '../../lib/site';

export const metadata: Metadata = {
  title: 'Contact and Directions to S.N. Fitness, Bethuadahari',
  description: 'Find S.N. Fitness in Bethuadahari, West Bengal. See our address, hours and map, or message us on WhatsApp.',
  alternates: { canonical: '/contact' },
};

export default function ContactPage() {
  return (
    <>
      <PageHero eyebrow="Visit Us" title="Find S.N. Fitness" />
      <section>
        <div className="wrap contact-wrap">
          <div className="contact-card">
            <div className="contact-row">
              <div className="ico">📍</div>
              <div><h4>Address</h4><p>{SITE.address}</p></div>
            </div>
            <div className="contact-row">
              <div className="ico">🕒</div>
              <div><h4>Hours</h4><p>Mon – Sat: 6 AM–12 PM &amp; 4 PM–10 PM · Sun: Closed</p></div>
            </div>
            <div className="contact-row">
              <div className="ico">⭐</div>
              <div><h4>Rating</h4><p>5.0 stars from 110 members</p></div>
            </div>
            <div className="contact-row">
              <div className="ico">💬</div>
              <div>
                <h4>Chat With Us</h4>
                <a href={WHATSAPP_HREF} target="_blank" rel="noopener noreferrer" className="wa-link">
                  Message us on WhatsApp →
                </a>
              </div>
            </div>
          </div>
          <div className="map-frame">
            <iframe
              src={SITE.mapEmbed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="S.N. Fitness location map"
            />
          </div>
        </div>
      </section>
    </>
  );
}
