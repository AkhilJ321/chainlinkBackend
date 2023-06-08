import express from "express";
import { answerCall, handleRecording } from "../handlers/callHandler";
import { record } from "../handlers/testHandler";

const CallRouter = express.Router();

CallRouter.post("/answer", answerCall);
CallRouter.post("/handle-call", handleRecording);

CallRouter.get("/test", record);
export default CallRouter;
