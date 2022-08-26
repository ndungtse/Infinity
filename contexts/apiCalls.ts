import Comment from "../components/utils/models/commentModel";
import Post from "../components/utils/models/postModel";
import { getCustom, postCustom } from "./apiCallMethods";

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
    console.log(postId, userId);
    try {
        const res = await postCustom(`api/posts/likePost`, { userId, postId });
        console.log(res);
        return { success: true };
    } catch (error) {
        return { error: error, success: false };
    }
}

export const getPostsComments = async (postId: string)=> {
    try {
        const res = await getCustom(`api/posts/comments/post`, { headers:{ "postId": postId }});
        return { success: true, data: res.data };
    } catch (error) {
        return { error: error, success: false };
    }
}
