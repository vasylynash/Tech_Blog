const router = require('express').Router();
const {Post, User, Comment} = require('../models');

router.get('/', async (req, res) => {
    try {
        const postData = await Post.findAll({ include: [{model: User}, {model: Comment}]});
        const posts = postData.map(post => post.get({plain: true}));
        res.render('all', {posts});
    } catch (error) {
        res.json(error)
    }
});


module.exports = router;