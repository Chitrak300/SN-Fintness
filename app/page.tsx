import type { Metadata } from 'next';
import Link from 'next/link';
import { WHATSAPP_HREF } from '../lib/site';

export const metadata: Metadata = {
  title: { absolute: 'S.N. Fitness | Premium AC Gym in Bethuadahari' },
  description:
    'Train at S.N. Fitness, a fully air-conditioned gym in Bethuadahari. Morning and evening slots, coaches with 7+ years of experience, and affordable monthly membership.',
  alternates: { canonical: '/' },
};

const explore = [
  { href: '/about', icon: '❄️', title: 'About the Gym', text: 'A fully air-conditioned floor built for serious training.' },
  { href: '/gym-tour', icon: '🎥', title: 'Gym Tour', text: 'Watch a walkthrough of our training floor and equipment.' },
  { href: '/trainers', icon: '🎯', title: 'Our Trainers', text: 'Meet coaches with 7+ years of hands-on experience.' },
  { href: '/schedule', icon: '🕒', title: 'Timings', text: 'Morning and evening slots, Monday to Saturday.' },
  { href: '/pricing', icon: '💳', title: 'Pricing', text: 'One-time admission and an affordable monthly fee.' },
  { href: '/contact', icon: '📍', title: 'Visit Us', text: 'Find the address, call or message us on WhatsApp.' },
];

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <video
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
          tabIndex={-1}
        >
          <source src="/gym_pics.mp4" type="video/mp4" />
        </video>
        <div className="hero-overlay" />
        <div className="wrap">
          <span className="eyebrow">Bethuadahari&apos;s Premium AC Gym</span>
          <h1>
            Build Your <span className="accent">Strongest</span> Self
          </h1>
          <p className="lead">
            Fully air-conditioned training floor and coaches with 7+ years of hands-on experience. No shortcuts, just real results.
          </p>
          <div className="hero-cta">
            <Link href="/pricing" className="btn btn-solid">Join Now</Link>
            <Link href="/schedule" className="btn btn-outline">See Timings</Link>
          </div>
          <div className="hero-rating">
            <span className="stars">★★★★★</span>
            <span>5.0 rating from 110 members</span>
          </div>
        </div>
      </section>

      <div className="stat-strip">
        <div className="wrap">
          <div className="stat"><div className="num">5.0★</div><div className="cap">110 Members Rated</div></div>
          <div className="stat"><div className="num">7+ Yrs</div><div className="cap">Trainer Experience</div></div>
          <div className="stat"><div className="num">100%</div><div className="cap">Air Conditioned</div></div>
          <div className="stat"><div className="num">6</div><div className="cap">Days Open Weekly</div></div>
        </div>
      </div>

      <section>
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">Explore S.N. Fitness</span>
            <h2>Everything You Need To Know</h2>
            <p>Each part of our gym has its own page. Pick a topic to learn more.</p>
          </div>
          <div className="grid-3">
            {explore.map((item) => (
              <Link key={item.href} href={item.href} className="card">
                <div className="ico">{item.icon}</div>
                <h4>{item.title}</h4>
                <p>{item.text}</p>
                <span className="more">Read more →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="wrap">
          <h2>Start Training Today</h2>
          <p>Come in for a visit or message us on WhatsApp to ask about membership.</p>
          <div className="hero-cta">
            <Link href="/pricing" className="btn btn-solid">View Pricing</Link>
            <a href={WHATSAPP_HREF} target="_blank" rel="noopener noreferrer" className="btn btn-outline">Chat on WhatsApp</a>
          </div>
        </div>
      </section>
    </>
  );
}
