import { NextApiRequest, NextApiResponse } from 'next';
import connectDB from '../../../components/utils/mongo';
import Competition from '../../../components/utils/models/competitionModel';

export default async function handleCompetitions(req: NextApiRequest , res: NextApiResponse) {
    const method = req.method;
    await connectDB()

    switch (method) {
        case 'GET':
            try {
                const competitions = await Competition.find();
                res.status(200).json({ success: true, data: competitions})
            } catch (error) {
                res.json({ success: false, error: error, data: null})
            }
            break;
        case 'POST':
            try {
                const book = await Competition.create(req.body);
                res.json({ success: true, data: book})
            } catch (error) {
                res.json({ success: false, error: error, data: null})
            }
        case 'PUT':
            try {
                const { id, data } = req.body
                const book = await Competition.findByIdAndUpdate(id, data);
                res.json({ success: true, data: book})
            } catch (error) {
                res.json({ success: false, error: error, data: null})
            }
        case 'DELETE':
            try {
                const { id } = req.body
                const book = await Competition.findByIdAndDelete(id);
                res.json({ success: true, data: book})
            } catch (error) {
                res.json({ success: false, error: error, data: null})
            }
    
        default:
            break;
    }
}