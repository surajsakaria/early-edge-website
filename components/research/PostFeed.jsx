'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import { ALL_CATEGORIES } from '@/lib/research'
import { cn } from '@/lib/utils'

const SUBSTACK_ALL_URL = 'https://substack.com/@earlyedgeclub'
const MAX_POSTS = 9

// ── Thumbnail placeholder for posts with no image ─────────────

function PlaceholderThumb({ category }) {
  return (
    <div className="w-full aspect-video bg-navy flex items-center justify-center">
      <span className="text-orange text-xs font-semibold uppercase tracking-widest text-center px-4">
        {category}
      </span>
    </div>
  )
}

// ── Single post card ──────────────────────────────────────────

function PostCard({ post }) {
  return (
    <a
      href={post.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow overflow-hidden"
    >
      {/* Thumbnail */}
      <div className="relative w-full aspect-video overflow-hidden">
        {post.thumbnail ? (
          <Image
            src={post.thumbnail}
            alt={post.title}
            fill
            className="object-cover group-hover:scale-[1.02] transition-transform duration-300"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        ) : (
          <PlaceholderThumb category={post.category} />
        )}
        {/* Category pill */}
        <span className="absolute bottom-3 left-3 bg-orange text-white text-xs font-semibold uppercase tracking-wide px-2.5 py-1 rounded-md">
          {post.category}
        </span>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col gap-2 flex-1">
        <p className="text-xs text-slate-400">{post.pubDate}</p>
        <h3 className="font-semibold text-navy text-sm leading-snug line-clamp-2 group-hover:text-orange transition-colors">
          {post.title}
        </h3>
        {post.excerpt && (
          <p className="text-slate-500 text-xs leading-relaxed line-clamp-3 flex-1">
            {post.excerpt}
          </p>
        )}
        <span className="mt-2 inline-flex items-center gap-1 text-orange text-xs font-semibold">
          Read on Substack <ArrowUpRight size={12} aria-hidden="true" />
        </span>
      </div>
    </a>
  )
}

// ── Fallback when RSS fails ───────────────────────────────────

function FallbackState() {
  return (
    <div className="col-span-full bg-white rounded-2xl border border-slate-100 p-12 text-center flex flex-col items-center gap-6 shadow-sm">
      <p className="text-slate-500 text-base max-w-md leading-relaxed">
        Research posts are published on Substack.
      </p>
      <a
        href={SUBSTACK_ALL_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 bg-orange hover:bg-orange/90 text-white font-semibold text-sm px-6 py-3 rounded-lg transition-colors"
      >
        View all on Substack <ArrowUpRight size={15} aria-hidden="true" />
      </a>
    </div>
  )
}

// ── Main export ───────────────────────────────────────────────

export default function PostFeed({ posts }) {
  const [activeTab, setActiveTab] = useState('All')

  const filtered =
    activeTab === 'All'
      ? posts.slice(0, MAX_POSTS)
      : posts.filter((p) => p.category === activeTab).slice(0, MAX_POSTS)

  return (
    <div className="flex flex-col gap-8">
      {/* Filter tabs */}
      <div className="flex gap-2 overflow-x-auto pb-1 -mx-1 px-1 scrollbar-none">
        {ALL_CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveTab(cat)}
            className={cn(
              'shrink-0 rounded-lg border px-4 py-2 text-sm font-medium transition-colors',
              activeTab === cat
                ? 'bg-orange border-orange text-white'
                : 'bg-white border-slate-200 text-navy hover:border-orange/50 hover:text-orange'
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Post grid */}
      {posts.length === 0 ? (
        <div className="grid grid-cols-1">
          <FallbackState />
        </div>
      ) : filtered.length === 0 ? (
        <p className="text-slate-400 text-sm py-8 text-center">
          No posts in this category yet.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((post, i) => (
            <PostCard key={i} post={post} />
          ))}
        </div>
      )}

      {/* View all */}
      <div className="text-center pt-2">
        <a
          href={SUBSTACK_ALL_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-orange hover:bg-orange/90 text-white font-semibold text-sm px-6 py-3 rounded-lg transition-colors"
        >
          View all on Substack <ArrowUpRight size={15} aria-hidden="true" />
        </a>
      </div>
    </div>
  )
}
