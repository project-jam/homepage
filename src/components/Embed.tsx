// components/Embed.tsx
import Head from 'next/head'

interface EmbedProps {
  title?: string
  url?: string
  image?: string
  siteName?: string
  twitterCard?: string
  themeColor?: string
}

const Embed = ({
  title = 'Project Jam',
  url = 'https://project-jam.js.cool/',
  image = 'https://project-jam.js.cool/logo.png',
  siteName = 'Project Jam',
  twitterCard = 'summary_large_image',
  themeColor = '#e9a75b',
}: EmbedProps) => {
  return (
    <Head>
      <meta property="og:title" content={title} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta name="twitter:card" content={twitterCard} />
      <meta property="og:color" content={themeColor} />
      <meta property="og:site_name" content={siteName} />
      <meta name="theme-color" content={themeColor} />
    </Head>
  )
}

export default Embed

