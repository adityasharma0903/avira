import { createFileRoute } from '@tanstack/react-router';
import CustomerQrPage from '@/components/postpurchase/customer-qr-page';

export const Route = createFileRoute('/q/$token')({
  head: () => ({
    meta: [
      { name: 'robots', content: 'noindex, nofollow' },
      { title: 'Exclusive Unboxing Experience | AVIRA D2C' },
      { name: 'description', content: 'Secure unboxing rewards portal powered by AVIRA D2C.' },
    ],
    links: [
      { rel: 'canonical', href: 'https://avirad2c.app/' }
    ]
  }),
  component: CustomerQrPage,
});
