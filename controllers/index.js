const router = require('express').Router();

const apiRoutes = require('./api');         // These are for back end functionality (will not, by themselves, display or directly route to handlebars)
const homeRoutes = require('./homeRoutes'); // These will display pages to users (routes to hanglebars)

router.use('/', homeRoutes);
router.use('/api', apiRoutes);

module.exports = router;
