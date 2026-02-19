const images = {
  hero: '/images/hero.jpg',
  indoor: '/images/highlight-indoor.jpg',
  garden: '/images/highlight-garden.jpg',
  banquet: '/images/highlight-banquet.jpg',
  gallery01: '/images/gallery-01.jpg',
  gallery02: '/images/gallery-02.jpg',
  gallery03: '/images/gallery-03.jpg',
  gallery04: '/images/gallery-04.jpg',
  gallery05: '/images/gallery-05.jpg',
  gallery06: '/images/gallery-06.jpg',
  eventUpcoming: '/images/event-upcoming.jpg',
  eventPrivate: '/images/event-private.jpg',
  eventCorporate: '/images/event-corporate.jpg',
  spaceBoho: '/images/space-boho.jpg',
  spaceDelicia: '/images/space-delicia.jpg',
  spaceMaison: '/images/space-maison.jpg',
};

export const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Our Menus', path: '/our-menus' },
  { label: 'Blogs', path: '/blogs' },
  { label: 'Venue', path: '/venue' },
  { label: 'Events', path: '/events' },
  { label: 'About Us', path: '/about-us' },
  { label: 'Contact Us', path: '/contact-us' },
];

export const sharedTestimonials = [
  {
    quote:
      'Every detail felt intentional, calm, and deeply elegant. The venue transformed our day into a timeless memory.',
    author: 'Isabella Hart, Bride',
  },
  {
    quote:
      'The planning flow, culinary experience, and atmosphere were exceptionally refined. Guests still talk about it.',
    author: 'Noah Bennett, Groom',
  },
  {
    quote:
      'From ceremony to final toast, the team delivered quiet luxury and flawless execution at every step.',
    author: 'Amelia Scott, Private Event Host',
  },
];

export const pageConfigs = {
  home: {
    route: '/',
    seo: {
      title: 'Veloura Estate | Royal Wedding Venue',
      description: 'Ultra-elegant wedding venue for timeless ceremonies, curated receptions, and luxury celebrations.',
    },
    hero: {
      label: 'Luxury Wedding Venue',
      title: 'Where Your Forever Begins',
      subtitle: 'Celebrate in an airy, refined estate designed for cinematic vows and unforgettable evenings.',
      image: images.hero,
      overlayClass: 'bg-black/28',
      cta: { text: 'Explore Venue', href: '/venue' },
    },
    cta: { text: 'Book A Tour', href: '/contact-us' },
    sections: [
      {
        type: 'highlights',
        title: 'Designed for Every Celebration Style',
        items: [
          { title: 'Indoor Hall', subtitle: 'Grand vaulted interiors for timeless vows.', image: images.indoor },
          { title: 'Garden Ceremony', subtitle: 'Open-air romance framed by elegant greenery.', image: images.garden },
          { title: 'Banquet Space', subtitle: 'Curated receptions for refined celebrations.', image: images.banquet },
        ],
      },
      {
        type: 'galleryPreview',
        title: 'Signature Moments in Light',
        items: [images.gallery01, images.gallery02, images.gallery03, images.gallery04, images.gallery05, images.gallery06],
      },
      {
        type: 'features',
        title: 'Why Choose Us',
        items: [
          { title: 'Decoration', copy: 'Elegant floral styling and immersive visual direction.' },
          { title: 'Planning', copy: 'End-to-end timeline design and guest flow coordination.' },
          { title: 'Catering', copy: 'Refined seasonal menus with private tasting sessions.' },
          { title: 'Photography', copy: 'Curated capture of every emotional and architectural detail.' },
        ],
      },
      { type: 'testimonials', items: sharedTestimonials },
      {
        type: 'spaces',
        title: 'Favorite Event Venues',
        items: [
          { title: 'Boho Garden', subtitle: 'Classic Weddings', image: images.spaceBoho },
          { title: 'Delicia Concept', subtitle: 'Summer Weddings', image: images.spaceDelicia },
          { title: 'Maison Loire', subtitle: 'Classic Weddings', image: images.spaceMaison },
        ],
      },
      {
        type: 'ctaStrip',
        title: 'Begin Your Venue Journey With a Private Tour',
        subtitle: 'Share your date and vision. Our team will guide you through every curated space.',
      },
    ],
  },

  gallery: {
    route: '/gallery',
    seo: {
      title: 'Gallery | Veloura Estate',
      description: 'Explore editorial wedding moments, ceremony scenes, and refined celebration details at Veloura Estate.',
    },
    hero: {
      label: 'Gallery',
      title: 'A Curated Visual Story of Celebrations',
      subtitle: 'An immersive collection of ceremony elegance, floral artistry, and luxurious receptions.',
      image: images.gallery06,
      overlayClass: 'bg-black/32',
      cta: { text: 'Book a Tour', href: '/contact-us' },
    },
    cta: { text: 'Start Planning', href: '/contact-us' },
    sections: [
      {
        type: 'masonry',
        title: 'Masonry Story Wall',
        items: [images.gallery01, images.gallery02, images.gallery03, images.gallery04, images.gallery05, images.gallery06],
      },
      {
        type: 'categories',
        title: 'Curated Category Strip',
        items: ['Ceremony Aisles', 'Editorial Couple Portraits', 'Reception Styling', 'Floral Installations', 'Signature Details'],
      },
      {
        type: 'featuredBand',
        title: 'Wide Featured Composition',
        copy: 'Each composition captures balance, emotion, and the architectural beauty of the estate.',
        image: images.hero,
      },
      {
        type: 'coupleCarousel',
        title: 'Couple Moments Carousel',
        items: [images.gallery03, images.gallery06, images.gallery01, images.gallery05],
      },
      {
        type: 'socialCallout',
        title: 'Follow Us on Instagram',
        copy: '@veloura_day for latest visual stories and curated inspiration.',
      },
      {
        type: 'inquiry',
        title: 'Request a Personalized Gallery Walkthrough',
        subtitle: 'Our creative team will share tailored inspirations for your celebration vision.',
      },
    ],
  },

  menus: {
    route: '/our-menus',
    seo: {
      title: 'Our Menus | Veloura Estate',
      description: 'Discover signature wedding menus, tasting journeys, pairings, and culinary curation at Veloura Estate.',
    },
    hero: {
      label: 'Our Menus',
      title: 'Culinary Stories Crafted for the Occasion',
      subtitle: 'Seasonal, elegant, and personalized menus curated for every guest experience.',
      image: images.eventPrivate,
      overlayClass: 'bg-black/35',
      cta: { text: 'Reserve Tasting', href: '/contact-us' },
    },
    cta: { text: 'Reserve Tasting', href: '/contact-us' },
    sections: [
      {
        type: 'philosophy',
        title: 'Menu Philosophy',
        copy: 'Our kitchen blends seasonal ingredients with refined presentation to create an atmosphere of effortless luxury.',
      },
      {
        type: 'collections',
        title: 'Signature Menu Collections',
        items: [
          { title: 'Classic Elegance', subtitle: 'Timeless plated experiences with modern refinement.', image: images.eventCorporate },
          { title: 'Garden Romance', subtitle: 'Light seasonal courses inspired by outdoor celebrations.', image: images.eventPrivate },
          { title: 'Royal Banquet', subtitle: 'Grand tasting menus for extraordinary evening receptions.', image: images.eventUpcoming },
        ],
      },
      {
        type: 'timeline',
        title: 'Tasting Journey Timeline',
        items: [
          { title: 'Discovery Session', copy: 'Discuss flavor preferences, dietary needs, and celebration mood.' },
          { title: 'Chef Curation', copy: 'Receive a bespoke tasting plan with pairings and alternatives.' },
          { title: 'Private Tasting', copy: 'Experience your selected courses in an intimate session.' },
          { title: 'Final Refinement', copy: 'Lock menu sequencing and service choreography.' },
        ],
      },
      {
        type: 'pairings',
        title: 'Beverage & Dessert Pairings',
        items: ['Sparkling aperitif pairings', 'Signature tableside tea service', 'Artisanal dessert atelier', 'Night lounge petit-fours'],
      },
      {
        type: 'chef',
        title: 'Chef Curation Spotlight',
        copy: 'Executive culinary direction focused on heritage flavors, modern precision, and gracious hospitality.',
        image: images.gallery04,
      },
      {
        type: 'cta',
        title: 'Reserve a Private Tasting Experience',
        subtitle: 'Let us design a menu that reflects your story and celebration style.',
      },
    ],
  },

  blogs: {
    route: '/blogs',
    seo: {
      title: 'Blogs | Veloura Estate Journal',
      description: 'Read luxury wedding insights, styling guidance, and curated planning ideas from Veloura Estate.',
    },
    hero: {
      label: 'Blogs',
      title: 'The Veloura Wedding Journal',
      subtitle: 'Elegant planning intelligence, visual trends, and timeless hosting ideas.',
      image: images.gallery05,
      overlayClass: 'bg-black/34',
      cta: { text: 'Plan With Us', href: '/contact-us' },
    },
    cta: { text: 'Talk to Our Team', href: '/contact-us' },
    sections: [
      {
        type: 'featuredPost',
        title: 'Featured Insight',
        post: {
          title: 'How to Design an Airy, Royal Reception Flow',
          excerpt: 'A step-by-step framework for pacing ceremony, dinner, speeches, and dance without losing elegance.',
          tag: 'Planning',
          image: images.hero,
        },
      },
      {
        type: 'posts',
        title: 'Latest Articles',
        topics: ['All', 'Planning', 'Decor', 'Venue', 'Culinary', 'Guest Experience'],
        items: [
          { title: 'Choosing the Right Ceremony Layout', tag: 'Venue', image: images.spaceBoho },
          { title: 'Muted Bronze Styling for Modern Weddings', tag: 'Decor', image: images.gallery02 },
          { title: 'Building a Seasonal Reception Menu', tag: 'Culinary', image: images.eventPrivate },
          { title: 'Guest Comfort in Long Celebrations', tag: 'Guest Experience', image: images.eventCorporate },
          { title: 'Floral Architecture Trends in 2026', tag: 'Decor', image: images.gallery04 },
          { title: 'From Arrival to Farewell: Event Pacing', tag: 'Planning', image: images.eventUpcoming },
        ],
      },
      {
        type: 'trends',
        title: 'Trend Strip',
        items: ['Ceremony storytelling', 'Garden lounge corners', 'Live culinary experiences', 'Editorial portrait stations'],
      },
      {
        type: 'newsletter',
        title: 'Subscribe for Monthly Insights',
        subtitle: 'Receive luxury planning notes, fresh ideas, and event inspiration.',
      },
      {
        type: 'cta',
        title: 'Need Personal Guidance for Your Wedding Vision?',
        subtitle: 'Our planners can help you turn trends into a timeless celebration.',
      },
    ],
  },

  venue: {
    route: '/venue',
    seo: {
      title: 'Venue | Veloura Estate Spaces',
      description: 'Discover ceremony halls, garden settings, capacities, and amenities designed for luxury wedding hosting.',
    },
    hero: {
      label: 'Venue',
      title: 'Spaces Crafted for Grand and Intimate Moments',
      subtitle: 'A private estate with curated ceremony pathways, refined dining spaces, and timeless architecture.',
      image: images.spaceMaison,
      overlayClass: 'bg-black/30',
      cta: { text: 'Book A Tour', href: '/contact-us' },
    },
    cta: { text: 'Book A Tour', href: '/contact-us' },
    sections: [
      {
        type: 'masterGrid',
        title: 'Spaces Master Grid',
        items: [
          { title: 'Boho Garden', subtitle: 'Classic Weddings', image: images.spaceBoho },
          { title: 'Delicia Concept', subtitle: 'Summer Weddings', image: images.spaceDelicia },
          { title: 'Maison Loire', subtitle: 'Classic Weddings', image: images.spaceMaison },
        ],
      },
      {
        type: 'amenities',
        title: 'Amenities Matrix',
        items: [
          'Bridal and Groom private suites',
          'Indoor-outdoor climate flexibility',
          'Integrated AV and lighting controls',
          'Private valet and arrival lounge',
          'Dedicated culinary preparation zones',
          'Late-night guest comfort services',
        ],
      },
      {
        type: 'capacity',
        title: 'Capacity and Layout',
        copy: 'Host up to 400 guests with adaptable seating plans for ceremonies, dining, and dancing across connected spaces.',
      },
      {
        type: 'flow',
        title: 'Ceremony-to-Reception Flow',
        items: ['Welcome Courtyard', 'Garden Vows', 'Signature Cocktail Hour', 'Reception Hall', 'Afterparty Lounge'],
      },
      {
        type: 'miniGallery',
        title: 'Gallery Mini Slider',
        items: [images.indoor, images.garden, images.banquet, images.gallery03],
      },
      {
        type: 'cta',
        title: 'Schedule Your Personal Venue Walkthrough',
        subtitle: 'Experience space, light, and flow before you finalize your wedding date.',
      },
    ],
  },

  events: {
    route: '/events',
    seo: {
      title: 'Events | Veloura Estate',
      description: 'Host upcoming showcases, private milestones, and corporate celebrations in a refined event setting.',
    },
    hero: {
      label: 'Events',
      title: 'Curated Events in a Royal Setting',
      subtitle: 'From private milestones to corporate evenings, every gathering is tailored with quiet precision.',
      image: images.eventUpcoming,
      overlayClass: 'bg-black/35',
      cta: { text: 'Host An Event', href: '/contact-us' },
    },
    cta: { text: 'Host An Event', href: '/contact-us' },
    sections: [
      {
        type: 'eventCards',
        title: 'Upcoming, Private, and Corporate',
        items: [
          { title: 'Upcoming Events', subtitle: 'Seasonal showcases and curated open-house evenings.', image: images.eventUpcoming },
          { title: 'Private Celebrations', subtitle: 'Milestone moments hosted with tailored hospitality.', image: images.eventPrivate },
          { title: 'Corporate Events', subtitle: 'Executive gatherings in a polished destination venue.', image: images.eventCorporate },
        ],
      },
      {
        type: 'tiers',
        title: 'Package Tiers',
        items: [
          { title: 'Signature', copy: 'Essential luxury hosting with curated spatial flow.' },
          { title: 'Prestige', copy: 'Enhanced styling, culinary customization, and concierge.' },
          { title: 'Royal', copy: 'Full-scale production, bespoke experiences, and premium service team.' },
        ],
      },
      {
        type: 'timeline',
        title: 'Event Planning Process',
        items: [
          { title: 'Inquiry', copy: 'Share event goals, audience, and date priorities.' },
          { title: 'Concept', copy: 'Align theme, flow, and service scope with your team.' },
          { title: 'Production', copy: 'Finalize decor, hospitality, and operation logistics.' },
          { title: 'Execution', copy: 'Deliver a smooth, elegant guest experience.' },
        ],
      },
      {
        type: 'galleryRail',
        title: 'Event Gallery Rail',
        items: [images.eventPrivate, images.eventCorporate, images.eventUpcoming, images.gallery03, images.gallery04],
      },
      {
        type: 'quotes',
        title: 'Client Notes',
        items: [
          'Our corporate gala felt as polished as a five-star private event.',
          'The service choreography made hosting effortless from start to finish.',
        ],
      },
      {
        type: 'cta',
        title: 'Let Us Design Your Next Signature Event',
        subtitle: 'Connect with our planners to build a tailored event blueprint.',
      },
    ],
  },

  about: {
    route: '/about-us',
    seo: {
      title: 'About Us | Veloura Estate',
      description: 'Meet the vision, team, and craftsmanship behind Veloura Estate and its luxury event experiences.',
    },
    hero: {
      label: 'About Us',
      title: 'The Story Behind Veloura Estate',
      subtitle: 'A design-first hospitality team devoted to timeless celebrations and elevated guest experiences.',
      image: images.gallery01,
      overlayClass: 'bg-black/34',
      cta: { text: 'Work With Us', href: '/contact-us' },
    },
    cta: { text: 'Work With Us', href: '/contact-us' },
    sections: [
      {
        type: 'manifesto',
        title: 'Philosophy Manifesto',
        copy: 'We believe luxury is measured by atmosphere, pacing, and thoughtful detail rather than excess.',
      },
      {
        type: 'team',
        title: 'Team & Curators',
        items: [
          { title: 'Elena Maris', subtitle: 'Creative Director', image: images.gallery02 },
          { title: 'Noah Sinclair', subtitle: 'Event Operations Lead', image: images.gallery03 },
          { title: 'Livia Hart', subtitle: 'Hospitality Curator', image: images.gallery04 },
        ],
      },
      {
        type: 'partners',
        title: 'Partner Network',
        items: ['Julia Bridal', 'Wedding Planner', 'Vogue Weddings', 'Love Story Atelier', 'Honey Moon Co.'],
      },
      {
        type: 'pillars',
        title: 'Craft Pillars',
        items: [
          { title: 'Atmosphere', copy: 'Spatial styling that feels airy and intentional.' },
          { title: 'Precision', copy: 'Operational excellence for seamless event flow.' },
          { title: 'Hospitality', copy: 'Warm, discreet, and polished guest care.' },
          { title: 'Storytelling', copy: 'Every celebration reflects the couple or host.' },
        ],
      },
      {
        type: 'milestones',
        title: 'Milestones',
        items: [
          { value: '350+', label: 'Celebrations Hosted' },
          { value: '98%', label: 'Guest Satisfaction' },
          { value: '40+', label: 'Trusted Partners' },
          { value: '12', label: 'Years of Craft' },
        ],
      },
      {
        type: 'cta',
        title: 'Create Something Timeless With Our Team',
        subtitle: 'Let us shape your wedding or private event experience from concept to farewell.',
      },
    ],
  },

  contact: {
    route: '/contact-us',
    seo: {
      title: 'Contact Us | Veloura Estate',
      description: 'Get in touch with Veloura Estate to book a tour, plan your wedding, or host a private event.',
    },
    hero: {
      label: 'Contact Us',
      title: 'Send Us a Request',
      subtitle: 'Share your vision and preferred date. We will respond with tailored next steps.',
      image: images.gallery05,
      overlayClass: 'bg-black/33',
      cta: { text: 'Call Concierge', href: '/contact-us#direct-contact' },
    },
    cta: { text: 'Send Inquiry', href: '/contact-us#inquiry-form' },
    sections: [
      {
        type: 'contactCards',
        title: 'Direct Contact',
        items: [
          { title: 'Phone', value: '+1 234-567-8910' },
          { title: 'Email', value: 'concierge@velouraestate.com' },
          { title: 'Address', value: '198 West 21st Street, New York, NY' },
        ],
      },
      {
        type: 'map',
        title: 'Venue Map Placeholder',
        copy: 'Interactive venue map integration can be connected in the next backend phase.',
      },
      {
        type: 'faq',
        title: 'Quick Answers',
        items: [
          { q: 'How far in advance should we book?', a: 'For peak seasons, we recommend 8-12 months in advance.' },
          { q: 'Can you support custom menus?', a: 'Yes. We provide custom tasting and menu refinement sessions.' },
          { q: 'Do you host non-wedding events?', a: 'Yes, private and corporate events are available year-round.' },
          { q: 'Is decor included?', a: 'Core styling support is included with optional premium decor packages.' },
        ],
      },
      {
        type: 'socials',
        title: 'Social Links',
        items: ['Instagram', 'Facebook', 'YouTube', 'Pinterest'],
      },
      {
        type: 'cta',
        title: 'Ready to Begin Your Celebration Journey?',
        subtitle: 'Submit your inquiry and our team will coordinate your personalized plan.',
      },
    ],
  },
};

export const routeMeta = {
  '/': pageConfigs.home,
  '/gallery': pageConfigs.gallery,
  '/our-menus': pageConfigs.menus,
  '/blogs': pageConfigs.blogs,
  '/venue': pageConfigs.venue,
  '/events': pageConfigs.events,
  '/about-us': pageConfigs.about,
  '/contact-us': pageConfigs.contact,
};
