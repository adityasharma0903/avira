import { createFileRoute } from '@tanstack/react-router';
import { SecurityPage } from '@/components/postpurchase/trust-pages';

export const Route = createFileRoute('/security')({
  head: () => ({
    meta: [
      { title: 'Security Architecture | AVIRA D2C' },
      { name: 'description', content: 'Enterprise security, fraud prevention, encryption, and tokenized QR architecture at AVIRA.' },
      { property: 'og:url', content: 'https://avirad2c.app/security' },
    ],
    links: [
      { rel: 'canonical', href: 'https://avirad2c.app/security' }
    ]
  }),
  component: SecurityPage,
});
