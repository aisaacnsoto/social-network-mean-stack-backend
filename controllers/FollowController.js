const FollowModel = require('../models/Follow');

const follow = async (req, res) => {
    try {
        let {follower, following} = req.body;
        
        const existingFollow = await FollowModel.findOne({ follower, following });
        if (existingFollow) {
            res.send(existingFollow);
        }
        
        let result = await FollowModel.create(req.body);
        res.send(result);
    } catch (error) {
        console.log(error);
    }
};

const unfollow = async (req, res) => {
    try {
        let {follower, following} = req.body;
        let result = await FollowModel.findOneAndDelete({follower, following}, {new: true});

        res.send(result);
    } catch (error) {
        console.log(error);
    }
};

const listarFollowers = async (req, res) => {
    try {
        let id = req.params.id;

        let result = await FollowModel.find({following: id})
            .populate('follower', '_id name surname')
            .populate('following', '_id name surname');

        res.send(result);
    } catch (error) {
        console.log(error);
    }
};

const listarFollowing = async (req, res) => {
    try {
        let id = req.params.id;
        let result = await FollowModel.find({follower: id})
            .populate('follower', '_id name surname')
            .populate('following', '_id name surname');

        res.send(result);
    } catch (error) {
        console.log(error);
    }
};

const listarPorID = async (req, res) => {

    try {
        let follower = req.params.follower;
        let following = req.params.following;
        let result = await FollowModel.findOne({follower, following});

        res.send(result);
    } catch (error) {
        console.log(error);
    }
    
};

module.exports = {
    follow,
    unfollow,
    listarFollowers,
    listarFollowing,
    listarPorID
};