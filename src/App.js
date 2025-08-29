import React, { useRef } from 'react';

function App() {
  const audioRef = useRef(null);
  const joinDiscord = () => {
    if (audioRef.current) {
      audioRef.current.play().catch(() => {});
    }
    window.open('https://discord.gg/nwcrh7uG9y', '_blank');
  };
  return (
    <>
      <audio ref={audioRef} src="/audio/RobDougan-ClubbedToDeath.mp3" autoPlay loop />
      <div style={{
        minHeight: '100vh',
        background: '#393939',
        color: '#bdbdbd',
        fontFamily: 'Segoe UI, Arial, sans-serif',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <div style={{
          fontSize: 72,
          fontWeight: 700,
          letterSpacing: 2,
          color: '#444',
          marginBottom: 0,
          textAlign: 'center',
          textTransform: 'uppercase',
          opacity: 0.7,
          textShadow: '0 0 24px #000, 0 0 2px #fff2',
          userSelect: 'none',
        }}>
          CIV 5 Multiplayer
  </div>
        <div style={{
          fontSize: 38,
          fontWeight: 700,
          color: '#888',
          letterSpacing: 2,
          marginBottom: 40,
          textAlign: 'center',
          textTransform: 'uppercase',
          opacity: 0.5,
          userSelect: 'none',
        }}>
          [NO QUIT]
        </div>
        <div style={{
          background: '#232323',
          borderRadius: 8,
          boxShadow: '0 2px 16px #0008',
          padding: '32px 36px',
          margin: '0 auto',
          minWidth: 320,
          maxWidth: '90vw',
          textAlign: 'center',
        }}>
          <button
            onClick={joinDiscord}
            style={{
              background: '#444',
              color: '#bbb',
              border: 'none',
              borderRadius: 4,
              fontFamily: 'inherit',
              fontSize: 22,
              padding: '12px 48px',
              cursor: 'pointer',
              fontWeight: 700,
              marginTop: 8,
              boxShadow: '0 2px 8px #0003',
              transition: 'background 0.2s, color 0.2s',
              outline: 'none',
              textTransform: 'uppercase',
              letterSpacing: 2,
            }}
            onMouseOver={e => {
              e.target.style.background = '#222';
              e.target.style.color = '#fff';
            }}
            onMouseOut={e => {
              e.target.style.background = '#444';
              e.target.style.color = '#bbb';
            }}
          >
            Join Discord
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
