import { useState, useEffect } from 'react';
import './App.css';
import draftImage from './images/draft.png';

function App() {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToInfo = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  const joinDiscord = () => {
    // Scroll to rules section first
    const rulesSection = document.querySelector('.rules-summary.primary-rules');
    if (rulesSection) {
      rulesSection.scrollIntoView({ behavior: 'smooth' });
    }
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
              <span className="highlight"> COMPETITIVE </span>
              DISCORD SERVER
            </h1>
            
            <p className="hero-subtitle">
              Join the ultimate Democraciv competitive community with democratic governance, 
              ELO ranking system, and enforced fair play rules.
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
              <p>Get set up quickly and jump into competitive Civilization V matches with ELO tracking</p>
              <ul className="path-features">
                <li>🚀 Quick setup guide</li>
                <li>🔧 Mod installation help</li>
                <li>🎯 How to join lobbies</li>
                <li>📊 ELO ranking system</li>
              </ul>
              <button 
                className="path-btn game-btn"
                onClick={() => {
                  const gameSection = document.querySelector('.game-guide-section');
                  gameSection.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                🎮 How to Join Games
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
                <li>� Community-driven server improvements</li>
              </ul>
            </div>
          </div>

          {/* Democratic Features */}
          <div className="info-block">
            <div className="info-icon">🗳️</div>
            <h2>Democratic Participation</h2>
            <p>
              Unlike other servers, you have a real voice here! Participate in elections, 
              vote on legislation, and help shape the community's future.
            </p>
            <div className="feature-details">
              <h4>Your Democratic Rights:</h4>
              <ul className="feature-list">
                <li>�️ Vote in Senate elections every 2 months</li>
                <li>📜 Vote on all new rules and legislation</li>
                <li>⚖️ Serve as juror in court trials</li>
                <li>🏛️ Run for Senate yourself</li>
                <li>� Organize protests against government</li>
              </ul>
              <h4>How Democracy Works:</h4>
              <ul className="feature-list">
                <li>👥 3 elected Senators create legislation</li>
                <li>✅ 66% citizen approval needed for laws</li>
                <li>� Transparent voting in #elections</li>
                <li>⚖️ Democratic court system for justice</li>
              </ul>
            </div>
          </div>

          {/* Justice System */}
          <div className="info-block">
            <div className="info-icon">⚖️</div>
            <h2>Justice & Court System</h2>
            <p>
              Fair play is enforced through our democratic court system. 
              Any rule violations are handled through transparent trials with citizen juries.
            </p>
            <div className="feature-details">
              <h4>Court Process:</h4>
              <ul className="feature-list">
                <li>🔍 Anyone can /sue for rule violations</li>
                <li>👥 12-citizen jury system</li>
                <li>⚖️ Senators serve as prosecution</li>
                <li>🏛️ Transparent trial in dedicated threads</li>
                <li>🎯 66% jury vote needed for conviction</li>
                <li>💡 Guilty plea reduces punishment by half</li>
              </ul>
              <h4>Punishment System:</h4>
              <ul className="feature-list">
                <li>🥇 1st-3rd offense: 2 days prison</li>
                <li>🥈 4th-5th offense: 2 weeks prison</li>
                <li>🥉 6th+ offense: 2 months prison</li>
                <li>🔄 Clean slate after 6 months</li>
              </ul>
            </div>
          </div>

          {/* Legislation */}
          <div className="info-block">
            <div className="info-icon">�</div>
            <h2>Legislation System</h2>
            <p>
              All server rules are created and modified through our democratic legislation process. 
              Senators propose laws, and citizens vote on them.
            </p>
            <div className="feature-details">
              <h4>How Laws Are Made:</h4>
              <ul className="feature-list">
                <li>📝 Senators propose new rules or edits</li>
                <li>🗳️ Requires 2/3 Senator approval first</li>
                <li>👥 Citizens then vote on legislation</li>
                <li>✅ 66% citizen approval needed to pass</li>
                <li>📋 All managed in #elections channel</li>
              </ul>
            </div>
          </div>

          {/* Justice System */}
          <div className="info-block">
            <div className="info-icon">⚖️</div>
            <h2>Justice & Enforcement</h2>
            <p>
              Rule violations are handled through democratic trials with citizen juries. 
              Fair, transparent, and community-driven justice for all.
            </p>
            <div className="feature-details">
              <h4>How Justice Works:</h4>
              <ul className="feature-list">
                <li>🔍 Anyone can /sue rule violators</li>
                <li>👥 12-citizen jury decides guilt</li>
                <li>⚖️ Transparent trial process</li>
                <li>📊 Progressive punishment system</li>
                <li>🔄 6-month clean slate policy</li>
              </ul>
              <h4>Punishment Structure:</h4>
              <ul className="feature-list">
                <li>🥇 1st-3rd offense: 2 days prison</li>
                <li>🥈 4th-5th offense: 2 weeks prison</li>
                <li>🥉 6th+ offense: 2 months prison</li>
                <li>💡 Guilty plea = 50% reduction</li>
              </ul>
            </div>
          </div>

        </div>

        {/* Core Server Rules - Primary Focus */}
        <div className="rules-summary primary-rules">
          <h2>🎯 Core Server Rules - READ BEFORE JOINING</h2>
          <p className="rules-intro">These rules are STRICTLY ENFORCED through our democratic court system. Violations result in prison time!</p>
          
          <div className="rules-grid">
            <div className="rule-card priority">
              <div className="rule-icon">🏆</div>
              <h3>Victory Conduct</h3>
              <p><strong>MANDATORY:</strong> Play for your own victory. No suiciding into neighbors or removing military to lose your capital.</p>
              <div className="rule-details">
                <small>⚖️ Violation = Court trial + Prison time</small>
              </div>
            </div>
            <div className="rule-card priority">
              <div className="rule-icon">🚫</div>
              <h3>No Rage Quitting</h3>
              <p><strong>ZERO TOLERANCE:</strong> You cannot quit once a game begins. Stay until elimination or victory.</p>
              <div className="rule-details">
                <small>⚖️ Automatic punishment for quitters</small>
              </div>
            </div>
            <div className="rule-card priority">
              <div className="rule-icon">🤝</div>
              <h3>Fair Play</h3>
              <p><strong>REQUIRED:</strong> No pregame collusion, exploits, cheats, or shift-moves. No EUI enhanced demographics.</p>
              <div className="rule-details">
                <small>⚖️ Cheating = Immediate trial</small>
              </div>
            </div>
            <div className="rule-card">
              <div className="rule-icon">💬</div>
              <h3>Community Standards</h3>
              <p>Free speech valued. Harassment prohibited. No stream sniping or sharing private game info.</p>
              <div className="rule-details">
                <small>🛡️ Democratic community protection</small>
              </div>
            </div>
            <div className="rule-card">
              <div className="rule-icon">⚖️</div>
              <h3>Rule Enforcement</h3>
              <p>All rule violations are handled through our democratic court system with 12-citizen juries. Punishments range from 2 days to 2 months in prison depending on offense history.</p>
              <div className="rule-details">
                <small>⚠️ There are no warnings - follow the rules or face trial!</small>
              </div>
            </div>
          </div>
          
          <div className="discord-cta-rules">
            <h3>Ready to Join Our Democratic Civilization?</h3>
            <p>By clicking below, you agree to follow all server rules and participate in our democratic community</p>
            <button 
              className="btn btn-massive discord-massive"
              onClick={() => {
                // Now actually join Discord
                window.open('https://discord.gg/ASSnBjyt', '_blank');
              }}
            >
              🏛️ JOIN DISCORD SERVER
            </button>
          </div>
        </div>

        {/* Final CTA */}
        <div className="final-cta">
          <h2>Ready to Join the Most Advanced Democraciv Community?</h2>
          <p>Experience Civilization V with democratic governance, fair play enforcement, and competitive ranking!</p>
          <button 
            className="btn btn-massive"
            onClick={joinDiscord}
          >
            🏛️ JOIN OUR CIVILIZATION
          </button>
        </div>
      </section>

      {/* Game Guide Section */}
      <section className="game-guide-section">
        <div className="game-container">
          <h2 className="section-title">🎮 How to Join Democraciv Games</h2>
          <p className="section-subtitle">Get set up and start playing competitive Civilization V matches</p>
          
          {/* Setup Steps */}
          <div className="setup-steps">
            <div className="step-card">
              <div className="step-number">1</div>
              <div className="step-content">
                <h3>🚀 Join Discord Server</h3>
                <p>First, join our Discord server to access game lobbies and community features</p>
                <button className="discord-join-btn" onClick={joinDiscord}>
                  💬 Join Discord Server
                </button>
              </div>
            </div>

            <div className="step-card">
              <div className="step-number">2</div>
              <div className="step-content">
                <h3>🔧 Install Required Mods</h3>
                <p>Download and install the essential mods for competitive Democraciv play</p>
                
                {/* Important Installation Warning */}
                <div className="install-warning">
                  <h4>⚠️ Important Installation Notes</h4>
                  <ul>
                    <li>🚫 <strong>Remove all other mods</strong> except EUI before installing</li>
                    <li>📁 Avoid nested folders - extract directly to the specified directories</li>
                    <li>🔄 <strong>Easy removal:</strong> Simply delete the mod folders to uninstall</li>
                    <li>💬 <strong>Find downloads in Discord</strong> #setup-help channel</li>
                  </ul>
                </div>
                
                {/* FishMap */}
                <div className="mod-section">
                  <div className="mod-header">
                    <h4>🗺️ FishMap</h4>
                    <span className="mod-author">by Giant Death Robot</span>
                  </div>
                  <p className="mod-description">
                    Fishmap is the basic Pangaea but with strategic balance now guarantees 7 coal and 3 aluminium to ensure fairness.
                  </p>
                  <div className="installation-steps">
                    <div className="install-step">
                      <strong>📁 Installation:</strong>
                      <code>C:\Program Files (x86)\Steam\steamapps\common\Sid Meier's Civilization V\Assets\Maps</code>
                    </div>
                    <div className="install-note">
                      Unzip the contents into the Maps directory
                    </div>
                  </div>
                </div>

                {/* KEKMod */}
                <div className="mod-section">
                  <div className="mod-header">
                    <h4>⚡ KEKMod v1.4</h4>
                    <span className="mod-size">11.49 MB</span>
                  </div>
                  <p className="mod-description">
                    Kekmod is designed for people who love BNW Civ. The changes are intended to improve gameplay, 
                    fix some bugs and simplify interaction between players.
                  </p>
                  <div className="installation-steps">
                    <div className="install-step">
                      <strong>� Installation:</strong>
                      <code>C:\Program Files (x86)\Steam\steamapps\common\Sid Meier's Civilization V\Assets\DLC</code>
                    </div>
                    <div className="install-step">
                      <strong>⚙️ Run Setup:</strong>
                      <code>ui_check.bat</code>
                    </div>
                    <div className="install-note">
                      Unzip contents to DLC directory, then run the batch file
                    </div>
                  </div>
                </div>

                <p className="mod-note">📝 Download links and complete installation guides available in Discord <strong>#setup-help</strong> channel</p>
              </div>
            </div>

            <div className="step-card">
              <div className="step-number">3</div>
              <div className="step-content">
                <h3>🎯 Find & Join Lobbies</h3>
                <p>Go to #Draft channel to find or create new lobbies</p>
                
                <div className="draft-guide">
                  <div className="draft-instructions">
                    <h4>How to Join Lobbies:</h4>
                    <div className="instruction-step">
                      <strong>1. 📋 Find Lobbies:</strong>
                      <span>Go to <code>#Draft</code> channel to see available games</span>
                    </div>
                    <img src={draftImage} alt="Draft lobby interface" className="draft-image" />
                    <div className="instruction-step">
                      <strong>2. ✅ Join/Leave:</strong>
                      <span>Click the "Join/Leave" button to enter a lobby</span>
                    </div>
                    <div className="instruction-step">
                      <strong>3. 🚫 Ban Civilizations:</strong>
                      <span>Press "Bans Civs" button to ban your 2 required civilizations</span>
                    </div>
                    <div className="instruction-step">
                      <strong>4. 🎮 No Lobbies? Make One!:</strong>
                      <span>Press "Vanilla Lobby" or "Kekmod Lobby" button and set it up to your liking</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="step-card">
              <div className="step-number">4</div>
              <div className="step-content">
                <h3>🎯 Ready Up & Pick Your Civ</h3>
                <p>Once you've joined a lobby and banned civilizations, ready up and select your civilization</p>
                <div className="ready-info">
                  <div className="ready-rule">
                    <strong>✅ Ready Button:</strong> Click ready when you're prepared to start
                  </div>
                  <div className="ready-rule">
                    <strong>🏛️ Pick Civilization:</strong> Choose from the available civilizations
                  </div>
                  <div className="ready-rule">
                    <strong>⏰ Wait for Others:</strong> Game starts when all players are ready
                  </div>
                </div>
                <img src={require('./images/complete-draft.png')} alt="Complete draft interface showing ready players" className="draft-image" />
              </div>
            </div>

            <div className="step-card">
              <div className="step-number">5</div>
              <div className="step-content">
                <h3>🔗 Post Steam Link to Join Game</h3>
                <p>Copy the steam link from the lobby and paste it in your browser to join the game</p>
                <div className="steam-info">
                  <div className="steam-rule">
                    <strong>📋 Copy Link:</strong> Copy the steam://joinlobby link from Discord
                  </div>
                  <div className="steam-rule">
                    <strong>🌐 Open Browser:</strong> Paste the link in your web browser
                  </div>
                  <div className="steam-rule">
                    <strong>🎮 Join Game:</strong> Steam will automatically open and join the lobby
                  </div>
                </div>
              </div>
            </div>

            <div className="step-card">
              <div className="step-number">6</div>
              <div className="step-content">
                <h3>✅ Start Playing</h3>
                <p>Commit to finishing the entire game and enjoy competitive Civilization V</p>
                <div className="ready-rules">
                  <div className="ready-rule">
                    <strong>🔒 Commitment:</strong> No quitting once the game begins
                  </div>
                  <div className="ready-rule">
                    <strong>📊 ELO Tracking:</strong> Your ranking will be updated
                  </div>
                  <div className="ready-rule">
                    <strong>📹 Recording:</strong> Game will be automatically recorded
                  </div>
                  <div className="ready-rule">
                    <strong>🔄 Crash Recovery:</strong> Available if technical issues occur
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Game Features */}
          <div className="game-features">
            <h3>🌟 </h3>
            <div className="feature-grid">
              <div className="feature-item">
                <div className="feature-icon">📊</div>
                <h4>ELO Ranking System</h4>
                <p>Track your competitive progress with detailed statistics and rankings</p>
              </div>
              <div className="feature-item">
                <div className="feature-icon">📹</div>
                <h4>Game Recording</h4>
                <p>All matches automatically recorded for review and dispute resolution</p>
              </div>
              <div className="feature-item">
                <div className="feature-icon">🔄</div>
                <h4>Crash Recovery</h4>
                <p>Technical issues won't ruin your game - we can restore and continue</p>
              </div>
              <div className="feature-item">
                <div className="feature-icon">⚖️</div>
                <h4>Fair Play Enforcement</h4>
                <p>Democratic justice system ensures all players follow the rules</p>
              </div>
            </div>
          </div>

          {/* Final Game CTA */}
          <div className="game-cta">
            <h3>Ready to Start Playing?</h3>
            <p>Join our Discord server and begin playing in the biggest Democraciv community!</p>
            <button 
              className="btn btn-massive game-massive"
              onClick={joinDiscord}
            >
              🎮 JOIN DISCORD & START PLAYING
            </button>
          </div>
        </div>
      </section>

      {/* Final Overall CTA */}
      <section className="final-section">
        <div className="final-container">
          <p></p>
          <div className="final-buttons">
            <button 
              className="btn btn-discord final-btn"
              onClick={joinDiscord}
            >
             🏛️ Join Democraciv
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
