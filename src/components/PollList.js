import React from 'react';

//Component
import Poll from './Poll';

const PollList = ({ questions, users }) => {
  return (
    <>
      {questions && (
        <div className="questions-tab">
          {Object.keys(questions).length === 0 ? (
            <h4>No questions!</h4>
          ) : (
            questions.map((q) => {
              const author = users[q.author];
              return <Poll key={q.id} question={q} author={author} />;
            })
          )}
        </div>
      )}
    </>
  );
};

export default PollList;
