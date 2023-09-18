///Users/stephane.npng/code/Projet Trainsight/analysis-client/src/services/openai.js

import axios from "axios";

const openai = axios.create({
  baseURL: "https://api.openai.com/v1/engines/gpt-3.5-turbo-16k/completions", // Mettez à jour la base URL avec gpt-3.5-turbo
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer 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`,
  },
});

export default openai;
