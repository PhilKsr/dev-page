import Link from 'next/link'

export default function Navbar() {
  const pages = [
    { title: 'home', path: '/' },
    { title: 'projects', path: '/projects' },
    { title: 'about', path: '/about' },
    { title: 'contact', path: '/contact' },
  ]

  //TODO: add anchor for projects to jump on homepage

  return (
    <header className='absolute top-0 left-0 right-0 z-0 flex items-center justify-between pt-14'>
      <h1 className='text-4xl ml-14'>Philipp Kaiser</h1>

      <nav>
        <ul className='flex mr-14'>
          {pages.map((page, i) => (
            <li key={i} className='px-5 hover:text-gray-400'>
              <Link href={page.path}>
                <a>{page.title.toUpperCase()}</a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
