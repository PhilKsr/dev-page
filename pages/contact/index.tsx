import Head from 'next/head'
import { FormEvent, useState } from 'react'

export default function ContactView() {
  //TODO: add title and maybe more seo relevant

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)

  function handleInput(
    event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>,
    setInput: Function
  ) {
    setInput(event.target.value)
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    let data = {
      name,
      email,
      message,
      subject,
    }
    fetch('/api/contact', {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then(res => {
      if (res.status === 200) {
        setSubmitted(true)
        setName('')
        setEmail('')
        setMessage('')
        setSubject('')
      }
    })
  }

  return (
    <>
      <Head>
        <title>Philipp Kaiser | Contact</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <meta name='robots' content='all' />
      </Head>
      <main className='flex justify-center mt-52 '>
        <div className='flex w-8/12'>
          <div className='w-2/4 mr-8'>
            <h2 className='pb-8 text-2xl font-bold'>GET IN TOUCH.</h2>
            <p>
              Feel free to reach out with any questions or requests you have! Use the form or send an email to{' '}
              <a href='mailto:info@philippkaiser.me' className='underline hover:text-gray-400'>
                info@philippkaiser.me
              </a>
            </p>
          </div>

          <form action='submit' onSubmit={e => handleSubmit(e)} className='flex flex-col w-2/4 ml-8'>
            <label className='mb-2' htmlFor='name'>
              Name
            </label>
            <input
              onChange={e => handleInput(e, setName)}
              className='mb-8 border border-gray-300 bg-gray-50'
              type='text'
              name='name'
              id='name'
              required
            />

            <label className='mb-2' htmlFor='email'>
              E-Mail
            </label>
            <input
              onChange={e => handleInput(e, setEmail)}
              className='mb-8 border border-gray-300 bg-gray-50'
              type='email'
              name='email'
              id='email'
              required
            />

            <label className='mb-2' htmlFor='subject'>
              Subject
            </label>
            <input
              onChange={e => handleInput(e, setSubject)}
              className='mb-8 border border-gray-300 bg-gray-50'
              type='text'
              name='subject'
              id='subject'
              required
            />

            <label className='mb-2' htmlFor='message'>
              Message
            </label>
            <textarea
              onChange={e => handleInput(e, setMessage)}
              className='mb-8 border border-gray-300 bg-gray-50'
              name='message'
              id='message'
              cols={20}
              rows={3}></textarea>

            <button className='self-start p-3 text-white bg-gray-400 hover:bg-gray-300' type='submit'>
              Send
            </button>
          </form>
        </div>
      </main>
    </>
  )
}
