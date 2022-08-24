import { NextApiRequest, NextApiResponse } from "next";
import cloudinary from "../../../components/utils/cloudinary";
import Post from "../../../components/utils/models/postModel";
import connectDB from "../../../components/utils/mongo";
import verifyToken from "../../../components/utils/authoririze";

export default async function newPost(req: NextApiRequest, res: NextApiResponse) {
    const { text, creatorId, pictures, videos } = req.body;
    const verified = await verifyToken(req.headers.authorization);
    if(!verified) return
    try {
        await connectDB();
        console.log(req.body)
        const res1 = await cloudinary.uploader.upload(pictures[0], {
            folder: '/infinity/posts',
            use_filename: true,
            unique_filename: true
        });
        console.log(res1);
        const post = await Post.create({
            text,
            creatorId,
            pictures: [res1.secure_url],
            videos
        })
        console.log("post:", post);
        res.status(201).json({message: "Created", data: post});
    } catch (error: any) {
        console.log(error);
        res.status(400).json({ success: false });
    }
}