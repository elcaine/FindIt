/*
    Was not able to get routing built properly.
    Left this here in case magical epiphanies happen.
*/


// const router = require('express').Router();
// const {  User, Category, State, Company } = require('../../models');

// // THE API SEARCH
// router.post('/', async (req, res) => {
//     console.log('THE ACTUAL (API) SEARCH\n', req.body);
//     try{
//       const cat = await Category.findOne({ where: { name: req.body.cat }});
//       const sta = await State.findOne({ where: { name: req.body.sta }});
  
//       if(!cat || !sta){
//         res.status(404).json({"message": "No category and/or state found"});
//         // res.redirect('/');
//       }
  
//       console.log('cat: ', cat.id, '\tsta: ', sta.id);
  
//       const resultsData = await Company.findAll({
//         where: { 
//           category_id: cat.id,
//           state_id: sta.id
//         }
//       });
  
//       const result = resultsData.map(r => r.name);
//       // const result = [{"cat": cat.id}, {"sta": sta.id}];
//       console.log('%%%%%%%%%%%%%%% result.. ', result);
//       // res.status(200).json(result);
//       res.render('results', {
//         result: result
//       });
//     } catch (err) {
//       res.status(500).json(err);
//     }
//   });
  
// module.exports = router;
