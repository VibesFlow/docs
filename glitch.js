// VIBESFLOW - ACID ANARCHO-CHAOTIC GLITCH EFFECTS
// DECENTRALIZED FREQUENCIES // COLLECTIVE RESONANCE // AUTONOMOUS WAVES
// IDENTICAL to SplashScreen.tsx glitch effects

(function() {
  'use strict';

  // VibesFlow Brand Colors - EXACT match to app/theme/index.ts
  const COLORS = {
    primary: '#00ff41',    // Neon green
    secondary: '#ff00a0',  // Hot pink
    accent: '#0cf',        // Cyan
    background: '#000000',
    backgroundLight: '#0a0a0a',
    backgroundSecondary: '#1a1a1a'
  };

  // Generate random glitch lines IDENTICAL to SplashScreen generateGlitchLines
  function generateGlitchLines(count = 15) {
    const lines = [];
    const windowHeight = window.innerHeight;
    const windowWidth = window.innerWidth;
    
    for (let i = 0; i < count; i++) {
      const y = Math.random() * windowHeight;
      const width = Math.random() * 100 + 50;
      const opacity = Math.random() * 0.5 + 0.1;
      // EXACT color logic from SplashScreen line 158
      const color = i % 3 === 0 ? COLORS.primary : i % 3 === 1 ? COLORS.secondary : COLORS.accent;
      
      lines.push({ y, width, opacity, color });
    }
    
    return lines;
  }

  // Create glitch line elements - matching SplashScreen glitchLine styling
  function createGlitchLines() {
    const existingLines = document.querySelectorAll('.vf-glitch-line');
    existingLines.forEach(line => line.remove());
    
    const lines = generateGlitchLines();
    
    lines.forEach((line, index) => {
      const element = document.createElement('div');
      element.className = 'vf-glitch-line';
      // IDENTICAL styling to SplashScreen glitchLine styles
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

  // Add CSS animations - IDENTICAL to SplashScreen animation logic
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
      
      /* CHAOS BACKGROUND GRADIENTS - IDENTICAL to SplashScreen gradientBackground */
      .vf-chaos-bg-gradient {
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
      }
      
      @keyframes backgroundGlitch {
        0%, 100% { opacity: 0.1; }
        50% { opacity: 0.3; }
      }
      
      /* CHAOS LINES - IDENTICAL to SplashScreen chaos lines */
      .vf-chaos-bg-lines {
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
      }
      
      @keyframes chaosLines {
        0%, 100% { transform: translateX(0px) translateY(0px); opacity: 0.1; }
        25% { transform: translateX(2px) translateY(-1px); opacity: 0.3; }
        50% { transform: translateX(-1px) translateY(2px); opacity: 0.2; }
        75% { transform: translateX(1px) translateY(-2px); opacity: 0.25; }
      }
    `;
    
    document.head.appendChild(style);
  }

  // GlitchText component functionality - matching app's GlitchText component
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
    
    // Apply glitch effect to headers - matching app's header glitch behavior
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

  // Initialize chaos background effects - IDENTICAL to SplashScreen background
  function initializeChaosBackground() {
    // Remove existing chaos elements
    const existingChaos = document.querySelectorAll('.vf-chaos-bg-gradient, .vf-chaos-bg-lines');
    existingChaos.forEach(el => el.remove());
    
    // Only add chaos effects in dark mode (matching CSS logic)
    const isDarkMode = document.documentElement.getAttribute('data-theme') !== 'light';
    if (!isDarkMode) return;
    
    // Create chaos background gradient overlay - IDENTICAL to SplashScreen
    const chaosOverlay = document.createElement('div');
    chaosOverlay.className = 'vf-chaos-bg-gradient';
    document.body.appendChild(chaosOverlay);
    
    // Create chaos lines overlay - IDENTICAL to SplashScreen
    const chaosLines = document.createElement('div');
    chaosLines.className = 'vf-chaos-bg-lines';
    document.body.appendChild(chaosLines);
  }

  // BRANDING text effects - matching SplashScreen manifesto
  function initializeBrandingEffects() {
    // Find elements containing BRANDING text
    const brandingElements = document.querySelectorAll('*');
    const brandingTexts = [
      'DECENTRALIZED FREQUENCIES',
      'COLLECTIVE RESONANCE', 
      'AUTONOMOUS WAVES',
      'SYNTHESIZE',
      'SYNCHRONIZE',
      'TRANSCEND',
      'VIBESFLOW'
    ];
    
    brandingElements.forEach(element => {
      const text = element.textContent || element.innerText;
      if (brandingTexts.some(brandingText => text.includes(brandingText))) {
        // Add special styling for branding elements
        element.style.textTransform = 'uppercase';
        element.style.letterSpacing = '3px';
        element.style.fontWeight = '900';
        
        // Occasional glitch effect on branding text
        setInterval(() => {
          if (Math.random() < 0.03) { // 3% chance
            applyGlitchToElement(element);
          }
        }, 3000);
      }
    });
  }

  // Theme change handler - disable/enable effects based on theme
  function handleThemeChange() {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'attributes' && mutation.attributeName === 'data-theme') {
          const isDarkMode = document.documentElement.getAttribute('data-theme') !== 'light';
          if (isDarkMode) {
            initializeChaosBackground();
          } else {
            // Remove chaos effects in light mode for readability
            const chaosElements = document.querySelectorAll('.vf-chaos-bg-gradient, .vf-chaos-bg-lines');
            chaosElements.forEach(el => el.remove());
          }
        }
      });
    });
    
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme']
    });
  }

  // Initialize all effects - matching SplashScreen initialization pattern
  function initialize() {
    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', initialize);
      return;
    }
    
    console.log('🎵 VibesFlow glitch effects initializing...');
    
    addGlitchStyles();
    createGlitchLines();
    initializeChaosBackground();
    initializeGlitchText();
    initializeBrandingEffects();
    handleThemeChange();
    
    // Reinitialize on route changes (for SPA behavior)
    let lastUrl = location.href;
    new MutationObserver(() => {
      const url = location.href;
      if (url !== lastUrl) {
        lastUrl = url;
        setTimeout(() => {
          createGlitchLines();
          initializeGlitchText();
          initializeBrandingEffects();
        }, 500);
      }
    }).observe(document, { subtree: true, childList: true });
    
    // Recreate glitch lines on resize - matching SplashScreen responsive behavior
    window.addEventListener('resize', () => {
      setTimeout(createGlitchLines, 100);
    });
    
    // Periodic refresh of glitch lines - maintain chaos
    setInterval(createGlitchLines, 10000);
    
    console.log('✅ VibesFlow chaos effects activated');
  }

  // Start initialization
  initialize();
  
})();