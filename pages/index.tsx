import Head from 'next/head'

export default function Home() {
  //TODO: add title and maybe more seo relevant

  return (
    <main className='z-10 flex items-center justify-center header__background'>
      <Head>
        <title>Philipp Kaiser</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>

      <h2 className='font-extrabold text-transparent text-9xl bg-clip-text bg-gradient-to-r from-slate-600 to-orange-600'>
        Meet your next developer
      </h2>
    </main>
  )
}
