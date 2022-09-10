import express from "express";
import dotenv from "dotenv";
dotenv.config();
// @ts-ignore
import { connect } from "../database/connect.ts";
// @ts-ignore
import { prodRoute } from "../router/prodRoute.ts";
const port = process.env.PORT;
const app = express();
app.use(express.json());
app.get("/", (request, response) => {
    response.send("hello world");
});
app.use("/api/v1", prodRoute);
app.listen(port, async () => {
    connect() ? console.log("connected to server and database") : console.log("not connected to server and database");
});
