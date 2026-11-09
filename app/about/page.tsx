import type { Metadata } from 'next';
import PageHero from '../../components/PageHero';

export const metadata: Metadata = {
  title: 'About Our AC Gym in Bethuadahari',
  description:
    'Learn about S.N. Fitness, a fully air-conditioned gym in Bethuadahari with premium equipment, experienced coaches and two daily training slots.',
  alternates: { canonical: '/about' },
};

const features = [
  { icon: '❄️', title: 'Fully Air-Conditioned', text: 'Train comfortably in every season, no compromises.' },
  { icon: '🏋️', title: 'Premium Equipment', text: 'Modern strength and cardio machines, well maintained.' },
  { icon: '🎯', title: 'Experienced Coaching', text: 'Every trainer on our floor has 7+ years of experience.' },
  { icon: '🕒', title: 'Two Daily Slots', text: 'Morning and evening sessions to fit your schedule.' },
];

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow="Why S.N. Fitness" title="Train In Comfort. Perform Without Limits.">
        S.N. Fitness is Bethuadahari&apos;s fully air-conditioned premium gym, built for people who take their training seriously, whether it is your first day or your thousandth.
      </PageHero>
      <section>
        <div className="wrap grid-2">
          {features.map((f) => (
            <div key={f.title} className="card">
              <div className="ico">{f.icon}</div>
              <h4>{f.title}</h4>
              <p>{f.text}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="alt">
        <div className="wrap" style={{ maxWidth: 720 }}>
          <h2>Built Around Consistency</h2>
          <p className="lead" style={{ maxWidth: 'none' }}>
            Every session is guided by coaches who have spent 7+ years in the field, in a space designed to keep you cool, focused and consistent all year round.
          </p>
        </div>
      </section>
    </>
  );
}
