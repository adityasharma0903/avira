import { createFileRoute } from '@tanstack/react-router';
import ResourcesHubPage from '@/components/postpurchase/resources-hub-page';

export const Route = createFileRoute('/resources/')({
  head: () => ({
    meta: [
      { title: 'Resources & Playbooks | AVIRA Post-Purchase Platform' },
      {
        name: 'description',
        content: 'Expert playbooks, research reports, and technical guides on post-purchase marketing, D2C customer retention, gifting strategy, and unboxing UGC.'
      },
      { property: 'og:title', content: 'AVIRA Resources | Post-Purchase Playbooks' },
      { property: 'og:description', content: 'Tactical guides designed to help direct-to-consumer and gifting brands maximize customer lifetime value.' },
      { property: 'og:url', content: 'https://avirad2c.app/resources' },
    ],
    links: [
      { rel: 'canonical', href: 'https://avirad2c.app/resources' }
    ]
  }),
  component: ResourcesHubPage,
});
