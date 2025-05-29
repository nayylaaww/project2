import { useEffect, useRef } from 'react';

const LightbotEmbed = () => {
  const iframeRef = useRef(null);

  // CSS Custom untuk modifikasi tampilan Lightbot
  const customCSS = `

    /* FULLSCREEN CANVAS */
    #canvasContainer {
      position: fixed !important;
      top: 0 !important;
      left: 0 !important;
      width: 100vw !important;
      height: 100vh !important;
      z-index: 1 !important;
      background: #000 !important;
    }

    /* NAVBAR BUTTONS DI ATAS */
    #buttonContainer {
      position: fixed !important;
      top: 10px !important;
      left: 50% !important;
      transform: translateX(-50%) !important;
      width: -200px !important;
      height: 50px !important;
      background: linear-gradient(135deg, rgba(0, 0, 0, 0.6), rgba(106, 13, 173, 0.6), rgba(0, 15, 27, 0.6)) !important;
      display: flex !important;
      gap: 8px !important;
      padding: 8px 30px !important;
      border-radius: 20px !important;
      z-index: 100 !important;
    }

    /* PANEL INSTRUKSI */
    #instructionsContainer {
      position: fixed !important;
      top: 50px !important;
      right: 10px !important;
      width: 350px !important;
      height: 300px !important;
      max-height: calc(65vh - 70px) !important;
      background: linear-gradient(135deg, rgba(0, 0, 0, 0.6), rgba(106, 13, 173, 0.6), rgba(0, 15, 27, 0.6)) !important;
      overflow: auto !important;
      z-index: 50 !important;
      box-shadow: 0 4px 12px rgba(0,0,0,0.2) !important;
  
    }

    /* PANEL PROGRAM */
    #programContainer {
      position: fixed !important;
      bottom: 30px !important;
      right: 10px !important;
      width: 350px !important;
      max-height: calc(65vh - 20px) !important;
      background: linear-gradient(135deg, rgba(0, 0, 0, 0.6), rgba(106, 13, 173, 0.6), rgba(0, 15, 27, 0.6)) !important;
      overflow: auto !important;
      z-index: 50 !important;
      box-shadow: 0 4px 12px rgba(0,0,0,0.2) !important;
    }

    /* ITEM LIST */
    #instructionsContainer li,
    #programContainer li {
      margin: 5px 0 !important;
      padding: 8px !important;
      border-radius: 4px !important;
    }

    /* RESPONSIVE */
    @media (max-width: 768px) {
      #instructionsContainer,
      #programContainer {
        width: 180px !important;
        font-size: 12px !important;
      }
      
      #buttonContainer {
        top: 5px !important;
        padding: 5px 10px !important;
      }
    }
  `;

  useEffect(() => {
    const iframe = iframeRef.current;
    
    iframe.onload = () => {
      // Inject CSS Custom
      const style = iframe.contentDocument.createElement('style');
      style.innerHTML = customCSS;
      iframe.contentDocument.head.appendChild(style);

      // Handle Resize Canvas
      iframe.contentWindow.eval(`
        function resizeGame() {
          const canvas = document.getElementById('gameCanvas');
          canvas.width = window.innerWidth;
          canvas.height = window.innerHeight;
          if (window.gameResize) gameResize();
        }
        
        // Panggil pertama kali
        resizeGame();
        
        // Setup event listener untuk resize
        window.addEventListener('resize', resizeGame);
        
        // Bersihkan event listener saat komponen unmount
        window.cleanupLightbotResize = () => {
          window.removeEventListener('resize', resizeGame);
        };
      `);
    };

    // Cleanup function
    return () => {
      if (iframe.contentWindow) {
        iframe.contentWindow.eval(`
          if (window.cleanupLightbotResize) {
            cleanupLightbotResize();
          }
        `);
      }
    };
  }, []);
  
  return (
    <iframe
      ref={iframeRef}
      src="/lightbot/index.html"
      style={{ 
        width: '638%',
        height: '100vh',
        border: 'none',
        display: 'block'
      }}
      title="Lightbot Game"
      allowFullScreen
    />
  );
};

export default LightbotEmbed;