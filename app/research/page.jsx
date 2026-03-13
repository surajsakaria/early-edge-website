import Image from 'next/image'
import { ArrowUpRight, Check, Play } from 'lucide-react'
import SubscribeForm from '@/components/research/SubscribeForm'
import PostFeed from '@/components/research/PostFeed'
import {
  YOUTUBE_VIDEOS,
  YOUTUBE_CHANNEL_URL,
  EXCLUDED_SLUGS,
  getPostCategory,
} from '@/lib/research'

export const metadata = {
  title: 'Research & Insights | Early Edge Club',
  description:
    'Stock deep dives, sector analysis, and weekly market notes — published free on Substack by Early Edge Club.',
}

const SUBSTACK_URL = 'https://surajsakaria.substack.com'
const SUBSTACK_ALL_URL = 'https://substack.com/@earlyedgeclub'
const RSS_URL = 'https://surajsakaria.substack.com/feed'

// ── RSS helpers ───────────────────────────────────────────────

function extractTag(xml, tag) {
  const cdata = new RegExp(
    `<${tag}[^>]*><!\\[CDATA\\[([\\s\\S]*?)\\]\\]><\\/${tag}>`,
    'i'
  ).exec(xml)
  if (cdata) return cdata[1].trim()
  const plain = new RegExp(`<${tag}[^>]*>([\\s\\S]*?)<\\/${tag}>`, 'i').exec(xml)
  return plain ? plain[1].trim() : ''
}

function extractSlug(link) {
  const m = /\/p\/([^/?#\s]+)/.exec(link)
  return m ? m[1] : ''
}

function extractThumbnail(itemXml) {
  // media:content
  const mc = /media:content[^>]+url="([^"]+)"/.exec(itemXml)
  if (mc) return mc[1]
  // enclosure
  const enc = /<enclosure[^>]+url="([^"]+)"/.exec(itemXml)
  if (enc) return enc[1]
  // og:image style inside content
  const img = /<img[^>]+src="([^"]+)"/.exec(itemXml)
  if (img) return img[1]
  return null
}

function stripHtml(html) {
  return html
    .replace(/<[^>]*>/g, '')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/\s+/g, ' ')
    .trim()
}

function formatDate(dateStr) {
  if (!dateStr) return ''
  try {
    return new Date(dateStr).toLocaleDateString('en-GB', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    })
  } catch {
    return dateStr
  }
}

function parseRss(xml) {
  const itemRegex = /<item>([\s\S]*?)<\/item>/gi
  const posts = []
  let match

  while ((match = itemRegex.exec(xml)) !== null) {
    const raw = match[1]
    const link = extractTag(raw, 'link').trim().replace(/\s/g, '')
    const slug = extractSlug(link)

    // Skip excluded slugs
    if (!slug || EXCLUDED_SLUGS.includes(slug)) continue

    const title = stripHtml(extractTag(raw, 'title'))
    const pubDate = formatDate(extractTag(raw, 'pubDate'))
    const rawDesc =
      extractTag(raw, 'description') || extractTag(raw, 'content:encoded') || ''
    const excerpt = stripHtml(rawDesc).slice(0, 150).trimEnd()
    const excerptText = excerpt.length === 150 ? excerpt + '…' : excerpt
    const thumbnail = extractThumbnail(raw)
    const category = getPostCategory(slug)

    posts.push({ title, link, slug, pubDate, excerpt: excerptText, thumbnail, category })
  }

  return posts
}

async function getPosts() {
  try {
    const res = await fetch(RSS_URL, { next: { revalidate: 3600 } })
    if (!res.ok) return []
    const xml = await res.text()
    return parseRss(xml)
  } catch {
    return []
  }
}

// ── YouTube grid ──────────────────────────────────────────────

function VideoCard({ video }) {
  return (
    <a
      href={video.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block w-full aspect-video rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
      aria-label="Watch video on YouTube"
    >
      <Image
        src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
        alt="Early Edge Club YouTube video"
        fill
        className="object-cover group-hover:scale-[1.03] transition-transform duration-300"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-navy/30 group-hover:bg-navy/20 transition-colors" />
      {/* Play button */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-14 h-14 rounded-full bg-white/90 group-hover:bg-white flex items-center justify-center shadow-lg transition-colors">
          <Play
            size={22}
            className="text-orange ml-1"
            fill="currentColor"
            aria-hidden="true"
          />
        </div>
      </div>
    </a>
  )
}

// ── Page ──────────────────────────────────────────────────────

export default async function ResearchPage() {
  const posts = await getPosts()

  return (
    <main>
      {/* ── 1. HERO ── */}
      <section className="bg-navy text-white py-20 md:py-28" aria-labelledby="research-heading">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-orange text-xs font-semibold uppercase tracking-widest mb-5">
            Research &amp; Insights
          </p>
          <h1
            id="research-heading"
            className="font-display text-4xl md:text-5xl font-bold leading-tight mb-6"
          >
            Research &amp; Insights
          </h1>
          <p className="text-white/65 text-lg max-w-2xl mx-auto leading-relaxed">
            Stock deep dives, sector analysis, and weekly market notes &mdash; published free on
            Substack.
          </p>
        </div>
      </section>

      {/* ── 2. WEEKLY MARKET NOTE CALLOUT ── */}
      <section className="bg-slate-50 py-14 md:py-20 border-b border-slate-100">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-center gap-10 md:gap-16">
            {/* Left */}
            <div className="flex-1 flex flex-col gap-5">
              <p className="text-orange text-xs font-semibold uppercase tracking-widest">
                Weekly Note
              </p>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-navy leading-snug">
                Leaders, Laggards &amp; What&rsquo;s Next
              </h2>
              <p className="text-slate-500 text-sm leading-relaxed max-w-lg">
                A weekly market note tracking where strength is forming, where damage is healing,
                and where the next wave of leaders may emerge. Free every week.
              </p>
              <ul className="flex flex-col gap-2.5">
                {[
                  'Market breadth and sector rotation',
                  'Leaders, Laggards & Emerging Leaders buckets',
                  '2–3 stocks worth watching from the framework',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check size={15} className="text-orange shrink-0 mt-0.5" aria-hidden="true" />
                    <span className="text-slate-600 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right */}
            <div className="flex flex-col items-start md:items-center gap-3 shrink-0">
              <a
                href={SUBSTACK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-orange hover:bg-orange/90 text-white font-semibold text-sm px-6 py-3 rounded-lg transition-colors whitespace-nowrap"
              >
                Read the Latest Edition
                <ArrowUpRight size={15} aria-hidden="true" />
              </a>
              <p className="text-slate-400 text-xs">Free. No subscription required to read.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. YOUTUBE VIDEOS ── */}
      <section className="bg-white py-16 md:py-24" aria-labelledby="youtube-heading">
        <div className="max-w-5xl mx-auto px-6">
          <div className="mb-12 text-center">
            <p className="text-orange text-xs font-semibold uppercase tracking-widest mb-3">
              YouTube
            </p>
            <h2
              id="youtube-heading"
              className="font-display text-3xl md:text-4xl font-bold text-navy leading-tight"
            >
              Watch on YouTube
            </h2>
            <p className="text-slate-500 text-base mt-4 max-w-xl mx-auto">
              Deep dives, framework walkthroughs, and market analysis &mdash; on the Early Edge
              YouTube channel.
            </p>
          </div>

          {/* Row 1: 3 videos */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {YOUTUBE_VIDEOS.slice(0, 3).map((v) => (
              <VideoCard key={v.id} video={v} />
            ))}
          </div>

          {/* Row 2: 2 videos centered */}
          <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-5 lg:max-w-[66%] lg:mx-auto">
            {YOUTUBE_VIDEOS.slice(3).map((v) => (
              <VideoCard key={v.id} video={v} />
            ))}
          </div>

          <p className="text-center mt-10">
            <a
              href={YOUTUBE_CHANNEL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-orange font-semibold text-sm underline underline-offset-4 hover:opacity-80 transition-opacity"
            >
              View all videos <ArrowUpRight size={14} aria-hidden="true" />
            </a>
          </p>
        </div>
      </section>

      {/* ── 4. THEMED POST FEED ── */}
      <section className="bg-slate-50 py-16 md:py-24" aria-labelledby="archive-heading">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <p className="text-orange text-xs font-semibold uppercase tracking-widest mb-3">
              Archive
            </p>
            <h2
              id="archive-heading"
              className="font-display text-3xl md:text-4xl font-bold text-navy leading-tight"
            >
              From the Research Archive
            </h2>
          </div>
          <PostFeed posts={posts} />
        </div>
      </section>

      {/* ── 5. SUBSCRIBE ── */}
      <section className="bg-navy py-20 md:py-28" aria-labelledby="subscribe-heading">
        <div className="max-w-2xl mx-auto px-6 text-center flex flex-col items-center gap-6">
          <p className="text-orange text-xs font-semibold uppercase tracking-widest">
            Stay Updated
          </p>
          <h2
            id="subscribe-heading"
            className="font-display text-3xl md:text-4xl font-bold text-white leading-tight"
          >
            Get Research in Your Inbox
          </h2>
          <p className="text-white/60 text-base leading-relaxed max-w-lg">
            Stock deep dives, sector analysis, and weekly market notes &mdash; free to read, free
            to subscribe.
          </p>
          <SubscribeForm />
        </div>
      </section>
    </main>
  )
}
