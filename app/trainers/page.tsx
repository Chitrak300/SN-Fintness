import type { Metadata } from 'next';
import PageHero from '../../components/PageHero';

export const metadata: Metadata = {
  title: 'Our Coaches: Strength, Weight-Loss and Functional Training',
  description: 'Meet the S.N. Fitness coaches: strength, fat-loss and functional training specialists, each with 7+ years of experience.',
  alternates: { canonical: '/trainers' },
};

const trainers = [
  { title: 'Head Strength Coach', text: 'Specializes in strength training and injury-safe form correction.' },
  { title: 'Fitness & Weight-Loss Coach', text: 'Focused on fat-loss programs and sustainable fitness habits.' },
  { title: 'Functional Training Coach', text: 'Guides mobility, functional strength and athletic conditioning.' },
];

export default function TrainersPage() {
  return (
    <>
      <PageHero eyebrow="Our Coaches" title="Trained By The Best">
        Every coach at S.N. Fitness brings 7+ years of hands-on training experience to help you train safely and effectively.
      </PageHero>
      <section>
        <div className="wrap grid-3">
          {trainers.map((t) => (
            <div key={t.title} className="card">
              <h4>{t.title}</h4>
              <span className="trainer-tag">7+ Years Experience</span>
              <p>{t.text}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
