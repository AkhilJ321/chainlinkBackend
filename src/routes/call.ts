import express from "express";
import { answerCall, handleRecording } from "../handlers/callHandler";
import { init } from "../handlers/testHandler";

const CallRouter = express.Router();

CallRouter.post("/answer", answerCall);
CallRouter.post("/handle-call", handleRecording);
CallRouter.get("/test", init);

export default CallRouter;
