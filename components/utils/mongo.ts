import mongoose, { ConnectOptions } from "mongoose";

const url: any = process.env.DB;

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        } as ConnectOptions)
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error: any) {
        console.log(error);
        process.exit(1)
    }
}

export default connectDB;