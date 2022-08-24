import { NextApiRequest, NextApiResponse } from "next";
import Comment from "../../../../components/utils/models/commentModel";


const getCommentById = async (req: NextApiRequest, res: NextApiResponse) => {
    const { id } = req.query;
    try {
        const comment = await Comment.findById(id);
        res.status(200).json({ success: true, data: comment });
    } catch (error) {
        res.status(500).json({ error: error, success: false });
    }
}

export default getCommentById;