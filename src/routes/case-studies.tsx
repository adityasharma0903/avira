import { createFileRoute } from '@tanstack/react-router';
import CaseStudiesPage from '@/components/postpurchase/case-studies-page';

export const Route = createFileRoute('/case-studies')({
  head: () => ({
    meta: [
      { title: 'Case Studies & Attribution | AVIRA Post-Purchase Platform' },
      {
        name: 'description',
        content: 'Explore verified post-purchase performance metrics. See how brands separate attributed repeat revenue from incremental revenue using AVIRA smart inserts.'
      },
      { property: 'og:title', content: 'AVIRA Case Studies & Attribution Integrity' },
      { property: 'og:description', content: 'Real proof, transparent attribution, and measurable repeat revenue metrics.' },
      { property: 'og:url', content: 'https://avirad2c.app/case-studies' },
    ],
    links: [
      { rel: 'canonical', href: 'https://avirad2c.app/case-studies' }
    ]
  }),
  component: CaseStudiesPage,
});
