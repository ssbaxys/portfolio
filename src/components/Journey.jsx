import React from 'react';
import './Journey.css';

const Journey = () => {
  return (
    <section id="journey" className="journey-section">
      <div className="container">
        <h2 className="section-title">В РАЗРАБОТКЕ</h2>
        
        <div className="wip-container">
          <div className="wip-banner">
            <div className="wip-tape"></div>
            <h3>// ТЕКУЩАЯ КОМПИЛЯЦИЯ...</h3>
            <p>
              Я активно работаю над несколькими приватными проектами и глубоко изучаю сложные архитектуры ПО. 
              Мой фокус — написание чистого и масштабируемого кода, а не штамповка сырых шаблонов.
            </p>
            <div className="loading-bar">
              <div className="loading-progress"></div>
            </div>
            <p className="loading-text">Загрузка будущих проектов: 42%</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;
