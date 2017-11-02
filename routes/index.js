'use strict';

const { Router } = require('express');
const router = Router();

router.get('/', (req, res, next) => {
  res.render('index');
});

// pipe all other requests through the route modules
router.use(require('./authRoute'));
router.use(require('./userRoute'));
router.use(require('./prescriptionRoute')); //keep commented out until ready to test

// router.use(require('./fooRoute')); //require in all the routes here from the routes files

module.exports = router;