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

// Categories list
router.get('/categories', async (req, res) => {
  try{
    
  } catch (err) {
    res.status(500).json(err);
  }
})


// Login page
router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/profile'); // TODO:  Not sure if this route is setup yet
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
