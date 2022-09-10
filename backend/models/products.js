import mongoose from "mongoose";
// @ts-ignore
import { proSchema } from "./prodSchema.ts";
const proModel = mongoose.model("products", proSchema);
export { proModel };
