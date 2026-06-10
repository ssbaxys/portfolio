import React from 'react';
import './AiSkills.css';

const AiSkills = () => {
  return (
    <section id="ai-skills" className="ai-section">
      <div className="container">
        <h2 className="section-title">{'['} AI MASTERY {']'}</h2>
        
        <div className="ai-grid">
          <div className="ai-info">
            <h3 className="ai-subtitle">// СИНЕРГИЯ С ИСКУССТВЕННЫМ ИНТЕЛЛЕКТОМ</h3>
            <p className="ai-text">
              Я не просто пишу код — я оркестрирую разработку с помощью передовых нейросетей. 
              Я в совершенстве освоил ИИ-инструментарий и интегрировал его в свой рабочий процесс, 
              что позволяет мне писать сложную логику и строить архитектуры с невероятной скоростью.
            </p>
            <p className="ai-text highlight-text">
              В своей работе я использую только самые продвинутые модели:
            </p>
            
            <div className="models-container">
              <div className="model-card">
                <span className="model-name">Claude Opus 4.8</span>
                <span className="model-status">[ ОСВОЕНО ]</span>
              </div>
              <div className="model-card">
                <span className="model-name">Gemini 3.1 Pro</span>
                <span className="model-status">[ ОСВОЕНО ]</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AiSkills;
