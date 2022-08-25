import { NextApiRequest, NextApiResponse } from "next";
import Post from "../../../components/utils/models/postModel";
import connectDB from "../../../components/utils/mongo";


export default async function postHandler(req: NextApiRequest, res: NextApiResponse) {
    await connectDB();
    const { id } = req.query;
    const method = req.method;

    switch (method) {
        case "GET":
            const post = await Post.findById(id);
            res.status(200).json({ message: "Success", data: post });
            break;
        case "PUT":
            const { text, creatorId, pictures, videos } = req.body;
            const post1 = await Post.findByIdAndUpdate(id, {
                text,
                creatorId,
                pictures,
                videos
            });
            res.status(200).json({ message: "Success", data: post1 });
            break;
        case "DELETE":
            const post2 = await Post.findByIdAndDelete(id);
            res.status(200).json({ message: "Success", data: post2 });
            break;
        default:
            res.status(400).json({ message: "Method not allowed" });
            break;
        }
}