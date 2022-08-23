import { NextApiRequest, NextApiResponse } from "next";
import cloudinary from "../../../components/utils/cloudinary";
import Post from "../../../components/utils/models/postModel";
import connectDB from "../../../components/utils/mongo";


export default async function newPost(req: NextApiRequest, res: NextApiResponse) {
    const { text, creatorId, pictures, videos } = req.body;
    try {
        await connectDB();
        const res = await cloudinary.uploader.upload(pictures[0], {
            folder: '/infinity/posts',
            use_filename: true,
            unique_filename: true
        });
        console.log(res);
        const post = await Post.create({
            text,
            creatorId,
            pictures: [res.secure_url],
            videos
        })
        res.status(201).json({message: "Created", data: post});
    } catch (error: any) {
        console.log(error);
        res.status(400).json({ success: false });
    }
}