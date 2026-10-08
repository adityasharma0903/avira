import { createFileRoute } from '@tanstack/react-router';
import TemplatesPage from '@/components/postpurchase/templates-page';

export const Route = createFileRoute('/templates')({
  head: () => ({
    meta: [
      { title: 'AVIRA — Gift Box Insert QR Card Templates' },
      { name: 'description', content: 'Explore physical gift box insert card templates with QR codes that turn every unboxing into reviews, UGC photos, referrals and repeat purchases.' },
      { property: 'og:title', content: 'AVIRA — Physical Gift Box QR Card Templates' },
      { property: 'og:description', content: 'Premium double-sided packaging insert cards for e-commerce unboxing and gift boxes.' },
      { property: 'og:url', content: 'https://avirad2c.app/templates' },
      { property: 'og:type', content: 'website' },
      { name: 'twitter:card', content: 'summary_large_image' },
    ],
    links: [
      { rel: 'canonical', href: 'https://avirad2c.app/templates' }
    ]
  }),
  component: TemplatesPage,
});
