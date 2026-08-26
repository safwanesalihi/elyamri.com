/** One entry per project type — drives the /work/:slug pages and the Work section links. */
export const CATEGORIES = [
  {
    slug: 'design',
    category: 'design',
    label: 'Design',
    title: 'Design',
    blurb: 'Logofolio, brand identity systems, social media design, infographics and art direction.',
  },
  {
    slug: 'photography',
    category: 'photography',
    label: 'Photography',
    title: 'Photography',
    blurb: 'Street and documentary work, studio and on-location shooting, advanced retouching.',
  },
  {
    slug: 'voice-over',
    category: 'voiceover',
    label: 'Voice-Over',
    title: 'Voice-Over',
    blurb: 'Documentaries, ad spots, brand sound identity and official corporate voice.',
  },
  {
    slug: 'audiovisual',
    category: 'audiovisual',
    label: 'Audiovisual',
    title: 'Audiovisual',
    blurb: 'Direction, cinematography, location sound recording, mixing and production management.',
  },
] as const

export type Category = (typeof CATEGORIES)[number]

export const categoryBySlug = (slug: string | undefined) =>
  CATEGORIES.find((c) => c.slug === slug)
