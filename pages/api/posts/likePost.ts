import { NextApiRequest, NextApiResponse } from "next";
import verifyToken from "../../../components/utils/authoririze";
import Post from "../../../components/utils/models/postModel";
import connectDB from "../../../components/utils/mongo";

export default async function likePost(req: NextApiRequest, res: NextApiResponse) {
    const { userId, postId } = req.body;
    // const verified = await verifyToken(req.headers.authorization);
    // if(!verified) return res.status(401).json({message: "Unauthorized"});
    try {
        await connectDB();
        const post = await Post.findById(postId);
        if(post.likes.includes(userId)) {
            post.likes = post.likes.filter((like: any) => like !== userId);
        } else {
            post.likes.push(userId);
        }
        await post.save();
        res.status(200).json({ message: "Success", data: post });
    } catch (error: any) {
        console.log(error);
        res.status(400).json({ success: false });
    }
}