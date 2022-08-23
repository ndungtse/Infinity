import { NextApiRequest, NextApiResponse } from "next";
import verifyToken from "../../../components/utils/authoririze";
import Post from "../../../components/utils/models/postModel";
import connectDB from "../../../components/utils/mongo";



export default async function getPosts(req: NextApiRequest, res: NextApiResponse) {
    const verified = await verifyToken(req, res);
    if(!verified) return
    try {
        await connectDB();
        const posts = await Post.find({}).sort({ createdAt: -1 });
        res.status(200).json({ success: true, data: posts });
    } catch (error: any) {
        console.log(error);
        res.status(400).json({ success: false });
    }

}