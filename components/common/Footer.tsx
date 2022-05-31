import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faXing } from '@fortawesome/free-brands-svg-icons'
import Link from 'next/link'

export default function Footer() {
  const socialMediaLinks = [
    {
      title: 'GitHub',
      link: 'https://github.com/Philipp-Kaiser',
      icon: faGithub,
    },
    {
      title: 'LinkedIn',
      link: 'https://www.linkedin.com/in/philipp-kaiser-4936ba146/',
      icon: faLinkedin,
    },
    {
      title: 'Xing',
      link: 'https://www.xing.com/profile/Philipp_Kaiser65',
      icon: faXing,
    },
  ]

  //TODO: create and add impressum view

  return (
    <footer className='flex flex-col items-center'>
      <div className='w-8/12 py-8 pt-14 '>
        <hr />
      </div>

      <nav className='w-8/12 py-4 '>
        <ul className='flex justify-around'>
          {socialMediaLinks.map((link, i) => (
            <li key={i}>
              <a href={link.link}>
                <FontAwesomeIcon icon={link.icon} style={{ fontSize: 25 }} className='hover:text-gray-400' />
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <p className='py-4 text-sm'>© 2021 Philipp Kaiser</p>

      {/*       <Link className='py-4 text-sm underline hover:text-gray-400' href='/'>
        Impressum
      </Link> */}
    </footer>
  )
}
