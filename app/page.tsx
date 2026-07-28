'use client';

import { useState } from 'react';

const SITE_CONFIG = {
  whatsappNumber: "918972034051",
  whatsappMessage: "Hi S.N. Fitness, I'd like to know more about membership."
};

export default function Home() {
  const [navOpen, setNavOpen] = useState(false);

  const openWhatsApp = () => {
    const url = "https://wa.me/" + SITE_CONFIG.whatsappNumber +
                "?text=" + encodeURIComponent(SITE_CONFIG.whatsappMessage);
    window.open(url, "_blank");
  };

  const closeNav = () => setNavOpen(false);

  return (
    <>
      {/* HEADER / NAV */}
      <header id="header">
        <nav className="wrap">
          <div className="logo" id="main-logo">
            S.N. <span>FITNESS</span>
          </div>
          <ul className={`nav-links ${navOpen ? 'open' : ''}`} id="navLinks">
            <li><a href="#about" onClick={closeNav}>About</a></li>
            <li><a href="#gym-video" onClick={closeNav}>Gym Tour</a></li>
            <li><a href="#trainers" onClick={closeNav}>Trainers</a></li>
            <li><a href="#schedule" onClick={closeNav}>Schedule</a></li>
            <li><a href="#pricing" onClick={closeNav}>Pricing</a></li>
            <li><a href="#contact" onClick={closeNav}>Contact</a></li>
          </ul>
          <div className="nav-cta">
            <a href="#pricing" className="btn btn-outline" id="pricing-nav-btn">View Pricing</a>
            <button
              className="burger"
              id="burgerBtn"
              aria-label="Toggle menu"
              onClick={() => setNavOpen(!navOpen)}
            >
              ☰
            </button>
          </div>
        </nav>
      </header>

      {/* HERO */}
      <section className="hero" id="hero" style={{ borderBottom: 'none' }}>
        <div className="wrap">
          <div>
            <span className="eyebrow">Bethuadahari's Premium AC Gym</span>
            <h1>
              BUILD YOUR<br /><span className="accent">STRONGEST</span> SELF
            </h1>
            <p className="lead">
              Fully air-conditioned, premium training floor with coaches who have 7+ years of hands-on experience. No shortcuts — just real results.
            </p>
            <div className="hero-cta">
              <a href="#pricing" className="btn btn-solid" id="join-now-hero-btn">Join Now</a>
              <a href="#schedule" className="btn btn-outline" id="timings-hero-btn">See Timings</a>
            </div>
            <div className="hero-rating">
              <span className="stars">★★★★★</span>
              <span>5.0 rating from 110 members</span>
            </div>
          </div>
          <div className="hero-visual">
            <img src="/gym_logo.jpg" alt="S.N. Fitness Logo" className="hero-logo" id="hero-logo-img" />
          </div>
        </div>
      </section>

      {/* STAT STRIP */}
      <div className="stat-strip" id="stat-strip">
        <div className="wrap">
          <div className="stat"><div className="num">5.0★</div><div className="cap">110 Members Rated</div></div>
          <div className="stat"><div className="num">7+ Yrs</div><div className="cap">Trainer Experience</div></div>
          <div className="stat"><div className="num">100%</div><div className="cap">Air Conditioned</div></div>
          <div className="stat"><div className="num">6</div><div className="cap">Days Open Weekly</div></div>
        </div>
      </div>

      {/* ABOUT */}
      <section className="about" id="about">
        <div className="wrap">
          <div>
            <span className="eyebrow">Why S.N. Fitness</span>
            <h2>Train In Comfort.<br />Perform Without Limits.</h2>
            <p>
              S.N. Fitness is Bethuadahari's fully air-conditioned premium gym, built for people who take their training seriously — whether that means your first day in the gym or your thousandth.
            </p>
            <p>
              Every session is guided by coaches who've spent 7+ years in the field, in a space designed to keep you cool, focused, and consistent all year round.
            </p>
          </div>
          <div className="feature-list">
            <div className="feature" id="feature-ac">
              <div className="ico">❄️</div>
              <h4>Fully Air-Conditioned</h4>
              <p>Train comfortably in every season, no compromises.</p>
            </div>
            <div className="feature" id="feature-equipment">
              <div className="ico">🏋️</div>
              <h4>Premium Equipment</h4>
              <p>Modern strength and cardio machines, well maintained.</p>
            </div>
            <div className="feature" id="feature-coaching">
              <div className="ico">🎯</div>
              <h4>Experienced Coaching</h4>
              <p>Every trainer on our floor has 7+ years of experience.</p>
            </div>
            <div className="feature" id="feature-slots">
              <div className="ico">🕒</div>
              <h4>Two Daily Slots</h4>
              <p>Morning and evening sessions to fit your schedule.</p>
            </div>
          </div>
        </div>
      </section>

      {/* GYM VIDEO */}
      <section className="gym-video" id="gym-video">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">Take A Look Inside</span>
            <h2>See The Gym Floor</h2>
            <p>A quick walkthrough of our air-conditioned training floor and equipment.</p>
          </div>
          <div className="video-frame">
            <video controls playsInline preload="metadata" id="gym-tour-video">
              <source src="/gym_pics.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>

      {/* TRAINERS */}
      <section className="trainers" id="trainers">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">Our Coaches</span>
            <h2>Trained By The Best</h2>
            <p>Every coach at S.N. Fitness brings 7+ years of hands-on training experience to help you train safely and effectively.</p>
          </div>
          <div className="trainer-grid">
            <div className="trainer-card" id="trainer-strength">
              <div className="trainer-info">
                <h4>Head Strength Coach</h4>
                <span className="trainer-tag">7+ Years Experience</span>
                <p>Specializes in strength training and injury-safe form correction.</p>
              </div>
            </div>
            <div className="trainer-card" id="trainer-weightloss">
              <div className="trainer-info">
                <h4>Fitness & Weight-Loss Coach</h4>
                <span className="trainer-tag">7+ Years Experience</span>
                <p>Focused on fat-loss programs and sustainable fitness habits.</p>
              </div>
            </div>
            <div className="trainer-card" id="trainer-functional">
              <div className="trainer-info">
                <h4>Functional Training Coach</h4>
                <span className="trainer-tag">7+ Years Experience</span>
                <p>Guides mobility, functional strength and athletic conditioning.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SCHEDULE - LED BOARD */}
      <section className="schedule" id="schedule">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">Gym Hours</span>
            <h2>When We're Open</h2>
            <p>Two training windows every day, Monday through Saturday.</p>
          </div>
          <div className="led-board" id="led-board">
            <div className="led-row">
              <div className="led-day active">
                <span className="led-dot on"></span>&nbsp; MON – SAT
              </div>
              <div></div>
              <div className="led-time">6:00 AM – 12:00 PM</div>
            </div>
            <div className="led-row">
              <div className="led-day active">
                <span className="led-dot on"></span>&nbsp; MON – SAT
              </div>
              <div></div>
              <div className="led-time">4:00 PM – 10:00 PM</div>
            </div>
            <div className="led-row">
              <div className="led-day">
                <span className="led-dot"></span>&nbsp; SUNDAY
              </div>
              <div></div>
              <div className="led-time closed">CLOSED</div>
            </div>
          </div>
          <p className="schedule-note">Open every day except Sunday — plan your session around either the morning or evening slot.</p>
        </div>
      </section>

      {/* PRICING */}
      <section className="pricing" id="pricing">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">Membership</span>
            <h2>Simple, Transparent Pricing</h2>
            <p>One-time admission fee plus an affordable monthly membership. No hidden charges.</p>
          </div>
          <div className="pricing-grid">
            <div className="price-card" id="pricing-admission">
              <h4>Admission Fee</h4>
              <div className="amount"><sup>₹</sup>1000</div>
              <span className="per">One-time, at joining</span>
              <ul>
                <li>Membership onboarding</li>
                <li>Fitness orientation</li>
                <li>Locker allotment</li>
              </ul>
            </div>
            <div className="price-card highlight" id="pricing-monthly">
              <span className="tag">Most Popular</span>
              <h4>Monthly Fee</h4>
              <div className="amount"><sup>₹</sup>400</div>
              <span className="per">Billed every month</span>
              <ul>
                <li>Full access, AC gym floor</li>
                <li>Both daily time slots</li>
                <li>Guidance from 7+ yr coaches</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="contact" id="contact" style={{ borderBottom: 'none' }}>
        <div className="wrap">
          <div>
            <div className="section-head">
              <span className="eyebrow">Visit Us</span>
              <h2>Find S.N. Fitness</h2>
            </div>
            <div className="contact-card" id="contact-info-card">
              <div className="contact-row">
                <div className="ico">📍</div>
                <div>
                  <h4>Address</h4>
                  <p>J96G+FH9, Mathpara St, Bethuadahari, West Bengal 741126</p>
                </div>
              </div>
              <div className="contact-row">
                <div className="ico">🕒</div>
                <div>
                  <h4>Hours</h4>
                  <p>Mon – Sat: 6 AM–12 PM &amp; 4 PM–10 PM · Sun: Closed</p>
                </div>
              </div>
              <div className="contact-row">
                <div className="ico">⭐</div>
                <div>
                  <h4>Rating</h4>
                  <p>5.0 stars from 110 members</p>
                </div>
              </div>
              <div className="contact-row">
                <div className="ico">💬</div>
                <div>
                  <h4>Chat With Us</h4>
                  <button
                    onClick={openWhatsApp}
                    style={{
                      background: 'none',
                      border: 'none',
                      padding: 0,
                      cursor: 'pointer',
                      color: 'var(--color-red-bright)',
                      fontWeight: 700,
                      fontFamily: 'inherit',
                      fontSize: 'inherit'
                    }}
                    id="whatsapp-text-link"
                  >
                    Message us on WhatsApp →
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="map-frame" id="map-frame">
            <iframe
              src="https://www.google.com/maps?q=J96G%2BFH9,+Mathpara+St,+Bethuadahari,+West+Bengal+741126&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="S.N. Fitness Location Map"
            />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="footer">
        <div className="wrap">
          <div className="foot-logo">S.N. <span>FITNESS</span></div>
          <p>J96G+FH9, Mathpara St, Bethuadahari, West Bengal 741126</p>
        </div>
        <div className="wrap foot-bottom">
          © {new Date().getFullYear()} S.N. Fitness. All rights reserved.
        </div>
      </footer>

      {/* FLOATING WHATSAPP BUTTON */}
      <div
        className="whatsapp-float"
        onClick={openWhatsApp}
        title="Chat on WhatsApp"
        id="whatsapp-float-btn"
      >
        <div className="ping"></div>
        <svg viewBox="0 0 32 32">
          <path d="M16.001 3C9.376 3 4 8.373 4 15c0 2.61.86 5.02 2.32 6.98L4.99 27.98a1 1 0 0 0 1.24 1.22l6.2-1.98A11.94 11.94 0 0 0 16 27c6.627 0 12-5.373 12-12S22.628 3 16.001 3Zm6.24 16.63c-.27.75-1.55 1.44-2.13 1.5-.55.06-1.05.28-3.54-.74-2.98-1.22-4.9-4.2-5.05-4.4-.15-.2-1.22-1.62-1.22-3.1 0-1.47.77-2.19 1.05-2.49.27-.29.6-.36.8-.36.2 0 .4 0 .58.01.19.01.44-.07.68.53.27.68.9 2.34.98 2.51.08.17.13.37.02.59-.11.22-.17.36-.33.55-.16.19-.34.42-.49.57-.16.15-.33.32-.14.63.19.31.85 1.4 1.83 2.27 1.26 1.12 2.32 1.47 2.65 1.63.33.16.52.14.71-.08.22-.25.9-1.06 1.14-1.42.24-.36.48-.3.79-.18.32.12 2.02.96 2.37 1.13.35.17.58.26.66.4.09.15.09.85-.18 1.6Z" />
        </svg>
      </div>
    </>
  );
}
