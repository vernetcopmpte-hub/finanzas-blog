import Link from 'next/link'
import Image from 'next/image'
import type { Post } from '@/lib/posts'
import { formatDate } from '@/lib/posts'

interface PostCardProps {
  post: Post
  featured?: boolean
}

export default function PostCard({ post, featured = false }: PostCardProps) {
  if (featured) {
    return (
      <Link href={`/blog/${post.slug}`} className="group block">
        <article className="grid md:grid-cols-2 gap-0 rounded-lg overflow-hidden border border-stone-200 hover:border-brand-300 transition-all hover:shadow-md">
          <div className="relative h-56 md:h-full min-h-[220px] overflow-hidden bg-stone-100">
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              className="object-cover group-hover:scale-102 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
          <div className="p-6 md:p-8 flex flex-col justify-center bg-white">
            <div className="flex items-center gap-3 mb-3">
              <span className="category-badge">{post.category}</span>
              <span className="text-xs text-ink-light">{post.readingTime} min</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-semibold text-ink leading-snug mb-3 group-hover:text-brand-700 transition-colors" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
              {post.title}
            </h2>
            <p className="text-ink-muted text-sm leading-relaxed mb-5 line-clamp-3">{post.excerpt}</p>
            <div className="flex items-center justify-between mt-auto pt-4 border-t border-stone-100">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-full bg-brand-100 flex items-center justify-center text-xs font-semibold text-brand-700">
                  {post.author.charAt(0)}
                </div>
                <div>
                  <p className="text-xs font-medium text-ink">{post.author}</p>
                  <p className="text-xs text-ink-light">{formatDate(post.date)}</p>
                </div>
              </div>
              <span className="text-xs font-medium text-brand-700 group-hover:underline">Leer →</span>
            </div>
          </div>
        </article>
      </Link>
    )
  }

  return (
    <Link href={`/blog/${post.slug}`} className="group block h-full">
      <article className="h-full flex flex-col rounded-lg overflow-hidden border border-stone-200 hover:border-brand-300 transition-all hover:shadow-md bg-white">
        <div className="relative h-44 overflow-hidden bg-stone-100">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            className="object-cover group-hover:scale-102 transition-transform duration-500"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>
        <div className="p-5 flex flex-col flex-grow">
          <div className="flex items-center gap-2 mb-2">
            <span className="category-badge">{post.category}</span>
            <span className="text-xs text-ink-light">{post.readingTime} min</span>
          </div>
          <h3 className="text-lg font-semibold text-ink leading-snug mb-2 group-hover:text-brand-700 transition-colors line-clamp-2" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
            {post.title}
          </h3>
          <p className="text-sm text-ink-muted leading-relaxed line-clamp-2 mb-4 flex-grow">{post.excerpt}</p>
          <div className="flex items-center justify-between pt-3 border-t border-stone-100 mt-auto">
            <span className="text-xs text-ink-light">{formatDate(post.date)}</span>
            <span className="text-xs font-medium text-brand-700 group-hover:underline">Leer →</span>
          </div>
        </div>
      </article>
    </Link>
  )
}
