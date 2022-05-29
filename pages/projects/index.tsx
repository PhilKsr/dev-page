import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode } from '@fortawesome/free-solid-svg-icons'
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
        <div className='w-8/12'>
          <h2 className='self-start pb-8 text-2xl font-bold'>CHECK OUT MY PROJECTS.</h2>
          <section
            className='flex flex-col <div class="max-w-md py-4 px-8 bg-zinc-100 shadow-lg rounded-lg my-20">
'>
            <div className='flex justify-center pb-4'>
              <a href='' className='block w-2/4 '>
                <Image src={budgetingApp} alt='Budgeting-App' width={16} height={9} layout='responsive' />
              </a>
            </div>

            <article>
              <a href='' className='py-4 font-medium underline hover:text-gray-500'>
                Budgeting App
              </a>
              <a href='' className='ml-4'>
                <FontAwesomeIcon icon={faCode} style={{ fontSize: 16 }} className=' hover:text-gray-500' />
              </a>
              <div className='py-4'>
                <div className='px-2 text-sm text-white bg-gray-500 rounded-3xl max-w-min'>React</div>
              </div>
              <p className='text-sm'>
                Collaboration Project with four developers to test out possibilities of Tailwind and Next.js
              </p>
            </article>
          </section>
        </div>
      </main>
    </>
  )
}
