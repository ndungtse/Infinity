import { NextApiRequest, NextApiResponse } from 'next';
import Comment from '../../../../components/utils/models/commentModel';
import Post from '../../../../components/utils/models/postModel';


export default async function newComment(req: NextApiRequest, res: NextApiResponse){
    try {
        const comment = await Comment.create(req.body);
        await Post.findByIdAndUpdate(req.body.post, {$push: {comments: comment._id}});
        res.status(200).json({ success: true, data: comment });
    } catch (error) {
        res.status(500).json({ error: error, success: false });
    }
}