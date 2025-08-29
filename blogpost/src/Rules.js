import React from 'react';
import React from 'react';

function Rules() {
  const joinDiscord = () => {
    window.open('https://discord.gg/nwcrh7uG9y', '_blank');
  };
  return (
    <div style={{
      minHeight: '100vh',
      background: '#181818',
      color: '#00ff00',
      fontFamily: 'monospace',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      letterSpacing: 1,
      fontSize: 22
    }}>
      <div style={{
        background: '#111',
        border: '2px solid #00ff00',
        borderRadius: 8,
        padding: '40px 32px',
        boxShadow: '0 0 24px #00ff0033',
        textAlign: 'center',
        maxWidth: 420
      }}>
        <div style={{ fontSize: 32, fontWeight: 'bold', marginBottom: 18, textShadow: '0 0 8px #00ff00' }}>
          Civ 5 Multiplayer No quit
        </div>
        <div style={{ fontSize: 18, marginBottom: 32, color: '#fff', textShadow: '0 0 4px #00ff00' }}>
          Oldschool rules. No rage quitters. Just play.
        </div>
        <button
          onClick={joinDiscord}
          style={{
            background: '#000',
            color: '#00ff00',
            border: '2px solid #00ff00',
            borderRadius: 6,
            fontFamily: 'monospace',
            fontSize: 20,
            padding: '12px 36px',
            cursor: 'pointer',
            boxShadow: '0 0 12px #00ff00',
            marginTop: 8,
            textTransform: 'uppercase',
            letterSpacing: 2,
            transition: 'background 0.2s, color 0.2s'
          }}
          onMouseOver={e => {
            e.target.style.background = '#00ff00';
            e.target.style.color = '#000';
          }}
          onMouseOut={e => {
            e.target.style.background = '#000';
            e.target.style.color = '#00ff00';
          }}
        >
          Join Discord
        </button>
      </div>
    </div>
  );
}

export default Rules;
