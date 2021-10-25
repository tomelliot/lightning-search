import Head from 'next/head'
import Image from 'next/image'
import Script from 'next/script'

import SearchResults, { podcast_search, clear_search_results } from "/src/SearchResults";


export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Lightning Podcast Search</title>
        <link rel="icon" href="/images/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1>
          Lightning Podcast Search
        </h1>

        <h2>
          Find the right podcasts for your brand's story
        </h2>

        <div className="search-container">
          <input type="text" placeholder="Search..."></input>
          <button className="btn btn-blue" onClick={() => podcast_search()}>clickme</button>
          <button className="btn btn-blue" onClick={() => clear_search_results()}>clear</button>
          <div id="list_of_search_results"  className="search-results-container">
            <div id="search-result-template" className="search-result-card" hidden>
            Search above
            </div>
          </div>
          <SearchResults
            url="https://api.github.com/repos/vercel/swr"
            />

            <a
              href="https://nextjs.org/docs"
              className="search-result-card"
            >
              <h3 className="text-2xl font-bold">Documentation &rarr;</h3>
              <p className="mt-4 text-xl">
                Find in-depth information about Next.js features and API.
              </p>
            </a>

            <a
              href="https://nextjs.org/learn"
              className="search-result-card"
            >
              <h3 className="text-2xl font-bold">Learn &rarr;</h3>
              <p className="mt-4 text-xl">
                Learn about Next.js in an interactive course with quizzes!
              </p>
            </a>

            <a
              href="https://github.com/vercel/next.js/tree/master/examples"
              className="search-result-card"
            >
              <h3 className="text-2xl font-bold">Examples &rarr;</h3>
              <p className="mt-4 text-xl">
                Discover and deploy boilerplate example Next.js projects.
              </p>
            </a>

            <a
              href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              className="search-result-card"
            >
              <h3 className="text-2xl font-bold">Deploy &rarr;</h3>
              <p className="mt-4 text-xl">
                Instantly deploy your Next.js site to a public URL with Vercel.
              </p>
            </a>
        </div>
      </main>

    </div>
  )
}
