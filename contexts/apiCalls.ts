import Comment from "../components/utils/models/commentModel";
import Post from "../components/utils/models/postModel";

export const getPostCommets = async (postId: string)=> {
    try {
        const comments = await Comment.find({ postId });
        return { data: comments, success: true };
    } catch (error) {
        return { success: false, error };
    }
}

export const commentOnPost = async (comment: any)=> {
    try {
        const newComment = await Comment.create(comment);
        await Post.findByIdAndUpdate(comment.post, {$push: {comments: comment._id}});
        return { success: true, data: newComment };
    } catch (error) {
        return { error: error, success: false };
    }
}

export const likePost = async (postId: string, userId: string)=> {
    try {
        await Post.findByIdAndUpdate(postId, {$push: {likes: userId}});
        return { success: true };
    } catch (error) {
        return { error: error, success: false };
    }
}

export const getPosts = async ()=> {
    try {
        const posts = await Post.find();
        return { data: posts, success: true };
    } catch (error) {
        return { success: false, error };
    }
}