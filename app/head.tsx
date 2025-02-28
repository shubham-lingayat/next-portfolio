import Head from 'next/head';

export default function MetaHead() {
  return (
    <Head>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta
        name="description"
        content="I'm Shubham Lingayat, full-stack developer based in Pune, India. My journey in web development began during my first year of college."
      />
      <meta
        name="keywords"
        content="Shubham Lingayat, portfolio, shubham, full stack dev, nextjs portfolio, portfolio design, portfolio website, personal portfolio"
      />
      <meta property="og:site_name" content="Shubham Lingayat's Portfolio" />
      <meta
        property="og:title"
        content="Portfolio | Shubham Lingayat - Full Stack Developer"
      />
      <meta
        property="og:description"
        content="I'm Shubham Lingayat, full-stack developer based in Pune, India. My journey in web development began during my first year of college."
      />
      <meta property="og:url" content="https://shubhamlingayat.vercel.app" />
      <meta
        property="og:image"
        content="https://next-portfolio-shubham-lingayat.s3.us-east-1.amazonaws.com/website-screenshots/next-portfolio.png"
      />
      <link rel="canonical" href="https://shubhamlingayat.vercel.app" />
      <meta name="author" content="Shubham Lingayat" />
      <meta name="language" content="English" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="https://shubhamlingayat.vercel.app" />
      <meta
        name="application-name"
        content="Portfolio | Shubham Lingayat - Full Stack Developer"
      />
      <meta
        name="apple-mobile-web-app-title"
        content="Portfolio | Shubham Lingayat - Full Stack Developer"
      />
      <link rel="icon" href="/favicon.ico" />
      <title>Portfolio | Shubham Lingayat - Full Stack Developer</title>
    </Head>
  );
}
