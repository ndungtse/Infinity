import { NextApiRequest, NextApiResponse } from 'next';
import jwt from 'jsonwebtoken';

const verifyToken = async (req: any, _res: NextApiResponse) => {
    const token = req.headers.authorization;
    if (!token) {
        _res.status(403).json({ message: "No token provided" });
        return
    }
    try {
            const decoded = ((secret = process.env.JWT_SECRET || 'unknown') => {
                jwt.verify(token, secret);
            })();
            console.log(decoded);
            req.user = decoded;
            return true
    } catch (err) {
        console.log(err);
        _res.status(403).json({ message: "Invalid token" });
        return false
    }
}

export default verifyToken