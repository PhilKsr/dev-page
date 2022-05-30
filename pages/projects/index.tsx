import Head from 'next/head'
import Image from 'next/image'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode } from '@fortawesome/free-solid-svg-icons'

import budgetingApp from '../../assets/images/budgetingApp.png'
import quizApp from '../../assets/images/quizApp.png'
import roAdventure from '../../assets/images/roAdventure.png'
import done from '../../assets/images/done.png'

export default function ProjectsView() {
  //TODO Image loading time is massive - get smarter
  //TODO: add title and maybe more seo relevant

  const projects = [
    {
      title: 'Budgeting App',
      tags: ['Next.js', 'TypeScript', 'Tailwind'],
      image: budgetingApp,
      path: 'https://budgeting-app-sigma.vercel.app/',
      src: 'https://github.com/Philipp-Kaiser/Budgeting-App',
    },
    {
      title: 'RoAdventure',
      tags: ['React', 'Node.js', 'MongoDB', 'Leaflet', 'Cypress', 'Jest', 'Storybook'],
      image: roAdventure,
      path: 'https://roadventure.herokuapp.com/',
      src: 'https://github.com/Philipp-Kaiser/capstone-project',
    },
    {
      title: 'done',
      tags: ['Next.js', 'TypeScript', 'Tailwind'],
      image: done,
      path: 'https://done-gamma.vercel.app/',
      src: 'https://github.com/Philipp-Kaiser/done',
    },
    {
      title: 'Quiz-App',
      tags: ['React', 'Styled-Components', 'Node.js', 'MongoDB'],
      image: quizApp,
      path: 'https://quiz-app-new.herokuapp.com/',
      src: 'https://github.com/Philipp-Kaiser/quiz-app-react',
    },
  ]

  return (
    <>
      <Head>
        <title>Philipp Kaiser</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>

      <main className='flex flex-col items-center mt-52'>
        <div className='w-8/12'>
          <h2 className='self-start pb-8 mb-20 text-2xl font-bold'>CHECK OUT MY PROJECTS.</h2>

          {projects.map((project, i) => (
            <section key={i} className='flex mb-20 rounded-lg shadow-sm bg-neutral-50'>
              <a href={project.path} className='block w-2/4'>
                <Image
                  src={project.image}
                  alt='Budgeting-App'
                  layout='responsive'
                  className='w-auto h-auto transition duration-500 transform hover:scale-105'
                />
              </a>

              <article className='flex flex-col items-center justify-center w-2/4 px-4 '>
                <div>
                  <a href={project.path} className='text-xl font-medium underline hover:text-gray-500'>
                    {project.title}
                  </a>
                  <a href={project.src} className='px-4'>
                    <FontAwesomeIcon icon={faCode} style={{ fontSize: 16 }} className=' hover:text-gray-500' />
                  </a>
                </div>

                <div className='flex py-8'>
                  {project.tags.map((tag, i) => (
                    <div key={i} className='px-2 mr-2 text-white bg-gray-500 rounded-3xl '>
                      {tag}
                    </div>
                  ))}
                </div>
              </article>
            </section>
          ))}
        </div>
      </main>
    </>
  )
}
