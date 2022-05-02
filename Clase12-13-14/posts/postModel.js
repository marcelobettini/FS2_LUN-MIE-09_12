const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const PostSchema = new Schema({
    title: { type: String, required: true },
    body: { type: String, required: true },
    date: { type: Date, default: Date.now },
    comments: [{ body: String, date: Date }],
    meta: { votes: Number, favs: Number },
},
    { timestamps: true },
)
PostSchema.index({ title: "text" }) //crea un índice que permita buscar por texto en el campo title

const Post = mongoose.model("Post", PostSchema)
module.exports = Post

