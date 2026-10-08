import { createFileRoute } from '@tanstack/react-router';
import HowItWorksPage from '@/components/postpurchase/how-it-works-page';

export const Route = createFileRoute('/how-it-works')({
  head: () => ({
    meta: [
      { title: 'How It Works | AVIRA Post-Purchase Growth Platform' },
      {
        name: 'description',
        content: 'Discover how AVIRA connects physical unboxing inserts with zero-friction digital experiences to drive customer retention, UGC, referrals, and repeat purchases.'
      },
      { property: 'og:title', content: 'How It Works | AVIRA Post-Purchase Platform' },
      { property: 'og:description', content: 'The step-by-step unboxing architecture turning delivery packages into a repeatable growth flywheel.' },
      { property: 'og:url', content: 'https://avirad2c.app/how-it-works' },
    ],
    links: [
      { rel: 'canonical', href: 'https://avirad2c.app/how-it-works' }
    ]
  }),
  component: HowItWorksPage,
});
