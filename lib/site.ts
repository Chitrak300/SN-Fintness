export const SITE = {
  name: 'S.N. Fitness',
  url: 'https://sn-fintness.vercel.app',
  phone: '918972034051',
  whatsappMessage: "Hi S.N. Fitness, I'd like to know more about membership.",
  address: 'J96G+FH9, Mathpara St, Bethuadahari, West Bengal 741126',
  mapEmbed:
    'https://www.google.com/maps?q=J96G%2BFH9,+Mathpara+St,+Bethuadahari,+West+Bengal+741126&output=embed',
};

export const WHATSAPP_HREF = `https://wa.me/${SITE.phone}?text=${encodeURIComponent(SITE.whatsappMessage)}`;

export const NAV = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/gym-tour', label: 'Gym Tour' },
  { href: '/trainers', label: 'Trainers' },
  { href: '/schedule', label: 'Schedule' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/contact', label: 'Contact' },
];
