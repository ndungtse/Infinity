import { NextApiRequest, NextApiResponse } from "next";
import User from "../../../components/utils/models/userModel";
import connectDB from "../../../components/utils/mongo";


export default async function userHandler(req: NextApiRequest, res: NextApiResponse) {
    await connectDB();
    const { id } = req.query;
    const method = req.method;

    switch (method) {
        case "GET":
            const user = await User.findById(id);
            res.status(200).json({ message: "Success", data: user });
            break;
        case "PUT":
            const { name, email, password } = req.body;
            const user1 = await User.findByIdAndUpdate(id, {
                name,
                email,
                password
            });
            res.status(200).json({ message: "Success", data: user1 });
            break;
        case "DELETE":
            const user2 = await User.findByIdAndDelete(id);
            res.status(200).json({ message: "Success", data: user2 });
            break;
        default:
            res.status(400).json({ message: "Method not allowed" });
            break;
        }
}