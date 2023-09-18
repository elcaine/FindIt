const router = require('express').Router();
const {  User, Category, State, Company, Inquiry, Search } = require('../models');
const withAuth = require('../utils/auth');
const fs = require('fs');
let resultRay = [];

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

// Show inquiries
router.get('/inq', async (req, res) => {
  const inquiryData = await Inquiry.findAll();
  if(!inquiryData){
    res.status(404).json({"message": "No contact/inquiries found"});
  }

  const inqs = inquiryData.map(i => i.get({ plain: true }));
  console.log('inqs after cleaning>>>\n', inqs);
  res.render('inquiry', {
    result: inqs
  });
});

// Login page
router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

// Tried doing rendering 'results' from the direct post, but it would keep redirecting to 'my-profile'
router.get('/search2', (req, res) => {
  res.render('results', {
    result: resultRay
  });
});

// THE ACTUAL SEARCH (API)
router.post('/search', async (req, res) => {
  try{
    const cat = await Category.findOne({ where: { name: req.body.cat }});
    const sta = await State.findOne({ where: { name: req.body.sta }});
    
    if(!cat || !sta){
      res.status(404).json({"message": "No category and/or state found"});
    }

    const resultsData = await Company.findAll({
      where: { 
        category_id: cat.id,
        state_id: sta.id
      }
    });

    resultRay = resultsData.map(r => r.name);
    
    await Search.create({
      user_id: 1,
      category_id: cat.id,
      state_id: sta.id,
      // result: j,
    });

    res.status(200).json(resultRay);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/contact', (req, res) => {
  res.render('contact');
});

router.get('/aboutus', (req, res) => {
  res.render('about-us');
});

router.get('/createaccount', (req, res) => {
  res.render('create-account');
});

router.get('/my-profile', async (req, res) => {
  try {
    // Drop-down lists data
    const categoryData = await Category.findAll();
    const statesData = await State.findAll();
    // ...  drop-down lists data cleanup
    const cats = categoryData.map((cat) => cat.name);
    const states = statesData.map((s) => s.name);

    // Previous searches
    const previousData = await Search.findAll({
      include: [
        {
          model: State,
          attributes: ['name'],
        },
        {
          model: Category,
          attributes: ['name'],
        }
    ],
    });
    const previous = previousData.map(p => p.get({ plain: true }));
    const userId = req.session.user_id;
    const user = await User.findOne({ where: { id: userId }});
    
    res.render('profile', {
      // userData: userData, 
      name: user.name,
      // Drop-down selections
      categories: cats,
      states: states,
      // Previous search stuff
      previous: previous
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;
