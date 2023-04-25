const express = require('express')
const router = express.Router()
const nodemailer = require('nodemailer')
const cors = require('cors')
const { USER, PASS } = require('./config')

const transport = {
  host: 'smtp.gmail.com',
  port: 587,
  auth: {
    user: USER,
    pass: PASS,
  },
}

const transporter = nodemailer.createTransport(transport)

transporter.verify((error, success) => {
  if (error) {
    console.log(error)
  } else {
    console.log('Server is ready to take messages')
  }
})

router.post('/send', cors(), (req, res) => {
  const { name, email, message, subject } = req.body
  const content = `${name} isimli kişi tarafından iletilen mesaj; \n\n${message}`
  const mail = {
    from: email,
    to: USER,
    subject: subject,
    text: content,
  }

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res
        .json({
          msg: 'fail',
        })
        .status(400)
    } else {
      res.json({
        msg: 'success',
      })
    }
  })
})

const app = express()

app.use(cors())
app.use(express.json())
app.use('/', router)
app.listen(3002)
