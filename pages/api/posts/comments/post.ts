import { NextApiRequest, NextApiResponse } from 'next';
import Comment from '../../../../components/utils/models/commentModel';

const getCommentsByPost = async (req: NextApiRequest, res: NextApiResponse) => {
    const method = req.method;
    switch (method) {
        case 'GET':
            const { postId } = req.headers;
            try {
                const comments = await Comment.find({ postId });
                res.status(200).json({ success: true, data: comments });
            } catch (error) {
                res.status(500).json({ error: error, success: false });
            }
            break;
        default:
            res.status(400).json({ success: false });
            break;
        }
}

export default getCommentsByPost;