import mongoose from "mongoose";
// @ts-ignore
import { Pro } from "../interface/product.interface.ts";
// @ts-ignore
import { proSchema} from "./prodSchema.ts";

const proModel = mongoose.model<Pro>("products",proSchema);

export  {proModel};