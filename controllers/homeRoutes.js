const router = require('express').Router();
const { User } = require('../models/User');
const withAuth = require('../utils/auth');

// Root route:  homepage
router.get('/', async (req, res) => {
  try {    
    // Pass serialized data and session flag into template
    res.render('homepage', { 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Login page
router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }

  res.render('login');
});

router.get('/contact', (req, res) => {
  res.render('contact');
});

router.get('/aboutus', (req, res) => {
  res.render('about-us');
})

router.get('/createaccount', (req, res) => {
  res.render('create-account');
})


module.exports = router;
