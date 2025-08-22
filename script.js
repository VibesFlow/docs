// VIBESFLOW - ACID ANARCHO-CHAOTIC GLITCH EFFECTS
// DECENTRALIZED FREQUENCIES // COLLECTIVE RESONANCE // AUTONOMOUS WAVES

(function() {
  'use strict';

  // VibesFlow Brand Colors
  const COLORS = {
    primary: '#00ff41',
    secondary: '#ff00a0',
    accent: '#0cf',
    background: '#000000',
    backgroundLight: '#0a0a0a'
  };

  // Generate random glitch lines similar to SplashScreen
  function generateGlitchLines(count = 15) {
    const lines = [];
    const windowHeight = window.innerHeight;
    const windowWidth = window.innerWidth;
    
    for (let i = 0; i < count; i++) {
      const y = Math.random() * windowHeight;
      const width = Math.random() * 100 + 50;
      const opacity = Math.random() * 0.5 + 0.1;
      const color = i % 3 === 0 ? COLORS.primary : i % 3 === 1 ? COLORS.secondary : COLORS.accent;
      
      lines.push({ y, width, opacity, color });
    }
    
    return lines;
  }

  // Create glitch line elements
  function createGlitchLines() {
    const existingLines = document.querySelectorAll('.vf-glitch-line');
    existingLines.forEach(line => line.remove());
    
    const lines = generateGlitchLines();
    
    lines.forEach((line, index) => {
      const element = document.createElement('div');
      element.className = 'vf-glitch-line';
      element.style.cssText = `
        position: fixed;
        top: ${line.y}px;
        left: ${Math.random() * window.innerWidth}px;
        width: ${line.width}px;
        height: 1px;
        background-color: ${line.color};
        opacity: ${line.opacity};
        z-index: 2;
        pointer-events: none;
        animation: glitchMove ${3 + Math.random() * 2}s infinite ease-in-out;
        animation-delay: ${Math.random() * 2}s;
      `;
      
      document.body.appendChild(element);
    });
  }

  // Add CSS animations
  function addGlitchStyles() {
    if (document.getElementById('vf-glitch-styles')) return;
    
    const style = document.createElement('style');
    style.id = 'vf-glitch-styles';
    style.textContent = `
      @keyframes glitchMove {
        0%, 100% { 
          transform: translateX(0px) translateY(0px); 
          opacity: var(--opacity, 0.1);
        }
        25% { 
          transform: translateX(2px) translateY(-1px); 
          opacity: calc(var(--opacity, 0.1) * 3);
        }
        50% { 
          transform: translateX(-1px) translateY(2px); 
          opacity: calc(var(--opacity, 0.1) * 2);
        }
        75% { 
          transform: translateX(1px) translateY(-2px); 
          opacity: calc(var(--opacity, 0.1) * 2.5);
        }
      }
      
      @keyframes textGlitchEffect {
        0%, 90%, 100% {
          transform: translate(0);
        }
        20% {
          transform: translate(-2px, 2px);
        }
        40% {
          transform: translate(-2px, -2px);
        }
        60% {
          transform: translate(2px, 2px);
        }
        80% {
          transform: translate(2px, -2px);
        }
      }
      
      .vf-glitch-text {
        animation: textGlitchEffect 0.3s ease-in-out;
      }
      
      .vf-glitch-line {
        --opacity: ${Math.random() * 0.5 + 0.1};
      }
    `;
    
    document.head.appendChild(style);
  }

  // GlitchText component functionality
  function initializeGlitchText() {
    const glitchChars = '!@#$%^&*()_+-=[]{}|;:,.<>?~`';
    
    function createGlitchText(originalText) {
      return originalText
        .split('')
        .map(char => {
          if (char === ' ') return char;
          const shouldGlitch = Math.random() < 0.3;
          if (shouldGlitch) {
            return glitchChars[Math.floor(Math.random() * glitchChars.length)];
          }
          return char;
        })
        .join('');
    }
    
    function applyGlitchToElement(element) {
      const originalText = element.textContent || element.innerText;
      if (!originalText) return;
      
      if (Math.random() < 0.1) { // 10% chance to glitch
        element.classList.add('vf-glitch-text');
        
        const glitchSequence = [
          createGlitchText(originalText),
          createGlitchText(originalText),
          originalText
        ];
        
        let step = 0;
        const glitchInterval = setInterval(() => {
          element.textContent = glitchSequence[step];
          step++;
          
          if (step >= glitchSequence.length) {
            clearInterval(glitchInterval);
            element.classList.remove('vf-glitch-text');
          }
        }, 80);
        
        setTimeout(() => {
          clearInterval(glitchInterval);
          element.textContent = originalText;
          element.classList.remove('vf-glitch-text');
        }, 240);
      }
    }
    
    // Apply glitch effect to headers
    function startGlitchEffects() {
      const headers = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
      
      setInterval(() => {
        headers.forEach(header => {
          if (Math.random() < 0.05) { // 5% chance per header
            applyGlitchToElement(header);
          }
        });
      }, 2000);
    }
    
    startGlitchEffects();
  }

  // Initialize chaos background effects
  function initializeChaosBackground() {
    // Remove existing chaos elements
    const existingChaos = document.querySelectorAll('.vf-chaos-bg');
    existingChaos.forEach(el => el.remove());
    
    // Create chaos background overlay
    const chaosOverlay = document.createElement('div');
    chaosOverlay.className = 'vf-chaos-bg';
    chaosOverlay.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: 
        linear-gradient(90deg, transparent 98%, rgba(0, 255, 65, 0.1) 100%),
        linear-gradient(180deg, transparent 98%, rgba(255, 0, 160, 0.1) 100%);
      pointer-events: none;
      z-index: 1;
      animation: backgroundGlitch 3s infinite;
    `;
    
    // Create chaos lines overlay
    const chaosLines = document.createElement('div');
    chaosLines.className = 'vf-chaos-bg';
    chaosLines.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: 
        repeating-linear-gradient(
          90deg,
          transparent,
          transparent 98px,
          rgba(0, 255, 65, 0.05) 100px,
          transparent 102px
        ),
        repeating-linear-gradient(
          0deg,
          transparent,
          transparent 198px,
          rgba(0, 204, 255, 0.05) 200px,
          transparent 202px
        );
      pointer-events: none;
      z-index: 1;
      animation: chaosLines 5s infinite ease-in-out;
    `;
    
    document.body.appendChild(chaosOverlay);
    document.body.appendChild(chaosLines);
  }

  // Initialize all effects
  function initialize() {
    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', initialize);
      return;
    }
    
    addGlitchStyles();
    createGlitchLines();
    initializeChaosBackground();
    initializeGlitchText();
    
    // Reinitialize on route changes (for SPA behavior)
    let lastUrl = location.href;
    new MutationObserver(() => {
      const url = location.href;
      if (url !== lastUrl) {
        lastUrl = url;
        setTimeout(() => {
          createGlitchLines();
          initializeGlitchText();
        }, 500);
      }
    }).observe(document, { subtree: true, childList: true });
    
    // Recreate glitch lines on resize
    window.addEventListener('resize', () => {
      setTimeout(createGlitchLines, 100);
    });
    
    // Periodic refresh of glitch lines
    setInterval(createGlitchLines, 10000);
  }

  // Start initialization
  initialize();
  
})();
