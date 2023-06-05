import express from "express";
import CallRouter from "./call";

const router = express.Router();

router.use("/call", CallRouter);

export default router;
