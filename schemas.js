const SITE = 'https://www.thelabinc.org';
const ORG_ID = `${SITE}/#organization`;
const LOGO =
  'https://images.squarespace-cdn.com/content/v1/688285c2e2a26d5f75c0134a/7b5e28d0-ceb3-4452-9ada-9f5c7621c0fb/the-lab-logo-resized.webp';

const SITE_DESCRIPTION =
  'The LAB is a non-profit growth hub and event space in Gardena, CA where faith and business intentionally meet. Entrepreneurs, business professionals, and community members come here to build businesses, develop themselves, connect with others, and create what matters.';

const GEO = {
  '@type': 'GeoCoordinates',
  latitude: 33.8837,
  longitude: -118.309,
};

export const AREA_SERVED = {
  '@type': 'GeoCircle',
  geoMidpoint: GEO,
  geoRadius: '80467', // meters (~50 miles)
};

export const websiteSchema = {
  '@type': 'WebSite',
  '@id': `${SITE}/#website`,
  name: 'The LAB Inc.',
  url: SITE,
  description: SITE_DESCRIPTION,
  publisher: { '@id': ORG_ID },
};

// Mirrors the block currently injected site-wide on thelabinc.org, plus
// contact/social fields and the offer catalog that links to the Services.
export function getLocalBusinessSchema(services = []) {
  return {
    '@type': ['LocalBusiness', 'NGO'],
    '@id': ORG_ID,
    name: 'The LAB Inc.',
    alternateName: 'The LAB',
    url: SITE,
    logo: { '@type': 'ImageObject', url: LOGO },
    image: LOGO,
    description: SITE_DESCRIPTION,
    email: 'hello@thelabinc.org',
    telephone: '+1-310-323-7626',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '15916 Crenshaw Blvd',
      addressLocality: 'Gardena',
      addressRegion: 'CA',
      postalCode: '90249',
      addressCountry: 'US',
    },
    geo: GEO,
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday',
        ],
        opens: '09:00',
        closes: '17:00',
      },
    ],
    areaServed: AREA_SERVED,
    sameAs: [
      'https://www.instagram.com/the.labinc',
      'https://www.linkedin.com/company/the-lab-incubator/',
    ],
    knowsAbout: [
      'Faith and business',
      'Entrepreneurship',
      'Corporate events',
      'Team offsite meetings',
      'Conference room rentals',
      'Basketball court rentals',
      'Health and wellness',
      'Creative media production',
      'Networking events',
      'Workshops',
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'The LAB offerings',
      itemListElement: services.map(({ slug }) => ({
        '@type': 'Offer',
        itemOffered: { '@id': `${SITE}/#service-${slug}` },
      })),
    },
  };
}

export function getServiceSchema({ slug, name, serviceType, description, url }) {
  return {
    '@type': 'Service',
    '@id': `${SITE}/#service-${slug}`,
    name,
    serviceType,
    description,
    url,
    provider: { '@id': ORG_ID },
    areaServed: AREA_SERVED,
  };
}

export function getFAQPageSchema(questions) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: questions.map((q) => ({
      '@type': 'Question',
      name: q.question,
      acceptedAnswer: { '@type': 'Answer', text: q.answer },
    })),
  };
}
