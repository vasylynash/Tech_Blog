const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', async (req, res) => {
    try {
        const commentData = await Comment.create({
            post_id: req.body.postId,
            content: req.body.content,
            user_id: req.session.user_id
        }) 
        res.status(200).send();
        
    } catch (error) {
        res.json(error)
    }
})

module.exports = router;