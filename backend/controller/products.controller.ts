import { Request,Response } from "express";
//@ts-ignore
import { Pro } from "../interface/product.interface";
//@ts-ignore
import {proModel} from "../models/products.ts";
const getAll = async (request:Request,response:Response)=>{
    const data = await proModel.find();
    console.log(data);
    response.status(200).json(data);
};

const postProd = async (request:Request,response:Response)=>{
   try {
    const {name,price,image,inStock,rating} = request.body;
    const create = await proModel.create({
        name:name,
        price:price,
        image:image,
        isStock:inStock,
        rating:rating,
    });
    response.status(200).json({msg:"data uploaded"});
   } catch (error) {
    response.status(500).json({msg:error});
   }
};

export {getAll,postProd};