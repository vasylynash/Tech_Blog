const router = require('express').Router();
const {Post, User, Comment} = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
    try {
        const postData = await Post.findAll({ include: [{model: User}, {model: Comment}]});
        const posts = postData.map(post => post.get({plain: true}));
        res.render('all', {posts});
    } catch (error) {
        res.json(error)
    }
});

router.get('/dashboard', withAuth, async (req, res) => {
  try {
      const postsData = await Post.findAll({
          where: {
              user_id: req.session.user_id
          }
      })
    const posts = postsData.map(el => el.get({plain: true}));

    res.render('dashboard', {posts});
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/dashboard');
    return;
  }

  res.render('login');
});

module.exports = router;