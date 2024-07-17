import React, { useState, useEffect } from 'react';
import { questions } from './questions/questions';
import { saveScore, getScores } from './utils/storage';
import QuestionForm from './components/QuestionForm';
import Result from './components/Result';

const App: React.FC = () => {
  const [responses, setResponses] = useState<boolean[]>([]);
  const [score, setScore] = useState<number | null>(null);
  const [averageScore, setAverageScore] = useState<number | null>(null);

  useEffect(() => {
    const fetchScores = async () => {
      const scores = await getScores();
      if (scores.length > 0) {
        const avgScore = scores.reduce((a, b) => a + b, 0) / scores.length;
        setAverageScore(avgScore);
      }
    };
    fetchScores();
  }, []);

  const handleResponse = (response: boolean) => {
    setResponses((prevResponses) => [...prevResponses, response]);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const yesCount = responses.filter(Boolean).length;
    const calculatedScore = (yesCount / questions.length) * 100;
    
    setScore(calculatedScore);
    
    await saveScore(calculatedScore);
  };

  return (
    <div className="App">
      <h1>TODO</h1>
      {score === null ? (
        <QuestionForm
          questions={questions}
          onResponse={handleResponse}
          onSubmit={handleSubmit}
        />
      ) : (
        <Result score={score} averageScore={averageScore} />
      )}
    </div>
  );
};

export default App;
