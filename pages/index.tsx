import Head from 'next/head'

export default function Home() {
  //TODO: add title and maybe more seo relevant

  return (
    <main className='flex items-center justify-center header__background'>
      <Head>
        <title>Philipp Kaiser</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <meta name='robots' content='all' />
        <meta name='description' content='Meet your next developer.' />
      </Head>

      <h2 className='font-extrabold text-transparent mx-14 text-9xl opacity-90 bg-clip-text bg-gradient-to-r from-slate-600 to-orange-600'>
        Meet your next developer
      </h2>
    </main>
  )
}
