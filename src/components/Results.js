// /Users/stephane.npng/code/Projet Trainsight/analysis-client/src/components/Results.js

import styles from "./Results.module.css";

const Results = ({ sentiment }) => {
  return (
    <div>
      {sentiment && (
        <div className="alert alert-primary" role="alert">
          Sentiment: {sentiment}
        </div>
      )}
    </div>
  );
};

export default Results;
