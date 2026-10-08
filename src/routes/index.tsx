import { createFileRoute } from '@tanstack/react-router';
import Home from '@/components/postpurchase/home';

export const Route = createFileRoute('/')({
  head: () => ({
    meta: [
      { title: 'AVIRA D2C | Post-Purchase Growth Platform for D2C & E-commerce Brands' },
      {
        name: 'description',
        content: 'AVIRA D2C helps e-commerce, D2C and gifting brands turn delivered orders into UGC, referrals, rewards and repeat purchases through a measurable post-purchase experience.'
      },
      { property: 'og:title', content: 'AVIRA D2C | Post-Purchase Growth Platform for D2C & E-commerce Brands' },
      {
        property: 'og:description',
        content: 'Turn delivered orders into UGC, referrals, rewards and repeat purchases. Discover measurable post-purchase growth with AVIRA.'
      },
      { property: 'og:url', content: 'https://avirad2c.app/' },
      { property: 'og:type', content: 'website' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'AVIRA D2C | Post-Purchase Growth Platform' },
      { name: 'twitter:description', content: 'Turn every delivered order into your next customer. Post-purchase growth for D2C & gifting brands.' }
    ],
    links: [
      { rel: 'canonical', href: 'https://avirad2c.app/' }
    ]
  }),
  component: Home,
});
