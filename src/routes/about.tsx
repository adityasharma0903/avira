import { createFileRoute } from '@tanstack/react-router';
import AboutPage from '@/components/postpurchase/about-page';

export const Route = createFileRoute('/about')({
  head: () => ({
    meta: [
      { title: 'About AVIRA | The Post-Purchase Growth Platform (avirad2c.app)' },
      {
        name: 'description',
        content: 'Learn about AVIRA (AVIRA D2C), our founding mission, and how we empower modern consumer brands to turn every delivered order into an enduring customer relationship.'
      },
      { property: 'og:title', content: 'About AVIRA | Every Order A Lasting Connection' },
      { property: 'og:description', content: 'AVIRA is the official post-purchase growth platform operating at avirad2c.app.' },
      { property: 'og:url', content: 'https://avirad2c.app/about' },
    ],
    links: [
      { rel: 'canonical', href: 'https://avirad2c.app/about' }
    ]
  }),
  component: AboutPage,
});
