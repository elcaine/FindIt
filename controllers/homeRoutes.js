const router = require('express').Router();
const {  User, Category, State, Company } = require('../models');
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

// THE ACTUAL SEARCH
router.get('/search/:cat/:sta', async (req, res) => {
  // console.log('THE ACTUAL SEARCH\n', req.body);
  try{
    const resultsData = await Company.findAll({
      where: { 
        category_id: req.params.cat,
        state_id: req.params.sta
      }
    });

    const result = resultsData.map(r => r.name);
    console.log('$$$$$$$$$$$$$$$$resultOUt: ', result);
    res.render('results', {
      result
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


// Login page
router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
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

router.get('/my-profile', async (req, res) => {
  try{
    const categoryData = await Category.findAll();
    const statesData = await State.findAll();

    const cats = categoryData.map(cat => cat.name);
    const states = statesData.map(s => s.name);
    
    res.render('profile', {
      categories: cats,
      states: states
    });
  } catch (err) {
    res.status(500).json(err);
  }
})


module.exports = router;
