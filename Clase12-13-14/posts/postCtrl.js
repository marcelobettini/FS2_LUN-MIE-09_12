const Post = require("./postModel")
const createPost = (req, res) => {
    const newPost = new Post({ ...req.body });
    newPost.save((err, result) => {
        if (err) {
            res.status(400).json(err)
        } else {
            res.status(200).json(result)
        }
    })
}

const searchTitleByText = (req, res) => {
    const { query } = req.params
    Post.find({ $text: { $search: query } }, (err, result) => {
        if (err) return res.sendStatus(404)
        return res.status(200).json(result)
    })
}

module.exports = { createPost, searchTitleByText }