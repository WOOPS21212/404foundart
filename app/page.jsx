'use client';

import { useEffect } from 'react';
import Script from 'next/script';

export default function HomePage() {
  useEffect(() => {
    // Initialize VANTA.WAVES when component mounts
    if (typeof window !== 'undefined' && window.VANTA) {
      const vantaEffect = window.VANTA.WAVES({
        el: document.querySelector('#my-background'),
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0x000000,
        shininess: 30,
        waveHeight: 15,
        waveSpeed: 1.0,
        zoom: 0.75
      });
      
      // Cleanup function
      return () => {
        if (vantaEffect) vantaEffect.destroy();
      };
    }
  }, []);

  return (
    <>
      {/* Background element for Vanta.js */}
      <div id="my-background"></div>
      
      <div className="content-wrapper">
        <div className="container">
          <h1>404found.art</h1>
          <p>Please wait, I'm building.</p>
          <div className="loading-indicator">
            <span className="dot" style={{ '--i': 1 }}></span>
            <span className="dot" style={{ '--i': 2 }}></span>
            <span className="dot" style={{ '--i': 3 }}></span>
          </div>
          <div className="coffee-button" style={{ marginTop: '30px' }}>
            <Script 
              type="text/javascript" 
              src="https://cdnjs.buymeacoffee.com/1.0.0/button.prod.min.js" 
              data-name="bmc-button" 
              data-slug="404found.art" 
              data-color="#FFDD00" 
              data-emoji=""  
              data-font="Cookie" 
              data-text="Buy me a coffee" 
              data-outline-color="#000000" 
              data-font-color="#000000" 
              data-coffee-color="#ffffff"
              strategy="afterInteractive"
            />
          </div>
          <div className="qr-code" style={{ marginTop: '20px' }}>
            <img src="/images/bmc_qr.png" alt="Buy Me a Coffee QR Code" style={{ maxWidth: '150px', borderRadius: '8px' }} />
          </div>
        </div>
      </div>
      
      {/* Load THREE.js and Vanta.js scripts */}
      <Script 
        src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r119/three.min.js"
        strategy="beforeInteractive"
      />
      <Script 
        src="https://cdn.jsdelivr.net/npm/vanta@0.5.21/dist/vanta.waves.min.js"
        strategy="beforeInteractive"
      />
    </>
  );
} 