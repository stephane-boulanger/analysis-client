// src/pages/api/analyzeSentiment.js
import openai from "../../services/openai";

export default async function handler(req, res) {
  const { verbatim } = req.body;

  try {
    const response = await openai.post("", {
      prompt: `Analyze the sentiment of the following text: "${verbatim}". The sentiment is: `,
      temperature: 0.5,
      max_tokens: 1, // Réduit à 1 pour obtenir une réponse courte pour le test
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    });

    console.log("OpenAI API response:", response.data);

    const sentiment = response.data.choices[0].text.trim();
    res.status(200).json({ sentiment });
  } catch (error) {
    if (error.response && error.response.status === 429) {
      console.error("Rate limit exceeded. Please try again later.");
      res.status(429).json({
        sentiment: "Error",
        error: "Rate limit exceeded. Please try again later.",
      });
      alert("Rate limit exceeded. Please try again later."); // Ajout de l'alerte
    } else {
      console.error("Error analyzing sentiment:", error);
      res.status(500).json({ sentiment: "Error", error: error.message });
    }
  }
}
