import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToInfo = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  const joinDiscord = () => {
    window.open('https://discord.gg/ASSnBjyt', '_blank');
  };

  return (
    <div className="gaming-site">
      
      {/* Floating Discord Button */}
      <div className="floating-discord-btn">
        <button 
          className="discord-float-button"
          onClick={joinDiscord}
          title="Join Discord Server"
        >
          <span className="discord-icon">💬</span>
          <span className="discord-text">Join discord and start playing</span>
        </button>
      </div>
      
      {/* Hero Section - Full Screen */}
      <section className="hero-section">
        {/* Video Background */}
        <div className="video-background">
          {/* You can replace this with an actual video */}
          <div className="video-placeholder">
            {/* Animated background pattern */}
            <div className="animated-bg">
              {[...Array(50)].map((_, i) => (
                <div
                  key={i}
                  className="particle"
                  style={{
                    left: Math.random() * 100 + '%',
                    top: Math.random() * 100 + '%',
                    animationDelay: Math.random() * 3 + 's',
                    animationDuration: (3 + Math.random() * 4) + 's'
                  }}
                />
              ))}
            </div>
          </div>
          <div className="video-overlay" />
        </div>

        {/* Navigation */}
        {/* Navigation removed per user request */}

        {/* Hero Content */}
        <div className="hero-content">
          <div className={`hero-text ${isVisible ? 'animate' : ''}`}>
            <h1 className="hero-title">
              DEMOCRACIV
              <span className="highlight"> No quit Civ 5 </span>
              DISCORD SERVER
            </h1>
            
            <p className="hero-subtitle">
              Join the Democraciv civ 5 multipayer community with democratic governance, 
              ELO ranking system, and enforced fair play rules for a better civ 5 experience.
            </p>

            {/* Key Selling Points */}
            <div className="selling-points">
              <div className="point">
                <span className="point-icon">🏛️</span>
                <span>Democratic Senate System</span>
              </div>
              <div className="point">
                <span className="point-icon">📊</span>
                <span>ELO Ranking & Records</span>
              </div>
              <div className="point">
                <span className="point-icon">⚖️</span>
                <span>Enforced Rules & Justice</span>
              </div>
              <div className="point">
                <span className="point-icon">🔄</span>
                <span>Crash Recovery </span>
              </div>
            </div>

            {/* Call to Action Buttons */}
            <div className="cta-buttons">
              <button 
                className="btn btn-primary"
                onClick={scrollToInfo}
              >
                <span>�️ Learn About Our Democracy</span>
                <div className="btn-glow"></div>
              </button>
              
              <button 
                className="btn btn-discord"
                onClick={joinDiscord}
              >
                <span>💬 Join Discord Server</span>
                <div className="btn-glow"></div>
              </button>
            </div>

            {/* Server Stats */}
            <div className="hero-stats">
              <div className="stat">
                <div className="stat-number">Vanilla BNW Mod</div>
                <div className="stat-label">Democraciv Only</div>
              </div>
              <div className="stat">
                <div className="stat-number">100%</div>
                <div className="stat-label">Fair Play</div>
              </div>
              <div className="stat">
                <div className="stat-number">24/7</div>
                <div className="stat-label">Active Community</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="scroll-indicator">
          <div className="scroll-text">Learn about our democratic system</div>
          <div className="scroll-arrow">↓</div>
        </div>
      </section>

      {/* Quick Overview Section */}
      <section className="quick-overview-section">
        <div className="overview-container">
          <p className="overview-subtitle">Learn about our unique democratic system or jump straight into competitive gaming</p>
          
          <div className="path-cards">
            <div className="path-card server-info">
              <div className="path-icon">🏛️</div>
              <h3>Learn About Our Server</h3>
              <p>Discover our democratic governance, court system, and what makes this community special</p>
              <ul className="path-features">
                <li>🗳️ Democratic elections & legislation</li>
                <li>⚖️ Justice system with citizen juries</li>
                <li>📜 Community-driven rules</li>
                <li>🏛️ Transparent governance</li>
              </ul>
              <button 
                className="path-btn info-btn"
                onClick={() => {
                  const infoSection = document.querySelector('.server-info-section');
                  infoSection.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                📖 Learn More About Democracy
              </button>
            </div>

            <div className="path-card game-info">
              <div className="path-icon">🎮</div>
              <h3>Start Playing Games</h3>
              <p>Join our Discord server and start playing competitive Civilization V matches</p>
              <ul className="path-features">
                <li>� Go to #LFG to find other players for games</li>
                <li>🎯 Go to #Draft to create new lobbies</li>
                <li>📊 ELO ranking system tracks your progress</li>
                <li>� Mod setup help available in Discord</li>
              </ul>
              <button 
                className="path-btn game-btn"
                onClick={joinDiscord}
              >
                🎮 Join Discord & Start Playing
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Server Information Section */}
      <section className="server-info-section">
        <div className="info-container">
          
          {/* Server Overview */}
          <div className="info-block featured">
            <div className="info-icon">🏛️</div>
            <h2>Server Overview</h2>
            <p>
              Welcome to the most advanced Civilization V community! We combine competitive gaming 
              with democratic governance, creating a unique experience where every citizen has a voice 
              in how the server operates.
            </p>
            <div className="feature-details">
              <h4>Core of Democraciv:</h4>
              <ul className="feature-list">
                <li>🏛️ Democratic governance with elected Senators</li>
                <li>📊 ELO ranking system tracking all games</li>
                <li>⚖️ Justice system with citizen juries</li>
                <li>🔄 Crash recovery ensuring fair games</li>
                <li>🚫 Zero tolerance for rage quitting</li>
                <li>🎯 Competitive integrity enforcement</li>
              </ul>
              <h4>Community Structure:</h4>
              <ul className="feature-list">
                                <li>👥 Citizens vote on all major decisions</li>
                <li>🗳️ Elections every 2 months for leadership</li>
                <li>📜 Transparent rule-making process</li>
                                <li>📢 Community-driven server improvements</li>
              </ul>
            </div>
          </div>


        
        </div>
      </section>

      {/* Simple Game Info Section */}
      <section className="game-info-section" style={{background: 'linear-gradient(135deg, #16213e 0%, #0f0f23 100%)', padding: '80px 20px', textAlign: 'center'}}>
        <div style={{maxWidth: '800px', margin: '0 auto'}}>
          <h2 style={{color: '#00d4ff', fontSize: '2.5rem', marginBottom: '1rem'}}>How to Find Games</h2>
          <p style={{color: '#e0e0e0', fontSize: '1.2rem', marginBottom: '3rem'}}>Join our Discord server and start playing!</p>
          
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '3rem'}}>
            <div style={{background: 'rgba(255, 255, 255, 0.1)', borderRadius: '15px', padding: '2rem', border: '1px solid rgba(0, 212, 255, 0.3)'}}>
              <div style={{fontSize: '3rem', marginBottom: '1rem'}}>🔍</div>
              <h3 style={{color: '#00d4ff', marginBottom: '1rem'}}>Find Players</h3>
              <p style={{color: '#e0e0e0', marginBottom: '1rem'}}>Go to <strong>#LFG</strong> channel to find other players looking for games</p>
            </div>
            
            <div style={{background: 'rgba(255, 255, 255, 0.1)', borderRadius: '15px', padding: '2rem', border: '1px solid rgba(0, 212, 255, 0.3)'}}>
              <div style={{fontSize: '3rem', marginBottom: '1rem'}}>🎯</div>
              <h3 style={{color: '#00d4ff', marginBottom: '1rem'}}>Create Lobbies</h3>
              <p style={{color: '#e0e0e0', marginBottom: '1rem'}}>Go to <strong>#Draft</strong> channel to create new lobbies and manage games</p>
            </div>
          </div>
          
          <button 
            style={{
              background: 'linear-gradient(135deg, #00d4ff 0%, #5ddbff 100%)',
              color: '#ffffff',
              border: 'none',
              borderRadius: '50px',
              padding: '1rem 3rem',
              fontSize: '1.3rem',
              fontWeight: 'bold',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              textTransform: 'uppercase',
              letterSpacing: '1px'
            }}
            onClick={joinDiscord}
          >
            🎮 JOIN DISCORD & START PLAYING
          </button>
        </div>
      </section>

      {/* Final Overall CTA */}
      


        </div>


)}

export default App;
