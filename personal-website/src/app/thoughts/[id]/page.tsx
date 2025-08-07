import Link from 'next/link'
import { notFound } from 'next/navigation'
import { articles } from '../../../data/thoughts'

const articleContent: Record<string, string> = {
  web3: `
    <div class="space-y-6">
      <p class="text-lg text-gray-700 leading-relaxed">
        Web3 is digital ownership, and with our world becoming increasingly digital it is simply ownership.
      </p>
      
      <p class="text-lg text-gray-700 leading-relaxed">
        I build towards a future where DeFi becomes Fi.
      </p>
      
      <div class="flex flex-col items-center px-4 mt-6">
        <div class="text-teal-600 font-normal text-center">
          DeFi (Decentralized Finance): Instant Settlement, Global Liquidity, 24/7 access
        </div>
        <div class="text-teal-600 font-normal mt-4 text-center">
          TradFi (Traditional Finance): pain, banks own your money
        </div>
      </div>
    </div>
  `
}

interface PageProps {
  params: {
    id: string
  }
}

export default function ArticlePage({ params }: PageProps) {
  const article = articles.find(a => a.id === params.id)

  if (!article) {
    notFound()
  }

  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-4xl py-12">
      {/* Back to thoughts */}
      <Link 
        href="/thoughts" 
        className="inline-flex items-center text-teal-700 hover:text-teal-800 mb-8 transition-colors"
      >
        <svg
          className="mr-2 w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
        Back to thoughts
      </Link>

      {/* Article header */}
      <header className="mb-12">
        <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
          <time dateTime={article.date}>
            {Math.floor(new Date(article.date + 'T00:00:00Z').getTime() / 1000)}
          </time>
        </div>
        
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          {article.title}
        </h1>
      </header>

      {/* Article content */}
      <article 
        className="prose prose-lg max-w-none"
        dangerouslySetInnerHTML={{ __html: articleContent[article.id] || '' }}
      />
    </div>
  )
} 