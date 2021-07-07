const router = require('express').Router();
const { Post } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', async (req, res) => {
    try {
        const postData = await Post.create({
            title: req.body.title,
            content: req.body.content,
            user_id: req.session.user_id
        }) 
        console.log(postData);
        res.status(200).send();
        
    } catch (error) {
        res.json(error)
    }
})

module.exports = router;