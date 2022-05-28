export default function ContactView() {
  return (
    <>
      <h2>GET IN TOUCH.</h2>

      <p>
        Feel free to reach out with any questions or requests you have! Use the form or send an email to{' '}
        <a href='mailto:info@philippkaiser.me' className='hover:text-gray-400'>
          info@philippkaiser.me
        </a>
      </p>

      <form action=''>
        <label htmlFor='name'>Name</label>
        <input type='text' name='name' id='name' placeholder='Max' required />

        <label htmlFor='email'>E-Mail</label>
        <input type='email' name='email' id='email' placeholder='your@email.com' required />

        <label htmlFor='subject'>Subject</label>
        <input type='text' name='subject' id='subject' required />

        <label htmlFor='message'>Message</label>
        <textarea name='message' id='message' cols={20} rows={3}></textarea>

        <button type='submit'></button>
      </form>
    </>
  )
}
