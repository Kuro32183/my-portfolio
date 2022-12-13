/* eslint-disable react/no-unknown-property */
/* eslint-disable no-undef */

import type { NextPage } from 'next'
import Head from 'next/head'

interface MyHeadProps {
  title?: string
  thumbnailUrl?: string
  description?: string
}

interface JsonLdProps {
  title?: string
  updated?: string
  url?: string
  imageUrl: string
  description: string
}

function jsonLd(props: JsonLdProps) {
  const { title, updated, url, imageUrl, description } = props
  const jsonLd = {
    '@context': 'http://schema.org',
    '@type': 'Article',
    name: title,
    headline: title,
    datePublished: '2020-04-27T00:00:00.000Z',
    dateModified: updated,
    url: url,
    mainEntityOfPage: url,
    image: [imageUrl],
    description: description,
  }
  return JSON.stringify(jsonLd)
}

const MyHead: NextPage<MyHeadProps> = ({
  title,
  thumbnailUrl,
  description,
}) => {
  const siteName = 'My Portfolio!'
  if (title === undefined) {
    title = siteName
  } else {
    title = `${title} - ${siteName}`
  }

  if (thumbnailUrl === undefined) {
    thumbnailUrl = '/profile.png'
  }

  if (description === undefined) {
    description =
      'ポートフォリオサイトとして制作されたウェブサイトです。サイト制作者の紹介だけではなく、自身の制作品や技術ブログを兼ねて設計しています。'
  }

  return (
    <Head>
      <meta charSet="utf-8" />
      <title>{title}</title>
      <meta property="og:title" content={title} />
      <meta property="og:image" content={thumbnailUrl} />
      <meta property="og:description" content={description} />
      <meta
        name="description"
        content="ポートフォリオサイトとして制作されたウェブサイトです。サイト制作者の紹介だけではなく、自身の制作品や技術ブログを兼ねて設計しています。"
      />
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <meta name="format-detection" content="telephone=no" />
      <link rel="icon" href="/profile.png" type="image/jpg" />
      <link rel="icon" href="/profile.webp" type="image/webp" />
      <link rel="apple-touch-icon" href="/profile.png" />
      <meta property="og:site_name" content="My Portofolio!" />
      <meta
        property="og:url"
        content="https://my-portfolio-kuro32183.vercel.app/"
      />
      <meta property="og:type" content="portfolio website and article" />
      <meta property="og:image" content="/profile.jpg" />
      <meta property="og:locale" content="ja_JP" />
      <meta property="fb:app_id" content="AppID"></meta>
      <meta name="twitter:card" content="summary_large_image or summary" />
      <meta
        name="google-site-verification"
        content="4nGKWtm-cpsYqTr6My2vV09BzoR-hcKj1t92_AW-5bM"
      />
      {/* <meta name="robots" content="noindex"></meta> */}
      <link
        rel="canonical"
        href="https://my-portfolio-kuro32183.vercel.app/"
      ></link>

      {/* <link rel="prefetch" />
      <link rel="prerender" />
      <link rel="subresource" />
      <link rel="preload" />
      <link rel="dns-prefetch" /> */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd({
            title: 'title',
            description: 'description',
            imageUrl: 'image url',
            url: 'url',
            updated: new Date().toISOString(),
          }),
        }}
      />
    </Head>
  )
}

export default MyHead
