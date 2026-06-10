import React, { useEffect, useRef } from 'react';
import './MatrixBackground.css';

const MatrixBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    setCanvasSize();

    const characters = '01';
    const fontSize = 16;
    let columns = Math.floor(canvas.width / fontSize);
    let drops = [];

    for (let x = 0; x < columns; x++) {
      drops[x] = Math.random() * canvas.height; // Randomize initial vertical position
    }

    const draw = () => {
      // Fading effect
      ctx.fillStyle = 'rgba(10, 10, 10, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = '#00ff41'; // Accent green color
      ctx.font = fontSize + 'px monospace';

      for (let i = 0; i < drops.length; i++) {
        const text = characters.charAt(Math.floor(Math.random() * characters.length));
        
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        drops[i]++;
      }
    };

    const intervalId = setInterval(draw, 50);

    const handleResize = () => {
      setCanvasSize();
      const newColumns = Math.floor(canvas.width / fontSize);
      if (newColumns > columns) {
        for (let x = columns; x < newColumns; x++) {
          drops[x] = Math.random() * canvas.height;
        }
      } else {
        drops.length = newColumns;
      }
      columns = newColumns;
    };

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const fullHeight = document.documentElement.scrollHeight;
      
      const maxScroll = fullHeight - windowHeight;
      let opacity = 0.12; 

      if (maxScroll > 0) {
        const scrollPercent = scrollTop / maxScroll;
        // Start fading out when scrolled past 40% of the page
        if (scrollPercent > 0.4) {
          // map 0.4 -> 1.0 to 1.0 -> 0.0
          const fadeFactor = 1 - ((scrollPercent - 0.4) * (1 / 0.6));
          opacity = 0.12 * Math.max(fadeFactor, 0);
        }
      }
      
      if (canvasRef.current) {
        canvasRef.current.style.opacity = opacity.toFixed(3);
      }
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);
    
    // Initial call
    handleScroll();

    return () => {
      clearInterval(intervalId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return <canvas ref={canvasRef} className="matrix-canvas"></canvas>;
};

export default MatrixBackground;
