import { NextApiRequest, NextApiResponse } from "next";
import Post from "../../../../components/utils/models/postModel";
import connectDB from "../../../../components/utils/mongo";

export default async function postByUser(req: NextApiRequest, res: NextApiResponse) {
    await connectDB();
    const { uuid } = req.query;
    try {
        const post = await Post.find({ creatorId: uuid });
        res.status(200).json({ message: "Success", data: post });
    } catch (error) {
        console.log(error);
        res.status(400).json({ success: false });
    }
}