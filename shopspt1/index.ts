/*
This is the minimum amount of code to run the server.
You can start from here
*/
import { shopRouter } from "./shoproute";
import express, { Application, Request, Response } from "express";


const app: Application = express();

//whatever port makes sense for you
const port = 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/shops", shopRouter);

app.listen(port, (): void => {
  console.log(`Listening on port ${port}`);
});
