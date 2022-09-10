import mongoose from "mongoose";
//NodeJS.Process.env: NodeJS.ProcessEnv
export async function connect() {
    const url = process.env.MONGO_URI;
    try {
        await mongoose.connect(url);
    }
    catch (error) {
        console.log(error);
    }
}
