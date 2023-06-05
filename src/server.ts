import express, { Request, Response } from "express";
import router from "./routes";
import morgan from "morgan";
import dotenv from "dotenv";

dotenv.config();

console.log(process.env.TWILIO_ACCOUNT_SID);

const app = express();
const port = 3000;

app.use(morgan("dev"));
app.use(express.json());

app.use("/api", router);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
