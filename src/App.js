import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';

function App() {
  const renderQuestions = data.map((question) => {
    return (<SingleQuestion key={question.id} {...question}></SingleQuestion>)
  })

  return (
    <main className='container'>
      <h3>Questions And Answer</h3>
      <section className='info'>
        {renderQuestions}
      </section>
    </main>
  );
}

export default App;
