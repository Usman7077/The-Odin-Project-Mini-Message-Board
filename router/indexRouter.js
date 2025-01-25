const express = require('express');
const router = express.Router();

const messages = [
  {
    text: 'Hi there!',
    user: 'Amando',
    added: new Date(),
  },
  {
    text: 'Hello World!',
    user: 'Charles',
    added: new Date(),
  },
];

router.get('/', (req, res) => {
  res.status(200).render('index', {
    messages,
  });
});

router.get('/messageDetails/:index', (req, res) => {
  res.status(200).render('messageDetails', {
    message: messages[req.params.index],
  });
});

router.get('/new', (req, res) => {
  res.status(200).render('form', {});
});

router.post('/new', (req, res) => {
  messages.push({
    user: req.body.user,
    text: req.body.message,
    added: new Date(),
  });
  res.redirect('/');
});
module.exports = router;
