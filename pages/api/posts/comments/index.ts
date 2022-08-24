import { NextApiRequest, NextApiResponse } from 'next';
import Comment from '../../../../components/utils/models/commentModel';

const handleComments = async(req: NextApiRequest, res: NextApiResponse) => {
    const method = req.method;
    switch (method) {
        case 'GET':
            try {
                const comments = await Comment.find();
                res.status(200).json({success: true, data:comments});
            } catch (error) {
                res.status(500).json({ error: error, success: false });
            }
            break;
        case 'POST':
            try {
                const comment = await Comment.create(req.body);
                res.status(200).json({ success: true, data: comment });
            } catch (error) {
                res.status(500).json({ error: error, success: false });
            }
            break;
        default:
            res.status(400).json({ success: false });
            break;
        }
}

export default handleComments;