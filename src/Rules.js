import React from 'react';
import './Rules.css';

function Rules() {
  const joinDiscord = () => {
    // Civilization V Discord Server Invite
    window.open('https://discord.gg/ASSnBjyt', '_blank');
  };

  return (
    <div className="rules-page">
      <div className="rules-container">
        <h1 className="rules-title">🎯 Core Server Rules</h1>
        <p className="rules-subtitle">READ BEFORE JOINING - These rules are STRICTLY ENFORCED through our democratic court system</p>
        
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

        {/* Big Discord CTA */}
        <div className="discord-cta">
          <h2>Ready to Join Our Democratic Civilization?</h2>
          <p>By clicking below, you agree to follow all server rules and participate in our democratic community</p>
          <button 
            className="btn btn-massive discord-massive"
            onClick={joinDiscord}
          >
            🏛️ JOIN DISCORD SERVER
          </button>
        </div>
      </div>
    </div>
  );
}

export default Rules;
