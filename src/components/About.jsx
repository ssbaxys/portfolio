import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2 className="section-title">{'<'}ОБО МНЕ{' />'}</h2>
        
        <div className="about-grid">
          <div className="about-content">
            <p className="about-text">
              > СТАТУС: ИНИЦИАЛИЗАЦИЯ... <br/>
              > ОПЫТ: 2 ГОДА <br/>
              > ЗАВЕРШЕННЫЕ ПРОЕКТЫ: null (В РАЗРАБОТКЕ)
            </p>
            <p className="about-description">
              Я разработчик, который верит в освоение фундаментальных принципов. 
              За последние 2 года я погрузился в изучение и написание кода на многих популярных языках.
              Я фокусируюсь на архитектуре, логике и механике, скрытой под капотом.
            </p>
            <div className="terminal-box">
              <div className="terminal-header">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
              </div>
              <div className="terminal-body">
                <code>
                  $ whoami<br/>
                  Fullstack Разработчик<br/>
                  <br/>
                  $ cat mission.txt<br/>
                  "Создавать надежное, масштабируемое и нешаблонное ПО."
                </code>
              </div>
            </div>
          </div>
          
          <div className="about-visual float-anim">
            <div className="cube-wrapper">
              {/* Simple CSS Cube or Abstract Shape */}
              <div className="abstract-shape"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
