import { createFileRoute } from '@tanstack/react-router';
import StartFreePage from '@/components/postpurchase/start-free-page';

export const Route = createFileRoute('/start-free')({
  head: () => ({
    meta: [
      { title: 'AVIRA — Start Free Pilot & Brand Inquiry' },
      {
        name: 'description',
        content: 'Submit your query or start your free AVIRA pilot. Connect physical unboxing with customer engagement, UGC photos, referrals, and repeat sales.',
      },
      { property: 'og:title', content: 'AVIRA — Start Free Pilot & Packaging Query' },
      {
        property: 'og:description',
        content: 'Tell us about your brand packaging. Request custom QR card templates or launch a 14-day free pilot.',
      },
      { property: 'og:url', content: 'https://avirad2c.app/start-free' },
      { property: 'og:type', content: 'website' },
      { name: 'twitter:card', content: 'summary_large_image' },
    ],
    links: [
      { rel: 'canonical', href: 'https://avirad2c.app/start-free' }
    ]
  }),
  component: StartFreePage,
});
