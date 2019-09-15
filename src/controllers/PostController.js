const Post = require('../models/Post');

module.exports = {
    async index(req, res) {
        const get = await Post.find().sort('-createdAt');

        return res.json(get);
    },

    async store(req, res){
        const { author, place, description, hashtags } = req.body;
        const { filename: image } = req.file;

        const post = await Post.create({
            author,
            place,
            image,
            description,
            hashtags,
        });

        return res.json({post});
    }
};