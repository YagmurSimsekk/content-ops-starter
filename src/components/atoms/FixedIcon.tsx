import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import logo from '/home/yagmur/content-ops-starter/src/components/layouts/DefaultBaseLayout/doctolib.svg';

const FixedIcon: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Check if the screen size is mobile
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Initial check
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <a
      href="https://www.doctolib.de/hautarzt/berlin/kivanc-semizel-berlin?pid=practice-371493#presentation"
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: 'fixed',
        right: '0px',
        top: '50%',
        transform: 'translateY(-50%)',
        textDecoration: 'none',
      }}
    >
      <div
        style={{
          padding: isMobile ? '10px 10px' : '20px 40px', // Adjust padding for mobile
          backgroundColor: '#87CEFA',
          color: 'white',
          borderRadius: '10px',
          fontSize: isMobile ? '12px' : '16px', // Adjust font size for mobile
          fontWeight: 'bold',
          textAlign: 'center',
          cursor: 'pointer',
          zIndex: 1000,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          maxWidth: '100%',
          boxSizing: 'border-box',
        }}
      >
        {/* Display each word on a new line */}
        <span style={{ display: 'block' }}>Termin</span>
        <span style={{ display: 'block' }}>online</span>
        <span style={{ display: 'block' }}>buchen</span>
        <span style={{ display: 'block' }}>bei</span>

        {/* Add the SVG Icon */}
        <Image src={logo} alt="Logo" width={isMobile ? 60 : 100} height={isMobile ? 40 : 60} style={{ marginTop: '10px' }} />
      </div>
    </a>
  );
};

export default FixedIcon;
