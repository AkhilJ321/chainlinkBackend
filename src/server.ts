import express, { Request, Response } from "express";
import router from "./routes";
import morgan from "morgan";
import dotenv from "dotenv";
const port = 3000;

dotenv.config();

const app = express();
app.set("view engine", "ejs");
app.use(express.static("public"));

app.use(morgan("dev"));
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.render("main");
});

app.use("/api", router);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
