// Download the helper library from https://www.twilio.com/docs/node/install
// Find your Account SID and Auth Token at twilio.com/console
// and set the environment variables. See http://twil.io/secure
import dotenv from "dotenv";
dotenv.config();
const accountSid = process.env.TWILIO_ACCOUNT_SID!;
const authToken = process.env.TWILIO_AUTH_TOKEN!;

const client = require("twilio")(accountSid, authToken);

export const init = async () => {
  client.calls
    .create({
      url: "http://demo.twilio.com/docs/voice.xml",
      to: "+916230322486",
      from: "+918580732070",
    })
    .then((call: any) => console.log(call.sid, call))
    .catch((err: any) => console.log(accountSid));
};
