import React from 'react';

interface QuestionFormProps {
  questions: string[];
  onResponse: (response: boolean) => void;
  onSubmit: (e: React.FormEvent) => void;
}

const QuestionForm: React.FC<QuestionFormProps> = ({
  questions,
  onResponse,
  onSubmit
}) => {
  return (
    <form onSubmit={onSubmit}>
      {questions.map((question, index) => (
        <div key={index}>
          <p>{question}</p>
          <button type="button" onClick={() => onResponse(true)}>Yes</button>
          <button type="button" onClick={() => onResponse(false)}>No</button>
        </div>
      ))}
      <button type="submit">Submit</button>
    </form>
  );
};

export default QuestionForm;
