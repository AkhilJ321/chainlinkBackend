import express from "express";
import { answerCall, handleRecording } from "../handlers/callHandler";

const CallRouter = express.Router();

CallRouter.post("/answer", answerCall);
CallRouter.post("/handle-call", handleRecording);

export default CallRouter;
