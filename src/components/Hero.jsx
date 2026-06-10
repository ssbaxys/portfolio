import React, { useState, useEffect } from 'react';
import './Hero.css';

const Hero = () => {
  const [text, setText] = useState('');
  const fullText = "FULLSTACK_РАЗРАБОТЧИК";
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const roles = [
    "FULLSTACK РАЗРАБОТЧИК",
    "ПРОГРАММИСТ",
    "РЕШАЮ ПРОБЛЕМЫ",
    "АРХИТЕКТОР СИСТЕМ"
  ];

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, typingSpeed);

    return () => clearInterval(ticker);
  }, [text, isDeleting]);

  const tick = () => {
    let i = loopNum % roles.length;
    let fullRole = roles[i];
    let updatedText = isDeleting ? fullRole.substring(0, text.length - 1) : fullRole.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setTypingSpeed(prevSpeed => prevSpeed / 2);
    }

    if (!isDeleting && updatedText === fullRole) {
      setIsDeleting(true);
      setTypingSpeed(2000); // Wait before deleting
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setTypingSpeed(150);
    }
  };

  return (
    <section className="hero-section">
      <div className="container">
        <div className="hero-content">
          <p className="sys-status">[СИСТЕМА ОНЛАЙН] -- ПОДКЛЮЧЕНО</p>
          <h1 className="title-huge">
            Я <br />
            <span className="text-accent">{text}</span><span className="cursor">|</span>
          </h1>
          <p className="hero-desc">
            Пишу код на многих популярных языках. <br/>
            Строю системы с нуля. Никаких шаблонов, только чистая логика.
          </p>
          <div className="hero-actions">
            <a href="#journey" className="btn">НАЧАТЬ ПУТЬ()</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
