import { model, models, Schema } from "mongoose";

const commentSchema = new Schema({
    comment: { type: String, required: true },
    user: { type: Schema.Types.ObjectId, ref: "User" },
    post: { type: Schema.Types.ObjectId, ref: "Post" },
    createdAt: { type: Date, default: Date.now },
})

const Comment = models?.Comment || model("Comment", commentSchema);

export default Comment;