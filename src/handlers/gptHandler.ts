import { Configuration, OpenAIApi } from "openai";
import { Request, Response } from "express";
import dotenv from "dotenv";
dotenv.config();

const API_KEY: string = process.env.OPENAI_API_KEY || "";

const configuration = new Configuration({
  apiKey: API_KEY,
});

const openai = new OpenAIApi(configuration);

export const sendReq = async (req: Request, res: Response) => {
  const { transcribed_text }: { transcribed_text: string } = req.body;

  if (!transcribed_text) {
    res.status(400).json({ error: "Transcribed text is required" });
    return;
  }

  console.log("Sending request to GPT-3");

  const model_engine = "text-davinci-003";
  const temperature = 0.5;
  const max_tokens = 300;

  const prompt = `What is the emergency type, location, and priority of the following message. Your response must be in the following JSON format: {name, location, emergency_type, priority, reply_msg}. Available emergency_types=['Ambulance', 'NSG', 'Police', 'Rescue team', 'Fire brigade', 'Forest ranger']. Available priority=['high', 'medium', 'low']. Prompt: ${transcribed_text}`;

  try {
    const response = await openai.createCompletion({
      model: model_engine,
      prompt,
      temperature,
      max_tokens,
    });

    //   const completionText = response.choices[0].text;
    const completionText = response.data.choices[0].text;

    res.json({ result: completionText });
  } catch (error) {
    console.error("OpenAI API request failed:", error);
    res.status(500).json({ error: "Failed to process the request" });
  }
};
