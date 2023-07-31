const LikeModel = require('../models/Like');

const like = async (req, res) => {
    try {
        let {post, user} = req.body;
        
        const existingLike = await LikeModel.findOne({post, user});
        if (existingLike) {
            res.send(existingLike);
        }
        
        let result = await LikeModel.create(req.body);
        res.send(result);
    } catch (error) {
        console.log(error);
    }
};

const isLiked = async (req, res) => {
    try {
        let post = req.params.post;
        let user = req.params.user;
        
        const existingLike = await LikeModel.findOne({post, user});
        
        res.send(existingLike);
    } catch (error) {
        console.log(error);
    }
};

const dislike = async (req, res) => {
    try {
        let {post, user} = req.body;
        let result = await LikeModel.findOneAndDelete({post, user}, {new: true});

        res.send(result);
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    like,
    dislike,
    isLiked
};