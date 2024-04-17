import React, { useState, useEffect } from 'react';

function CustomCursor() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateCursorPosition = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateCursorPosition);

    return () => {
      window.removeEventListener('mousemove', updateCursorPosition);
    };
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        left: cursorPosition.x,
        top: cursorPosition.y,
        width: '24px',
        height: '24px',
        borderRadius: '50%',
        background: 'rgba(0, 0, 0, 0.5)',
        pointerEvents: 'none', // Ensure the cursor doesn't interfere with underlying elements
        zIndex: 9999, // Ensure the cursor is above all other elements
      }}
    />
  );
}

export default CustomCursor;
