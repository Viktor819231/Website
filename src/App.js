import React, { useRef } from 'react';

function App() {
  const audioRef = useRef(null);
  const joinDiscord = () => {
    if (audioRef.current) {
      audioRef.current.play().catch(() => {});
    }
    window.open('https://discord.gg/pzPqx9CFMG', '_blank');
  };
  return (
    <>
      <audio ref={audioRef} src="/audio/RobDougan-ClubbedToDeath.mp3" autoPlay loop />
      <div style={{
        minHeight: '100vh',
        background: '#222',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'monospace',
      }}>
        <div style={{
          border: '3px solid #00ff41',
          borderRadius: 12,
          boxShadow: '0 0 24px 2px #00ff41, 0 0 80px 2px #00ff4166',
          padding: '40px 32px 32px 32px',
          minWidth: 400,
          maxWidth: '90vw',
          textAlign: 'center',
          background: 'rgba(20,20,20,0.7)',
        }}>
          <div style={{
            fontSize: 48,
            fontWeight: 700,
            color: '#00ff41',
            marginBottom: 32,
            textShadow: '0 0 16px #00ff41, 0 0 2px #fff2',
            fontFamily: 'monospace',
            letterSpacing: 2,
            userSelect: 'none',
            whiteSpace: 'pre-line',
          }}>
            {`Civ 5 Multiplayer No\nquit`}
          </div>
          <button
            onClick={joinDiscord}
            style={{
              background: 'transparent',
              color: '#00ff41',
              border: '4px solid #00ff41',
              borderRadius: 6,
              fontFamily: 'monospace',
              fontSize: 32,
              padding: '12px 32px',
              cursor: 'pointer',
              fontWeight: 700,
              marginTop: 8,
              marginBottom: 8,
              boxShadow: '0 0 16px #00ff41',
              outline: 'none',
              textTransform: 'uppercase',
              letterSpacing: 2,
              transition: 'background 0.2s, color 0.2s, box-shadow 0.2s',
              textShadow: '0 0 8px #00ff41',
            }}
            onMouseOver={e => {
              e.target.style.background = '#00ff4122';
              e.target.style.color = '#fff';
              e.target.style.boxShadow = '0 0 32px #00ff41, 0 0 8px #00ff41';
            }}
            onMouseOut={e => {
              e.target.style.background = 'transparent';
              e.target.style.color = '#00ff41';
              e.target.style.boxShadow = '0 0 16px #00ff41';
            }}
          >
            JOIN DISCORD
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
