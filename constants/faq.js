// Visible FAQ content and the source for the FAQPage JSON-LD.
// `category` groups questions in the rendered block; the schema ignores it.
//
// CONFIRM WITH CLIENT before publishing (see notes in each answer):
//   - Booking path: Giggster listing live? HoneyBook still the inquiry form?
//   - Hourly vs. day-rate availability by space
//   - On-site parking (carried over from the previous FAQ)

export const FAQ_CATEGORIES = [
  { key: 'booking', label: 'Booking & Rentals' },
  { key: 'events', label: 'Events & Corporate' },
  { key: 'media', label: 'Creative & Media' },
  { key: 'wellness', label: 'Gym, Fitness & Wellness' },
  { key: 'programs', label: 'Faith, Business & Programs' },
  { key: 'logistics', label: 'Location & Logistics' },
];

export const FAQ = [
  // ── Booking & Rentals ────────────────────────────────────────────────
  {
    category: 'booking',
    question: 'How do I book space at The LAB?',
    answer:
      'Send an inquiry through our Contact page and our team will follow up with availability, pricing, and setup options. Select spaces are also listed on Giggster if you prefer to book online.',
    // CONFIRM: Giggster listing live at publish time; remove the sentence if not.
  },
  {
    category: 'booking',
    question: 'What spaces are available to rent?',
    answer:
      'The LAB offers a large main hall for events and workshops, a conference room and meeting space, a full-size indoor basketball court and gymnasium, a movement and wellness studio, a podcast and content studio, and an outdoor gathering area. Spaces can be booked individually or combined for larger events.',
  },
  {
    category: 'booking',
    question: 'Can I rent by the hour or for a full day?',
    answer:
      'Both. Meeting rooms, the court, and the studios are typically booked by the hour, while events can be booked as half-day or full-day blocks. Pricing depends on the space, time, and setup, so contact us for a quote.',
    // CONFIRM: hourly vs. day-rate structure by space.
  },
  {
    category: 'booking',
    question: 'Is there a conference room for smaller meetings?',
    answer:
      'Yes. Our conference room seats small teams for board meetings, client presentations, interviews, and planning sessions, and the main hall can be set up for larger working sessions.',
  },
  {
    category: 'booking',
    question: 'Who rents space at The LAB?',
    answer:
      'Business professionals, entrepreneurs, corporate teams, creatives, coaches and trainers, sports teams, wellness practitioners, churches, and community organizations across Gardena, the South Bay, and greater Los Angeles.',
  },

  // ── Events & Corporate ───────────────────────────────────────────────
  {
    category: 'events',
    question: 'What types of events can be hosted at The LAB?',
    answer:
      'Corporate events, team offsite meetings, workshops, networking events, meetups, panels and speaker series, brand and creative activations, wellness pop-ups, private celebrations, and faith-based gatherings.',
  },
  {
    category: 'events',
    question: 'Can I host a corporate event or team offsite at The LAB?',
    answer:
      'Yes. The LAB is built for team offsites, leadership retreats, trainings, and company gatherings. Combine the main hall, conference room, and gym for a full day of meetings, breakouts, and team activities in one location.',
  },
  {
    category: 'events',
    question: 'Can brands host activations or pop-ups at The LAB?',
    answer:
      'Yes. Our flexible layout, indoor court, and outdoor area work well for brand activations, product launches, creative activations, and pop-up experiences. Tell us about your concept and we will help you plan the space.',
  },
  {
    category: 'events',
    question: 'Does The LAB provide event support or staff?',
    answer:
      'Yes. Our team can assist with planning, setup, hosting, and day-of coordination so your event runs smoothly.',
  },
  {
    category: 'events',
    question: 'Does The LAB collaborate on or co-host events?',
    answer:
      'Yes. We partner with organizers, brands, and practitioners on workshops, networking events, wellness experiences, and community gatherings. If you have an idea that fits our mission, reach out and let us know.',
  },

  // ── Creative & Media ─────────────────────────────────────────────────
  {
    category: 'media',
    question: 'Can I record a podcast or shoot content at The LAB?',
    answer:
      'Yes. Our creative media space is set up for podcast recording, interviews, video content, and photoshoots, and the main hall and court are also available as photography and film locations. Ask about equipment and setup when you inquire.',
  },
  {
    category: 'media',
    question: 'What is LAB Talks?',
    answer:
      'LAB Talks is our podcast connecting faith and the marketplace. We host conversations with faith-driven entrepreneurs and leaders, recorded in our studio at The LAB.',
  },

  // ── Gym, Fitness & Wellness ──────────────────────────────────────────
  {
    category: 'wellness',
    question: 'Can I rent the basketball court?',
    answer:
      'Yes. Our full-size indoor basketball court is available for team practices, pickup runs, leagues, clinics, camps, and tournaments, with openings throughout the week. Contact us for current availability and rates.',
  },
  {
    category: 'wellness',
    question: 'Who can rent the gymnasium?',
    answer:
      'Sports teams, leagues, trainers, schools, churches, youth programs, and companies looking for a space for team activities. The gym can also be configured for large events and activations.',
  },
  {
    category: 'wellness',
    question: 'Do you offer fitness, movement, or wellness classes?',
    answer:
      'Yes. The LAB hosts mat Pilates, stretching, movement, and training sessions in our wellness studio, along with health and wellness events throughout the year.',
  },
  {
    category: 'wellness',
    question: 'Can I host a wellness event or pop-up at The LAB?',
    answer:
      'Yes. We partner with health and wellness practitioners, trainers, and brands to host classes, workshops, and pop-up events. If you are looking for a space to grow your wellness practice, we would love to talk.',
  },

  // ── Faith, Business & Programs ───────────────────────────────────────
  {
    category: 'programs',
    question: 'What does "faith and business" mean at The LAB?',
    answer:
      'The LAB is a Christian organization where faith and business intentionally meet. Prayer and Scripture have a place in the room alongside the strategy and the spreadsheets, and our programs are built for entrepreneurs and professionals who want to grow with purpose.',
  },
  {
    category: 'programs',
    question: 'Do I need to share your faith to use The LAB?',
    answer:
      'No. The LAB is open to everyone. You do not need to share our faith to rent space, attend an event, or get real help with your business.',
  },
  {
    category: 'programs',
    question: 'What programs do you offer for entrepreneurs and professionals?',
    answer:
      'Workshops, cohorts, meetups, networking events, mentorship, and leadership development focused on personal and professional growth, including our Small Business Cohort for owners ready to scale.',
  },
  {
    category: 'programs',
    question: 'What is the Small Business Cohort?',
    answer:
      'A twelve-week, in-person program in the South Bay for business owners who already have paying customers and are ready to break through their next ceiling. The next cohort starts January 2027. Join the waitlist on our Cohort page.',
  },
  {
    category: 'programs',
    question: 'Is The LAB a nonprofit?',
    answer:
      'Yes. The LAB Inc. is a 501(c)(3) nonprofit. Space rentals and event partnerships help fund our programs, and contributions are tax-deductible to the extent permitted by law.',
  },

  // ── Location & Logistics ─────────────────────────────────────────────
  {
    category: 'logistics',
    question: 'Where is The LAB located?',
    answer:
      'The LAB is at 15916 Crenshaw Blvd, Gardena, CA 90249, in the South Bay. We are close to LAX with easy access from the 405, 91, and 105 freeways.',
  },
  {
    category: 'logistics',
    question: 'Is parking available on-site?',
    answer:
      'Yes. On-site parking is available for event guests, athletes, and members.',
    // CONFIRM: carried over from the previous FAQ.
  },
  {
    category: 'logistics',
    question: 'How can I stay informed about upcoming events and programs?',
    answer:
      'Follow The LAB on Instagram and LinkedIn, or contact us to be added to our mailing list for upcoming workshops, events, and cohort openings.',
  },
];
