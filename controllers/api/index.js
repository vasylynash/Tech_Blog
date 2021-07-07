const router = require('express').Router();
const userRoutes = require('./userRoutes');
const postRoutes = require('./postRoutes');
const withAuth = require('../../utils/auth');

router.use('/users', userRoutes);
router.use('/posts', postRoutes);

module.exports = router;