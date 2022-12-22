import React from 'react'
import { categories } from '../constants'
import fetchNews from '../lib/fetchNews'

async function Homepage() {

  // fetch the news data 
  const news: NewsResponse = await fetchNews(categories.join(","))

  console.log('aq',news)

  return (
    <div>
      {/* NewsList news */}
      dd
    </div>
  )
}

export default Homepage
