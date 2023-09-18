//Users/stephane.npng/code/Projet Trainsight/analysis-client/src/components/Analysis.js
// src/components/Analysis.js
import { useState } from "react";
import Form from "./Form";
import Results from "./Results";
import axios from "axios";

const Analysis = () => {
  const [sentiment, setSentiment] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const analyzeSentiment = async (text) => {
    try {
      setLoading(true);
      const response = await axios.post("/api/analyzeSentiment", {
        verbatim: text,
      });
      setSentiment(response.data.sentiment);
      setError(null); // Réinitialise l'erreur si la demande réussit
      console.log("Sentiment analysis response:", response.data);
    } catch (error) {
      if (error.response && error.response.status === 429) {
        setError("Rate limit exceeded. Please try again later.");
      } else {
        console.error("Error analyzing sentiment:", error);
        setError("An error occurred. Please try again later.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {error && <div className="alert alert-danger">{error}</div>}{" "}
      {/* Affiche le message d'erreur */}
      <Form onSubmit={analyzeSentiment} loading={loading} />
      <Results sentiment={sentiment} />
    </>
  );
};

export default Analysis;
