import React from 'react';

interface ResultProps {
  score: number;
  averageScore: number | null;
}

const Result: React.FC<ResultProps> = ({ score, averageScore }) => {
  return (
    <div>
      <h2>Score: {score.toFixed(2)}</h2>
      {averageScore !== null && (
        <h3>Average Score: {averageScore.toFixed(2)}</h3>
      )}
    </div>
  );
};

export default Result;
