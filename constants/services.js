// Offerings promoted in search. Each entry becomes a schema.org Service.
// `slug` becomes the Service @id; `url` must be a live page.

const SITE = 'https://www.thelabinc.org';

export const SERVICES = [
  {
    slug: 'event-space-rental',
    name: 'Event Space Rental',
    serviceType: 'Event venue rental',
    description:
      'Flexible event space in Gardena, CA for corporate events, networking events, meetups, workshops, private celebrations, and faith-based gatherings, with indoor and outdoor areas and event support from our team.',
    url: `${SITE}/ourspace`,
  },
  {
    slug: 'corporate-events-team-offsites',
    name: 'Corporate Events & Team Offsites',
    serviceType: 'Corporate event venue',
    description:
      'Host team offsite meetings, leadership retreats, trainings, and company gatherings at The LAB. Combine the main hall, conference room, and gym for a full day of meetings, breakouts, and team activities in one South Bay location.',
    url: `${SITE}/ourspace`,
  },
  {
    slug: 'conference-room-rental',
    name: 'Conference Room & Meeting Space Rental',
    serviceType: 'Meeting room rental',
    description:
      'Conference room and meeting space for board meetings, client presentations, interviews, and planning sessions, available by the hour near Los Angeles and LAX.',
    url: `${SITE}/ourspace`,
  },
  {
    slug: 'basketball-court-gym-rental',
    name: 'Basketball Court & Gym Rental',
    serviceType: 'Gymnasium rental',
    description:
      'Full-size indoor basketball court and gymnasium in Gardena, CA available for team practices, pickup runs, leagues, clinics, camps, tournaments, and large events, with openings throughout the week.',
    url: `${SITE}/ourspace`,
  },
  {
    slug: 'creative-media-space',
    name: 'Creative Media Space',
    serviceType: 'Studio rental',
    description:
      'Podcast and content studio plus photo and video locations for podcast recording, interviews, photoshoots, still photography, and branded content.',
    url: `${SITE}/ourspace`,
  },
  {
    slug: 'brand-creative-activations',
    name: 'Brand & Creative Activations',
    serviceType: 'Brand activation venue',
    description:
      'Space and support for brand activations, product launches, creative activations, and pop-up experiences across the main hall, indoor court, and outdoor gathering area.',
    url: `${SITE}/ourspace`,
  },
  {
    slug: 'fitness-movement-wellness',
    name: 'Fitness, Movement & Wellness',
    serviceType: 'Health and wellness programs',
    description:
      'Mat Pilates, stretching, movement, and training sessions in our wellness studio, plus health and wellness pop-up events hosted in partnership with practitioners, trainers, and wellness brands.',
    url: `${SITE}/ourspace`,
  },
  {
    slug: 'entrepreneurship-professional-growth',
    name: 'Entrepreneurship & Professional Growth',
    serviceType: 'Business development programs',
    description:
      'Workshops, meetups, networking events, mentorship, and leadership development for entrepreneurs and business professionals focused on personal and professional growth.',
    url: `${SITE}/`,
  },
  {
    slug: 'small-business-cohort',
    name: 'Small Business Cohort',
    serviceType: 'Business accelerator program',
    description:
      'A twelve-week, in-person cohort in the South Bay for business owners with paying customers who are ready to find what is capping their growth and build systems to break through it.',
    url: `${SITE}/cohort`,
  },
  {
    slug: 'faith-and-business',
    name: 'Faith & Business Community',
    serviceType: 'Faith-based business community',
    description:
      'A community where faith and business intentionally meet, including LAB Talks, our podcast with faith-driven entrepreneurs and leaders, and gatherings for purpose-driven professionals. Open to everyone.',
    url: `${SITE}/`,
  },
  {
    slug: 'event-collaboration',
    name: 'Event Collaboration & Partnerships',
    serviceType: 'Event partnership',
    description:
      'Co-hosted workshops, networking events, wellness experiences, and community gatherings with organizers, brands, and practitioners whose work fits our mission.',
    url: `${SITE}/contact`,
  },
];
