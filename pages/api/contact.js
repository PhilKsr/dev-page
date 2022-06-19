import dotenv from 'dotenv'
import nodemailer from 'nodemailer'

dotenv.config()
const port = process.env.PORT
const host = process.env.HOST
const transporterMail = process.env.TRANSPORTER_MAIL
const transporterPassword = process.env.TRANSPORTER_PW
const targetMail = process.env.TARGET_MAIL

/* eslint-disable import/no-anonymous-default-export */
export default async (req, res) => {
  const { name, email, subject, message } = req.body

  const transporter = nodemailer.createTransport({
    port: 587,
    host: 'mail.gmx.net',
    auth: {
      user: transporterMail,
      pass: transporterPassword,
    },
    secure: true,
  })
  const mailData = {
    from: email,
    to: targetMail,
    subject: `Message From ${name}: ${subject}`,
    text: message,
  }

  res.status(200)
  res.send('success')

  try {
    await transporter.sendMail(mailData)
  } catch (error) {
    return res.status(500).json({ error: error.message || error.toSring() })
  }
  return res.status(200).json({ error: '' })
}
