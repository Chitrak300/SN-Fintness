import type { Metadata } from 'next';
import PageHero from '../../components/PageHero';

export const metadata: Metadata = {
  title: 'Gym Tour: See Our AC Training Floor',
  description: 'Watch a video walkthrough of the S.N. Fitness training floor, air-conditioned space and equipment in Bethuadahari.',
  alternates: { canonical: '/gym-tour' },
};

export default function GymTourPage() {
  return (
    <>
      <PageHero eyebrow="Take A Look Inside" title="See The Gym Floor">
        A quick walkthrough of our air-conditioned training floor and equipment.
      </PageHero>
      <section>
        <div className="wrap">
          <div className="video-frame">
            <video controls playsInline preload="metadata" aria-label="S.N. Fitness gym tour">
              <source src="/gym_pics.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>
    </>
  );
}
