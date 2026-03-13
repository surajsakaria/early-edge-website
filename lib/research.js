// ─────────────────────────────────────────────────────────────
// lib/research.js
// All data and categorisation logic for the Research page.
// ─────────────────────────────────────────────────────────────

// ── YouTube videos ────────────────────────────────────────────

export const YOUTUBE_VIDEOS = [
  { id: '5ce1zDbkB8g', url: 'https://www.youtube.com/watch?v=5ce1zDbkB8g&t=2s' },
  { id: 'gKjDydJv-Zs', url: 'https://www.youtube.com/watch?v=gKjDydJv-Zs&t=307s' },
  { id: 'guNb8iqxO-A', url: 'https://www.youtube.com/watch?v=guNb8iqxO-A&t=2276s' },
  { id: 'h4rYw9VXS1M', url: 'https://www.youtube.com/watch?v=h4rYw9VXS1M&t=1s' },
  { id: 'Z6VGK076mm0', url: 'https://www.youtube.com/watch?v=Z6VGK076mm0&t=1s' },
]

export const YOUTUBE_CHANNEL_URL = 'https://www.youtube.com/@EarlyEdgeClub'

// ── Posts to never display ────────────────────────────────────

export const EXCLUDED_SLUGS = [
  'thanks-for-subscribing-want-to-join-7cb',
  'thanks-for-subscribing-want-to-join',
  'help-us-shape-early-edge-club-into',
  'my-final-note-on-the-early-edge-launch',
  'what-happens-inside-the-early-edge',
  'is-your-portfolio-ready-for-the-next',
  'buying-is-easy-selling-takes-discipline',
  'coming-soon',
  'a-small-step-toward-better-investing',
  'monthly-meet-replay-3-stocks-to-watch',
  '185523120',
]

// ── Category map ──────────────────────────────────────────────
// To categorize a new post: add its Substack slug and category here.
// Slug = the part of the URL after /p/ on Substack.
// This takes priority over any keyword matching — slug map only.

const POST_CATEGORIES = {
  // Weekly Market Notes
  'leaders-laggards-and-whats-next-4': 'Market Conditions',
  'leaders-laggards-and-whats-next-week-7a7': 'Market Conditions',
  'leaders-laggards-and-whats-next-week-17f': 'Market Conditions',
  'leaders-laggards-and-whats-next-week': 'Market Conditions',
  'a-simple-weekly-framework-to-track': 'Market Conditions',
  'two-updates-market-catch-up-and-2026': 'Market Conditions',
  'a-mental-model-for-the-bear-market': 'Market Conditions',
  'why-yesterdays-market-leaders-wont': 'Market Conditions',
  'why-unfavoured-stocks-re-rate-favourites': 'Market Conditions',

  // Red Flag Series
  'episode-1-veefin-solutions-strong': 'Red Flag Series',
  'follow-up-veefin-solutions-when-research': 'Red Flag Series',
  'episode-2-trident-lifeline-a-healthy': 'Red Flag Series',
  'episode-3-cellecor-gadgets-capital': 'Red Flag Series',
  'episode-5-international-conveyors': 'Red Flag Series',
  'the-shocking-truth-behind-varyaas': 'Red Flag Series',
  'episode-4-advani-hotels-great-numbers': 'Red Flag Series',

  // Stock Deep Dives
  'mold-tek-packaging-paint-buckets': 'Stock Deep Dives',
  'vision-infra-equipment-a-pick-and': 'Stock Deep Dives',
  'jasch-industries-a-quick-take-on': 'Stock Deep Dives',
  'can-arrow-greentech-ride-the-green': 'Stock Deep Dives',
  'two-forgotten-real-estate-stocks': 'Stock Deep Dives',
  'is-ai-about-to-break-the-travel-industrys': 'Stock Deep Dives',
  'stallion-india-the-investing-lesson': 'Stock Deep Dives',
  'the-psychology-of-valuation-pg-electroplast': 'Stock Deep Dives',
  'microcap-101-part-1-how-a-tribal': 'Stock Deep Dives',
  'a-simple-poll-about-medicines-with': 'Stock Deep Dives',

  // Investing Framework
  'why-the-same-stock-can-make-or-break': 'Investing Framework',
  'why-most-microcap-investors-lose': 'Investing Framework',
  'the-3-traps-killing-your-microcap': 'Investing Framework',
  'will-this-stock-really-double-in': 'Investing Framework',
  'the-traits-of-a-successful-investor': 'Investing Framework',
  'not-every-customer-is-king-a-microcap': 'Investing Framework',
  'is-investing-just-like-schrodingers': 'Investing Framework',
  'how-to-invest-when-you-dont-know': 'Investing Framework',
  'your-multibagger-doesnt-matter-if': 'Investing Framework',
  'the-3-quarter-rule-a-simple-framework': 'Investing Framework',
  'how-to-instantly-know-if-a-stock': 'Investing Framework',
  'how-to-use-screenerin-like-a-microcap': 'Investing Framework',
  'how-to-spot-a-microcap-turnaround': 'Investing Framework',
  'do-great-indian-stock-pitches-really': 'Investing Framework',
  'the-one-thinking-habit-that-changed': 'Investing Framework',
  'december-monthly-meet-learning-to': 'Investing Framework',
}

/**
 * Returns the category for a given Substack post slug.
 * Checks POST_CATEGORIES first. Falls back to "Investing Framework".
 */
export function getPostCategory(slug) {
  return POST_CATEGORIES[slug] ?? 'Investing Framework'
}

export const ALL_CATEGORIES = [
  'All',
  'Stock Deep Dives',
  'Red Flag Series',
  'Market Conditions',
  'Investing Framework',
]
