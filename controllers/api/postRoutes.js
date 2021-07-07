const router = require('express').Router();
const { Post } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', withAuth, async (req, res) => {
    try {
        const posts = Post.findAll({
            where: user_id = req.body.user_id
        },
        {include: Comment})
        console.log(posts);

    }
    catch(e) {
        res.json(e);
    }
});

module.exports = router;