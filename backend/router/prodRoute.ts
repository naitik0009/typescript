import express from "express";
//@ts-ignore
import { getAll,postProd } from "../controller/products.controller.ts";

const prodRoute = express.Router(); 

prodRoute.get("/all-products",getAll).post("/all-products",postProd);

export  {prodRoute};