import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import portraitPic from '../../assets/images/me.jpg'

export default function AboutView() {
  const text = [
    { title: "I'm Philipp! Based in northern Germany I'm an passionated Web-Developer." },
    {
      title:
        'Coming from five years of sales experience I realized the need for efficient processes just as transparent communication in software projects.',
    },
    { title: 'Besides scalable and clean code I focus on exciting customers and users.' },
    {
      title:
        "Also passionate about travelling, my recent private project is transforming a transporter into a campervan. With the love for nature and outdoor activities I'm excited to explore the wilds of Germany, Europe and the rest of the World.",
    },
    {
      title:
        'On my search for silent places far away from citys or traffic jams I always find a lot of inspiration for life, work and new ',
      link: { title: 'projects.', link: '/projects' },
    },
  ]
  return (
    <>
      <Head>
        <title>Philipp Kaiser</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <main className='flex justify-center mt-52'>
        <div className='w-8/12'>
          <div className='flex justify-between'>
            <article className='w-2/4 pr-8'>
              <h2 className='pb-8 text-2xl font-bold'>IN HAMBURG WE SAY MOIN.</h2>

              {text.map((p, i) => (
                <p key={i} className='py-4'>
                  {p.title}
                  {p.link && (
                    <Link href={p.link.link} className='underline hover:text-gray-400'>
                      {p.link.title}
                    </Link>
                  )}
                </p>
              ))}
            </article>

            <div className='block'>
              <Image src={portraitPic} alt="Moin! It's me!" width={400} height={500} className='w-2/4 pl-8' />
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
