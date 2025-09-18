const SITE_DESCRIPTION =
  'The LAB Inc. is a nonprofit business incubator and event hub where faith and business intentionally collide. We are dedicated to empowering entrepreneurs, businesses (small and large), and community members through collaboration, innovation, and wellness.';

// Website Schema
export const websiteSchema = {
  '@type': 'WebSite',
  name: 'The LAB Inc.',
  url: 'https://www.thelabinc.org',
  description: SITE_DESCRIPTION,
  publisher: {
    '@id': 'https://www.thelabinc.org#organization',
  },
};

export const localBusinessSchema = {
  '@type': 'LocalBusiness',
  '@id': 'https://www.thelabinc.org#organization',
  name: 'The LAB Inc.',
  url: 'https://www.thelabinc.org',
  logo: 'https://images.squarespace-cdn.com/content/v1/688285c2e2a26d5f75c0134a/7b5e28d0-ceb3-4452-9ada-9f5c7621c0fb/the-lab-logo-resized.webp',
  description: SITE_DESCRIPTION,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Gardena',
    addressRegion: 'CA',
    addressCountry: 'US',
    postalCode: '90249',
    streetAddress: '15916 Crenshaw Blvd',
  },
  telephone: '+1-310-323-7626',
  openingHours: ['Mo-Su 09:00-17:00'],
  serviceArea: {
    '@type': 'GeoCircle',
    geoMidpoint: {
      '@type': 'GeoCoordinates',
      latitude: 33.8837,
      longitude: -118.309,
    },
    geoRadius: '50',
  },
};

export function getServiceSchema(name, description, url) {
  return {
    '@type': 'Service',
    name,
    description,
    url,
    provider: {
      '@id': 'https://www.thelabinc.org#organization',
    },
  };
}

// FAQPage Schema generator
export function getFAQPageSchema(questions) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: questions.map((q) => ({
      '@type': 'Question',
      name: q.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: q.answer,
      },
    })),
  };
}
