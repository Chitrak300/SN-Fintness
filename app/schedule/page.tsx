import type { Metadata } from 'next';
import PageHero from '../../components/PageHero';

export const metadata: Metadata = {
  title: 'Gym Timings: Morning and Evening Slots',
  description: 'S.N. Fitness is open Monday to Saturday, 6 AM to 12 PM and 4 PM to 10 PM. Closed on Sunday.',
  alternates: { canonical: '/schedule' },
};

export default function SchedulePage() {
  return (
    <>
      <PageHero eyebrow="Gym Hours" title="When We're Open">
        Two training windows every day, Monday through Saturday.
      </PageHero>
      <section>
        <div className="wrap">
          <div className="led-board">
            <div className="led-row">
              <div className="led-day active"><span className="led-dot on" /> &nbsp;MON – SAT</div>
              <div />
              <div className="led-time">6:00 AM – 12:00 PM</div>
            </div>
            <div className="led-row">
              <div className="led-day active"><span className="led-dot on" /> &nbsp;MON – SAT</div>
              <div />
              <div className="led-time">4:00 PM – 10:00 PM</div>
            </div>
            <div className="led-row">
              <div className="led-day"><span className="led-dot" /> &nbsp;SUNDAY</div>
              <div />
              <div className="led-time closed">CLOSED</div>
            </div>
          </div>
          <p className="note">Plan your session around either the morning or evening slot.</p>
        </div>
      </section>
    </>
  );
}
