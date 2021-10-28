var express = require('express');
var router = express.Router();
const nodemailer = require("nodemailer")

// Ctrl + C and type"npm start" every time you set up a new EJS page. Otherwise it won't load properly.

/* GET home page. */
router.get('/', function (req, res) {
  res.render('home')
});

// About page
router.get('/about', function (req, res) {
  res.render('about')
});

// Contact page
router.get('/contact', function (req, res) {
  res.render('contact')
});

// Send mail with Nodemailer

// Transporter
const transporter = nodemailer.createTransport({
  host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'ally.jacobi24@ethereal.email',
        pass: 'hpq3MdJ6WYEhNUr9zQ'
    }
})

// Post
router.post("/contact", async (req, res) => {
  let info = await transporter.sendMail({
    to: "targetuser@mail.com",
    from: "fromuser@mail.com",
    subject: "hello!",
    text: "This is the content"
  })
  console.log(nodemailer.getTestMessageUrl(info))
  res.send({message: "Success!"})
})

module.exports = router;
