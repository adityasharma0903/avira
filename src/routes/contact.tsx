import { createFileRoute } from '@tanstack/react-router';
import ContactPage from '@/components/postpurchase/contact-page';

export const Route = createFileRoute('/contact')({
  head: () => ({
    meta: [
      { title: 'Contact AVIRA | Post-Purchase Strategy & Enterprise Inquiries' },
      {
        name: 'description',
        content: 'Get in touch with the AVIRA post-purchase growth team. Inquire about custom packaging inserts, integrations, enterprise volume pilots, and partnerships.'
      },
      { property: 'og:title', content: 'Contact AVIRA | Speak With Our Team' },
      { property: 'og:description', content: 'Direct communication channels for brands, partners, and enterprise inquiries.' },
      { property: 'og:url', content: 'https://avirad2c.app/contact' },
    ],
    links: [
      { rel: 'canonical', href: 'https://avirad2c.app/contact' }
    ]
  }),
  component: ContactPage,
});
