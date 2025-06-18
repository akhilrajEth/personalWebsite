import Link from 'next/link'
import { articles, Article } from '../../data/thoughts'

export default function Thoughts() {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-4xl py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Thoughts</h1>
      <div className="divide-y divide-gray-200">
        {articles.map((article) => (
          <article
            key={article.id}
            className="py-6 first:pt-0 last:pb-0"
          >
            <Link href={`/thoughts/${article.id}`} className="inline-block">
              <h2 className="text-xl font-semibold text-teal-700 underline decoration-teal-700 hover:text-teal-800 hover:decoration-teal-800 transition-colors">
                {article.title}
              </h2>
            </Link>
          </article>
        ))}
      </div>
    </div>
  )
}