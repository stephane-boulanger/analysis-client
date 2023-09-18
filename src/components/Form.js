// /Users/stephane.npng/code/Projet Trainsight/analysis-client/src/components/Form.js
import { useState } from "react";
import styles from "./Form.module.css";

const Form = ({ onSubmit, loading }) => {
  const [verbatim, setVerbatim] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(verbatim);
  };

  const handleChange = (event) => {
    setVerbatim(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      onSubmit(verbatim);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles["fullWidth-form-group"]}>
        <label htmlFor="verbatim" className={styles.label}>
          Entrez le verbatim:
        </label>
        <textarea
          className={styles["fullWidth-form-control"]}
          id="verbatim"
          name="verbatim"
          rows="4"
          value={verbatim}
          onChange={handleChange}
          onKeyPress={handleKeyPress} // ajout de la gestion de la touche "Entrée"
          disabled={loading}
          required
        ></textarea>
      </div>
      <button type="submit" className="btn btn-primary" disabled={loading}>
        {loading ? "Analyse en cours..." : "Analyser"}
      </button>
    </form>
  );
};

export default Form;
