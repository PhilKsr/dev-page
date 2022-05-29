import Head from 'next/head'
import Image from 'next/image'

import budgetingApp from '../../assets/images/Budgeting-App.png'

export default function ProjectsView() {
  return (
    <>
      <Head>
        <title>Philipp Kaiser</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <main className='flex flex-col items-center mt-52'>
        <div className='flex w-8/12 h-64 bg-gradient-to-r from-slate-600 to-orange-600'>
          <article>
            <h2 className='pb-8 text-xl font-bold'>CHECK OUT MY PROJECTS.</h2>
            <h3 className='pb-4'>Title</h3>
            <div className='pb-4'>
              <div className='p-2 text-sm text-white bg-gray-400 rounded-3xl hover:bg-gray-300 max-w-min'>Tags</div>
            </div>
            <p className='text-sm'>Short description</p>
            <button>Show code</button>
          </article>
          <div className='w-2/5 h-full justify-self-end'>
            <Image src={budgetingApp} alt='Budgeting-App' layout='responsive' objectFit='cover' />
          </div>
        </div>
      </main>
    </>
  )
}
