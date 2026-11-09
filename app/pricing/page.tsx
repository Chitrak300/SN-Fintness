import type { Metadata } from 'next';
import PageHero from '../../components/PageHero';

export const metadata: Metadata = {
  title: 'Gym Membership Pricing: Admission and Monthly Fee',
  description: 'S.N. Fitness membership: ₹1000 one-time admission and ₹400 monthly fee with full access to the AC gym floor.',
  alternates: { canonical: '/pricing' },
};

export default function PricingPage() {
  return (
    <>
      <PageHero eyebrow="Membership" title="Simple, Transparent Pricing">
        One-time admission fee plus an affordable monthly membership. No hidden charges.
      </PageHero>
      <section>
        <div className="wrap">
          <div className="pricing-grid">
            <div className="price-card">
              <h4>Admission Fee</h4>
              <div className="amount"><sup>₹</sup>1000</div>
              <span className="per">One-time, at joining</span>
              <ul>
                <li>Membership onboarding</li>
                <li>Fitness orientation</li>
                <li>Locker allotment</li>
              </ul>
            </div>
            <div className="price-card highlight">
              <span className="tag">Most Popular</span>
              <h4>Monthly Fee</h4>
              <div className="amount"><sup>₹</sup>400</div>
              <span className="per">Billed every month</span>
              <ul>
                <li>Full access, AC gym floor</li>
                <li>Both daily time slots</li>
                <li>Guidance from 7+ year coaches</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
