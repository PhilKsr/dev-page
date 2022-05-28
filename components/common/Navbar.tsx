import Link from 'next/link'

export default function Navbar() {
  const pages = [
    { title: 'home', path: '/' },
    { title: 'projects', path: '/projects' },
    { title: 'about', path: '/about' },
    { title: 'contact', path: '/contact' },
  ]

  return (
    <header className='flex items-center justify-between pt-10'>
      <h1 className='ml-20 text-4xl'>Philipp Kaiser</h1>

      <nav>
        <ul className='flex mr-20'>
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
