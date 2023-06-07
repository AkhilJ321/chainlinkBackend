import express from "express";
import CallRouter from "./call";
import { sendReq } from "../handlers/gptHandler";

const router = express.Router();

router.use("/call", CallRouter);
router.post("/gpt", sendReq);

export default router;
