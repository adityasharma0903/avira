import { createFileRoute } from '@tanstack/react-router';
import Demo from '@/components/postpurchase/demo';

export const Route = createFileRoute('/demo')({
  head: () => ({
    meta: [
      { title: 'Experience AVIRA — Interactive Post-Purchase Demo' },
      { name: 'description', content: 'Follow an order from delivery to QR engagement, customer content, rewards and repeat purchase in the interactive AVIRA demo.' },
      { property: 'og:title', content: 'Experience AVIRA — Interactive Post-Purchase Demo' },
      { property: 'og:description', content: 'Try the complete customer journey and watch merchant results update in real time.' },
      { property: 'og:url', content: 'https://avirad2c.app/demo' },
      { property: 'og:type', content: 'website' },
      { name: 'twitter:card', content: 'summary_large_image' }
    ],
    links: [
      { rel: 'canonical', href: 'https://avirad2c.app/demo' }
    ]
  }),
  component: Demo,
});
