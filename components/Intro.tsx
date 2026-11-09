'use client';

import { useEffect, useState } from 'react';

type Phase = 'logo' | 'name' | 'out' | 'done';

// 0s–2s: logo floats on its own. At 2s the name appears. At ~3.8s the overlay fades out.
export default function Intro() {
  const [phase, setPhase] = useState<Phase>('logo');

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const t1 = setTimeout(() => setPhase('name'), 2000);
    const t2 = setTimeout(() => setPhase('out'), 3800);
    const t3 = setTimeout(() => {
      setPhase('done');
      document.body.style.overflow = '';
    }, 4500);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      document.body.style.overflow = '';
    };
  }, []);

  if (phase === 'done') return null;

  return (
    <div className={`intro intro--${phase}`} aria-hidden="true">
      <div className="intro-logo-wrap">
        <img src="/gym_logo.jpg" alt="" className="intro-logo" />
      </div>
      <div className="intro-shadow" />
      <div className="intro-name">S.N. <span>FITNESS</span></div>
    </div>
  );
}
