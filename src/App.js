import { useState, useEffect } from 'react';
import './App.css';
// Helper for modal images
const uiImages = [
  {
    src: '/Images/fullUI.png',
    alt: 'Full UI',
    caption: 'Full UI with new features',
  },
  {
    src: '/Images/pausegame.png',
    alt: 'Pause Game',
    caption: 'Pause timer for crashes/pauses',
  },
  {
    src: '/Images/ingamevotes.png',
    alt: 'In-game Votes',
    caption: 'In-game voting for irrelevancy/conceding',
  },
  {
    src: '/Images/Concede.png',
    alt: 'Concede Vote',
    caption: 'Concede option in vote menu',
  },
];

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
  <div className="floating-discord-btn" style={{ position: 'fixed', bottom: 32, right: 32, left: 'auto', top: 'auto', zIndex: 1000, pointerEvents: 'auto' }}>
        <button 
          className="discord-float-button"
          onClick={joinDiscord}
          title="Join Discord Server"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            background: '#5865F2',
            color: '#fff',
            border: 'none',
            borderRadius: 32,
            padding: '16px 28px',
            fontWeight: 700,
            fontSize: '1.1rem',
            boxShadow: '0 4px 24px #0004',
            cursor: 'pointer',
            transition: 'background 0.2s, box-shadow 0.2s',
          }}
        >
          <span className="discord-icon" style={{ fontSize: 24 }}>💬</span>
          <span className="discord-text">Join discord and start playing</span>
        </button>
      </div>
      
      {/* Hero Section - Full Screen with background.png */}
      <section className="hero-section" style={{
        minHeight: '100vh',
        width: '100%',
        backgroundImage: 'url(/images/background.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
      }}>
        {/* Hero Content */}
        <div className="hero-content" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
          <div
            className={`hero-text ${isVisible ? 'animate' : ''}`}
            style={{
              background: 'rgba(18, 22, 34, 0.82)',
              borderRadius: 24,
              boxShadow: '0 6px 32px #0008',
              padding: '48px 40px',
              maxWidth: 700,
              width: '100%',
              color: '#fff',
              textShadow: '0 2px 12px #000a',
              backdropFilter: 'blur(2px)',
            }}
          >
            <h1 className="hero-title">
              DEMOCRACIV
              <span className="highlight"> No quit Civ 5 </span>
              DISCORD SERVER
            </h1>
            
            <p className="hero-subtitle">
              Join the Democraciv civ 5 multipayer community with democratic governance, 
              ELO ranking system, and enforced fair play rules for a better civ 5 experience.
            </p>

            {/* Call to Action Buttons */}
            <div className="cta-buttons">
              <button 
                className="btn btn-primary"
                onClick={scrollToInfo}
              >
                <span>�️ Learn About Democraciv</span>
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
                <div className="stat-label">(kekmod)  </div>
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
          <div className="scroll-text">Learn more about community</div>
          <div className="scroll-arrow">↓</div>
        </div>
      </section>


      {/* Main Content Section with Sidebar Tabs */}
      <section className="main-content-section" style={{ display: 'flex', width: '100vw', height: '100vh', background: '#181c2f', position: 'relative', margin: 0, padding: 0 }}>
        <SidebarTabs />
      </section>

    </div>
  );
}

// SidebarTabs component
function SidebarTabs() {
  // For expanding UI images
  const [expandedImg, setExpandedImg] = useState(null);
  // Sidebar structure: each item can have subTabs
  const tabs = [
    { label: 'Intro' },
    { label: 'How to Start Or Join a Lobby' },
    {
      label: 'What is Vanilla Mod (Kekmod)',
      subTabs: [
        { label: 'Install in 30 sec' },
        { label: 'Uninstall in 5 sec (Just delete it)' }
      ]
    },
    { label: 'Server and Gameplay rules' }
  ];
  // activeTab: [mainTabIndex, subTabIndex or null]
  const [activeTab, setActiveTab] = useState([0, null]);

  return (
    <div style={{ display: 'flex', width: '100%', height: '100%' }}>
  <nav style={{ width: 'max-content', maxWidth: 'max-content', background: '#101325', color: '#fff', padding: '60px 0 40px 0', borderTopRightRadius: 20, borderBottomRightRadius: 20, boxShadow: '2px 0 10px #0002', display: 'flex', flexDirection: 'column', alignItems: 'flex-end', justifyContent: 'flex-start' }}>
    {tabs.map((tab, idx) => (
      <div key={tab.label} style={{ width: '100%' }}>
        <button
          onClick={() => setActiveTab([idx, null])}
          style={{
            background: activeTab[0] === idx ? '#00d4ff' : 'transparent',
            color: activeTab[0] === idx ? '#181c2f' : '#fff',
            border: 'none',
            borderRadius: '20px 0 0 20px',
            padding: '16px 32px',
            margin: '8px 0',
            fontWeight: 700,
            fontSize: '1.13rem',
            cursor: 'pointer',
            width: '100%',
            textAlign: 'right',
            transition: 'background 0.2s, color 0.2s',
            boxShadow: activeTab[0] === idx ? '0 2px 12px #00d4ff44' : 'none',
            position: 'relative',
            zIndex: 2,
          }}
        >
          {tab.label}
        </button>
        {/* Render sub-tabs if present (always visible) */}
        {tab.subTabs && (
          <div style={{ width: '100%', marginLeft: 0, marginTop: -4, marginBottom: 8, paddingLeft: 0, borderLeft: '3px solid #00d4ff', background: 'rgba(0,212,255,0.07)', borderRadius: '0 0 0 16px' }}>
            {tab.subTabs.map((sub, subIdx) => (
              <button
                key={sub.label}
                onClick={() => setActiveTab([idx, subIdx])}
                style={{
                  background: activeTab[0] === idx && activeTab[1] === subIdx ? '#00d4ff' : 'transparent',
                  color: activeTab[0] === idx && activeTab[1] === subIdx ? '#181c2f' : '#b0eaff',
                  border: 'none',
                  borderRadius: '16px 0 0 16px',
                  padding: '10px 44px 10px 56px',
                  margin: '2px 0',
                  fontWeight: 500,
                  fontSize: '1.01rem',
                  cursor: 'pointer',
                  width: '100%',
                  textAlign: 'right',
                  transition: 'background 0.2s, color 0.2s',
                  opacity: 1,
                  position: 'relative',
                  zIndex: 1,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8,
                }}
              >
                <span style={{ fontSize: 16, color: '#00d4ff', marginRight: 4 }}>↳</span> {sub.label}
              </button>
            ))}
          </div>
        )}
      </div>
    ))}
  </nav>
  <div style={{ flex: 1, padding: '48px 40px 120px 40px', color: '#fff', minHeight: 400, height: '100%', overflowY: 'auto', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}>
        {/* Intro section above tabs, only for Intro tab */}
        {activeTab[0] === 0 && (
          <div style={{ marginBottom: 32, width: '100%', maxWidth: 1100, display: 'flex', flexDirection: 'column', gap: 44 }}>
            {/* Player Stats Section - now first and larger */}
            <div style={{ background: '#23284a', borderRadius: 18, boxShadow: '0 4px 24px #0003', padding: '36px 48px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 28 }}>
              <div style={{ fontWeight: 900, fontSize: '2.2rem', color: '#00e0ff', marginBottom: 8, textAlign: 'center', letterSpacing: '-1px' }}>
                Welcome to Democraciv
              </div>
              <div style={{ fontWeight: 700, fontSize: '1.25rem', color: '#ffe066', marginBottom: 18, textAlign: 'center' }}>
                The home of competitive, fair-play Civilization V multiplayer.<br/>Track your stats, join games, and climb the leaderboard!
              </div>
              <div style={{ fontWeight: 700, fontSize: '1.22rem', color: '#00e0ff', marginBottom: 8, textAlign: 'center' }}>
                Get your stats on wins and losses and much more
              </div>
              <div style={{ display: 'flex', gap: 32, flexWrap: 'wrap', justifyContent: 'center' }}>
                {[1,2,3,4,5].map(i => (
                  <img
                    key={i}
                    src={`/Images/players/player${i}.png`}
                    alt={`Player ${i}`}
                    style={{ width: 180, height: 180, objectFit: 'cover', borderRadius: 18, boxShadow: '0 4px 18px #0007', background: '#181c2f', cursor: 'pointer', transition: 'transform 0.2s' }}
                    onClick={() => setExpandedImg({ src: `/Images/players/player${i}.png`, alt: `Player ${i}`, caption: `Player ${i}` })}
                  />
                ))}
              </div>
            </div>

            {/* Games Section - now larger */}
            <div style={{ background: '#23284a', borderRadius: 18, boxShadow: '0 4px 24px #0003', padding: '36px 48px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 28 }}>
              <div style={{ fontWeight: 700, fontSize: '1.22rem', color: '#ffe066', marginBottom: 8, textAlign: 'center' }}>
                Over 8,000 completed games. Join the next one!
              </div>
              <div style={{ display: 'flex', gap: 32, flexWrap: 'wrap', justifyContent: 'center' }}>
                {[1,2,3,4].map(i => (
                  <img
                    key={i}
                    src={`/Images/players/game${i}.png`}
                    alt={`Game ${i}`}
                    style={{ width: 320, height: 180, objectFit: 'cover', borderRadius: 14, boxShadow: '0 4px 18px #0007', background: '#181c2f', cursor: 'pointer', transition: 'transform 0.2s' }}
                    onClick={() => setExpandedImg({ src: `/Images/players/game${i}.png`, alt: `Game ${i}`, caption: `Game ${i}` })}
                  />
                ))}
              </div>
            </div>


            {/* Leaderboard Section - now above community section */}
            <div style={{ background: 'linear-gradient(90deg, #23284a 80%, #1a223a 100%)', borderRadius: 18, boxShadow: '0 4px 24px #0003', padding: '18px 22px', marginBottom: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', maxWidth: 500, alignSelf: 'center' }}>
              <div style={{ margin: 0, fontSize: '1.5rem', color: '#00d4ff', textAlign: 'center', fontWeight: 900, letterSpacing: '-1px' }}>Leaderboard</div>
              <p style={{ margin: '8px 0 16px 0', fontSize: '1.05rem', color: '#ffe066', textAlign: 'center', fontWeight: 600 }}>
                Climb the ranks and see how you stack up!
              </p>
              <img
                src="/Images/players/Leaderboards.png"
                alt="Leaderboard"
                style={{ width: '100%', maxWidth: 320, borderRadius: 12, boxShadow: '0 2px 16px #0006', margin: '0 auto 0 auto', background: '#111', cursor: 'pointer' }}
                onClick={() => setExpandedImg({ src: '/Images/players/Leaderboards.png', alt: 'Leaderboard', caption: 'Leaderboard' })}
              />
            </div>

            {/* Strategy & Community Section */}
            <div style={{ background: '#181c2f', borderRadius: 14, boxShadow: '0 2px 10px #0002', padding: '22px 28px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 18 }}>
              <div style={{ fontWeight: 700, fontSize: '1.13rem', color: '#00e0ff', marginBottom: 4, textAlign: 'center' }}>
                Share strategies and discuss the game with the community!
              </div>
              <div style={{ color: '#b0b0b0', fontSize: '1.05rem', textAlign: 'center', marginBottom: 12 }}>
                Go to <span style={{ color: '#ffe066', fontWeight: 600 }}>#Draft</span> and <span style={{ color: '#ffe066', fontWeight: 600 }}>#LFG</span> to find the next games.<br/>
                For more information, see the <span style={{ color: '#00e0ff', fontWeight: 600 }}>How to Join Games</span> tab.
              </div>
              <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', justifyContent: 'center' }}>
                <button
                  style={{ background: '#00d4ff', color: '#181c2f', border: 'none', borderRadius: 8, padding: '10px 22px', fontWeight: 700, fontSize: '1.08rem', cursor: 'pointer', boxShadow: '0 2px 8px #00d4ff44', marginBottom: 0 }}
                  onClick={() => window.open('https://discord.gg/ASSnBjyt', '_blank')}
                >
                  Join Discord
                </button>
                <button
                  style={{ background: '#ffe066', color: '#181c2f', border: 'none', borderRadius: 8, padding: '10px 22px', fontWeight: 700, fontSize: '1.08rem', cursor: 'pointer', boxShadow: '0 2px 8px #ffe06644', marginBottom: 0 }}
                  onClick={() => {
                    // Scroll to How to Join Games tab
                    const sidebar = document.querySelector('.main-content-section');
                    if (sidebar) {
                      // Simulate clicking the tab
                      const navBtns = Array.from(sidebar.querySelectorAll('nav button'));
                      const joinTab = navBtns.find(btn => btn.textContent && btn.textContent.includes('How to Start Or Join a Lobby'));
                      if (joinTab) joinTab.click();
                    }
                  }}
                >
                  How to Join Games
                </button>
                <button
                  style={{ background: '#00e0ff', color: '#181c2f', border: 'none', borderRadius: 8, padding: '10px 22px', fontWeight: 700, fontSize: '1.08rem', cursor: 'pointer', boxShadow: '0 2px 8px #00e0ff44', marginBottom: 0 }}
                  onClick={() => window.open('https://discord.com/channels/ASSnBjyt', '_blank')}
                >
                  #Draft / #LFG
                </button>
              </div>
            </div>

            {/* Modal for expanded image (shared for all images) */}
            {expandedImg && (
              <div
                onClick={() => setExpandedImg(null)}
                style={{
                  position: 'fixed',
                  top: 0,
                  left: 0,
                  width: '100vw',
                  height: '100vh',
                  background: 'rgba(0,0,0,0.7)',
                  zIndex: 2000,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'zoom-out',
                }}
              >
                <div
                  style={{ position: 'relative', maxWidth: '90vw', maxHeight: '90vh', background: 'none' }}
                  onClick={e => e.stopPropagation()}
                >
                  <img
                    src={expandedImg.src}
                    alt={expandedImg.alt}
                    style={{
                      maxWidth: '90vw',
                      maxHeight: '80vh',
                      borderRadius: 12,
                      boxShadow: '0 4px 32px #000a',
                      background: '#222',
                      display: 'block',
                    }}
                  />
                  <div style={{ color: '#fff', textAlign: 'center', marginTop: 12, fontSize: '1.1rem' }}>{expandedImg.caption}</div>
                  <button
                    onClick={() => setExpandedImg(null)}
                    style={{
                      position: 'absolute',
                      top: -16,
                      right: -16,
                      background: '#222',
                      color: '#fff',
                      border: 'none',
                      borderRadius: '50%',
                      width: 36,
                      height: 36,
                      fontSize: 22,
                      cursor: 'pointer',
                      boxShadow: '0 2px 8px #0008',
                    }}
                    aria-label="Close expanded image"
                  >✕</button>
                </div>
              </div>
            )}
          </div>
        )}
        {activeTab[0] === 1 && (
          <div style={{ maxWidth: 800, fontFamily: 'Segoe UI, Arial, sans-serif' }}>
            <h2 style={{ color: '#00e0ff', fontWeight: 800, fontSize: '2rem', marginBottom: 24 }}>How to Join a Game</h2>
            <div style={{ borderTop: '2px solid #23284a', margin: '0 0 24px 0' }} />
            {/* Step 1 */}
            <div style={{ background: '#23284a', borderRadius: 14, boxShadow: '0 2px 12px #0002', padding: '22px 28px', marginBottom: 28 }}>
              <div style={{ fontWeight: 700, fontSize: '1.15rem', marginBottom: 8 }}>Go To <span style={{ color: '#ffe066' }}>#Draft</span> to find a lobby.</div>
              <video controls muted style={{ width: '100%', maxWidth: 600, borderRadius: 12, boxShadow: '0 2px 12px #0003', margin: '12px 0', background: '#000' }}>
                <source src="/videos/Joinagame.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            {/* Step 2 */}
            <div style={{ background: '#23284a', borderRadius: 14, boxShadow: '0 2px 12px #0002', padding: '22px 28px', marginBottom: 28 }}>
              <div style={{ fontWeight: 700, fontSize: '1.15rem', marginBottom: 8 }}>Wait for 6 players to ban two civs and green up.</div>
              <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
                <img src="/Images/JoinGamePics/2Greenup.png" alt="Green Up" style={{ width: '48%', minWidth: 220, borderRadius: 12, boxShadow: '0 2px 12px #0003', margin: '12px 0' }} />
                <img src="/Images/JoinGamePics/3Greened.png" alt="Greened" style={{ width: '48%', minWidth: 220, borderRadius: 12, boxShadow: '0 2px 12px #0003', margin: '12px 0' }} />
              </div>
            </div>
            {/* Step 3 */}
            <div style={{ background: '#23284a', borderRadius: 14, boxShadow: '0 2px 12px #0002', padding: '22px 28px', marginBottom: 28 }}>
              <div style={{ fontWeight: 700, fontSize: '1.15rem', marginBottom: 8 }}>Pick one of your 3 randomly assigned civs out of the pool.</div>
              <img src="/Images/JoinGamePics/4PickCiv.png" alt="Pick Civ" style={{ width: '100%', maxWidth: 600, borderRadius: 12, boxShadow: '0 2px 12px #0003', margin: '12px 0' }} />
            </div>
            {/* Step 4 */}
            <div style={{ background: '#23284a', borderRadius: 14, boxShadow: '0 2px 12px #0002', padding: '22px 28px', marginBottom: 0 }}>
              <div style={{ fontWeight: 700, fontSize: '1.15rem', marginBottom: 8 }}>Play the game and record the result if you win.</div>
              <img src="/Images/JoinGamePics/5Diplomatwin.png" alt="Diplomat Win" style={{ width: '100%', maxWidth: 600, borderRadius: 12, boxShadow: '0 2px 12px #0003', margin: '12px 0' }} />
            </div>
          </div>
        )}
        {activeTab[0] === 2 && activeTab[1] === null && (
          <div style={{ maxWidth: 900, fontFamily: 'Segoe UI, Arial, sans-serif', margin: '0 auto' }}>
            <h2 style={{ color: '#00e0ff', fontWeight: 900, fontSize: '2.1rem', marginBottom: 18, letterSpacing: '-1px', textShadow: '0 2px 12px #0006' }}>What is Vanilla Mod (Kekmod)?</h2>
            <div style={{ background: 'linear-gradient(90deg, #23284a 80%, #1a223a 100%)', borderRadius: 18, boxShadow: '0 4px 24px #0003', padding: '32px 36px', marginBottom: 32 }}>
              <div style={{
                background: 'linear-gradient(90deg, #ffe06622 60%, #23284a 100%)',
                borderRadius: 14,
                padding: '18px 28px',
                marginBottom: 22,
                fontWeight: 800,
                fontSize: '1.18rem',
                color: '#ffe066',
                boxShadow: '0 2px 12px #0002',
                borderLeft: '6px solid #00e0ff',
                letterSpacing: '-0.5px',
                textShadow: '0 2px 8px #0008',
              }}>
                Why do we use Vanilla mod (kekmod)?
                <div style={{ color: '#fff', fontWeight: 500, fontSize: '1.08rem', marginTop: 8, textShadow: 'none', letterSpacing: 0 }}>
                  Kekmod is designed for people who love BNW Civ. The changes are intended to enforce rules, fix some bugs and simplify interaction between players.<br/>
                  <span style={{ color: '#ffe066', fontWeight: 600 }}>While keeping the core identity of what makes Vanilla BNW what it is.</span>
                </div>
              </div>
              <div style={{ color: '#fff', fontSize: '1.13rem', fontWeight: 700, marginBottom: 10, letterSpacing: '-0.5px', textShadow: '0 2px 8px #0008' }}>
                Key features include:
              </div>
              <ul style={{ color: '#fff', fontSize: '1.08rem', marginBottom: 18, paddingLeft: 24, lineHeight: 1.7 }}>
                <li><b style={{ color: '#00e0ff' }}>UI Improvements:</b> For example: Fixed reload game bug,  Ability to pause timer or speed it up (for crashes/pauses), streamer panel, in-game voting for irrelevancy/conceding, and more.
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 24, margin: '18px 0 0 0' }}>
                    {uiImages.map((img, idx) => (
                      <div key={img.src} style={{ flex: '1 1 220px', minWidth: 220, maxWidth: 320, textAlign: 'center', cursor: 'pointer' }}>
                        <img
                          src={img.src}
                          alt={img.alt}
                          style={{ width: '100%', borderRadius: 10, boxShadow: '0 2px 12px #0006', marginBottom: 8, transition: 'transform 0.2s', cursor: 'pointer' }}
                          onClick={() => setExpandedImg(img)}
                        />
                        <div style={{ color: '#b0b0b0', fontSize: '0.98rem' }}>{img.caption}</div>
                      </div>
                    ))}
                  </div>
                  {/* Modal for expanded image */}
                  {expandedImg && (
                    <div
                      onClick={() => setExpandedImg(null)}
                      style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100vw',
                        height: '100vh',
                        background: 'rgba(0,0,0,0.7)',
                        zIndex: 2000,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'zoom-out',
                      }}
                    >
                      <div
                        style={{ position: 'relative', maxWidth: '90vw', maxHeight: '90vh', background: 'none' }}
                        onClick={e => e.stopPropagation()}
                      >
                        <img
                          src={expandedImg.src}
                          alt={expandedImg.alt}
                          style={{
                            maxWidth: '90vw',
                            maxHeight: '80vh',
                            borderRadius: 12,
                            boxShadow: '0 4px 32px #000a',
                            background: '#222',
                            display: 'block',
                          }}
                        />
                        <div style={{ color: '#fff', textAlign: 'center', marginTop: 12, fontSize: '1.1rem' }}>{expandedImg.caption}</div>
                        <button
                          onClick={() => setExpandedImg(null)}
                          style={{
                            position: 'absolute',
                            top: -16,
                            right: -16,
                            background: '#222',
                            color: '#fff',
                            border: 'none',
                            borderRadius: '50%',
                            width: 36,
                            height: 36,
                            fontSize: 22,
                            cursor: 'pointer',
                            boxShadow: '0 2px 8px #0008',
                          }}
                          aria-label="Close expanded image"
                        >✕</button>
                      </div>
                    </div>
                  )}
                </li>
                <li><b style={{ color: '#00e0ff' }}>Anticheat:</b> Removes exploits and common cheats.</li>
                <li><b style={{ color: '#00e0ff' }}>Passive AI:</b> AI cannot declare war, vote, spread religion, build wonders, or trade—ensuring fairness for remaining players. Etc</li>
                <li><b style={{ color: '#00e0ff' }}>Enforced Rules:</b> No saving scientists (bulb value drops after 3 turns), no Observatory + National College in same city, no blitz on XCOM, atomic bombs removed, nuclear missiles require Mobile Tactics. Full list of changes in #patch in discord</li>
              </ul>
              <div style={{ color: '#ffe066', fontWeight: 700, marginBottom: 8, fontSize: '1.13rem', marginTop: 24 }}>Other notable changes:</div>
              <ul style={{ color: '#fff', fontSize: '1.02rem', marginBottom: 0, paddingLeft: 24, lineHeight: 1.6 }}>
                <li><b>Congress & Diplomacy:</b> Non-Aggression Pacts, fixed proposal order, anonymous voting, and more restrictions for AI.</li>
                <li><b>Random Activation Order:</b> No more FirstMove or Host getting every wonder.</li>
                <li><b>Civilizations:</b> Venice, Spain, and Huns rebalanced. Venice can buy settlers, Spain gets 100 gold from wonders, Huns' unique units adjusted.</li>
              </ul>
              <div style={{ marginTop: 24, color: '#b0b0b0', fontSize: '1.08rem', background: '#181c2f', borderRadius: 10, padding: '16px 24px', marginBottom: 0, marginLeft: 0, marginRight: 0 }}>
                <b>See the sub-tabs below for <span style={{ color: '#00e0ff' }}>Install</span> and <span style={{ color: '#ff5e5e' }}>Uninstall</span> instructions.<br/>Full patch notes are available in Discord <span style={{ color: '#ffe066' }}>#Patch</span> channel.</b>
              </div>
            </div>
          </div>
        )}
        {activeTab[0] === 2 && activeTab[1] === 0 && (
          <div style={{ width: '100%', maxWidth: 900, display: 'flex', flexDirection: 'column', alignItems: 'flex-start', fontFamily: 'Segoe UI, Arial, sans-serif' }}>
            {/* Header and tip box stacked above steps */}
            <div style={{ width: '100%', marginBottom: 12 }}>
              <h2 style={{ marginBottom: 4, fontSize: '2.3rem', textAlign: 'left', letterSpacing: '-1px', fontWeight: 800, color: '#00e0ff' }}>Vanilla Mod: Quick Install</h2>
              <div style={{ background: '#23284a', color: '#b0b0b0', borderRadius: 8, padding: '10px 24px', margin: '12px 0 0 0', fontSize: '1.05rem', maxWidth: 520, boxShadow: '0 1px 6px #0002' }}>
                <span style={{ fontSize: '0.98rem', fontWeight: 500 }}>
                  <span style={{ color: '#ffe066' }}>Tip:</span> To uninstall, just remove the files from your <span style={{ color: '#00e0ff', fontWeight: 600 }}>DLC</span> folder.
                </span>
              </div>
            </div>
            {/* Step Cards */}
            <div style={{ width: '100%', maxWidth: 800, display: 'flex', flexDirection: 'column', gap: 32 }}>
              {/* Help Box: Example Paths */}
              <div style={{ background: '#1a223a', color: '#ffe066', borderRadius: 8, padding: '14px 28px', marginBottom: 8, fontSize: '1.08rem', fontWeight: 500, boxShadow: '0 1px 6px #0002', borderLeft: '4px solid #00e0ff' }}>
                <div style={{ color: '#fff', fontWeight: 700, marginBottom: 4 }}>Example folders for mod installation:</div>
                <div style={{ fontFamily: 'monospace', color: '#ffe066', marginBottom: 2 }}>
                  DLC: <span style={{ color: '#fff' }}>C:\Program Files (x86)\Steam\steamapps\common\Sid Meier's Civilization V\Assets\DLC</span>
                </div>
                <div style={{ fontFamily: 'monospace', color: '#ffe066' }}>
                  Maps: <span style={{ color: '#fff' }}>C:\Program Files (x86)\Steam\steamapps\common\Sid Meier's Civilization V\Assets\Maps</span>
                </div>
              </div>
              {/* Step 1 */}
              <div style={{ background: '#23284a', borderRadius: 14, boxShadow: '0 2px 12px #0002', padding: '28px 32px', display: 'flex', flexDirection: 'column', gap: 12 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                  <span style={{ fontSize: 32, color: '#00e0ff' }}>⬇️</span>
                  <span style={{ fontWeight: 700, fontSize: '1.18rem' }}>Download <span style={{ color: '#ffe066' }}>Kekmod</span> and <span style={{ color: '#ffe066' }}>Normal Pangea with Coal Mapscript</span> from <span style={{ color: '#00e0ff' }}>#Patch</span> on Discord</span>
                </div>
                <video controls style={{ maxWidth: 700, width: '100%', borderRadius: 12, boxShadow: '0 2px 12px #0003', marginTop: 10 }}>
                  <source src="/videos/downloadmapandmod.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              {/* Step 2 & 3 Combined */}
              <div style={{ background: '#23284a', borderRadius: 14, boxShadow: '0 2px 12px #0002', padding: '28px 32px', display: 'flex', flexDirection: 'column', gap: 12 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                  <span style={{ fontSize: 32, color: '#00e0ff' }}>📂</span>
                  <span style={{ fontWeight: 700, fontSize: '1.18rem' }}>
                    Move <span style={{ color: '#ffe066' }}>Kek Mod v1.4</span> (unzipped) to your <span style={{ color: '#00e0ff' }}>DLC</span> folder<br/>
                    And Move <span style={{ color: '#ffe066' }}>Map script</span> (unzipped) to your <span style={{ color: '#00e0ff' }}>Mapfolder</span><br/>
                    Then Run <span style={{ color: '#ffe066' }}>UI_Batch</span> file
                  </span>
                </div>
                <span style={{ fontSize: '1.05rem', color: '#b0b0b0', marginLeft: 48 }}>
                  Make sure you don't have other mods in the folder except <span style={{ color: '#ffe066' }}>EUI 1.28</span> or older.<br/>
                  (This is for anti-cheat and to enable features like pausing the game and more!)
                </span>
                <video controls style={{ maxWidth: 700, width: '100%', borderRadius: 12, boxShadow: '0 2px 12px #0003', marginTop: 10 }}>
                  <source src="/videos/installguide.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              {/* Step 4 */}
              <div style={{ background: '#23284a', borderRadius: 14, boxShadow: '0 2px 12px #0002', padding: '28px 32px', display: 'flex', flexDirection: 'column', gap: 12 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                  <span style={{ fontSize: 32, color: '#00e07a' }}>✅</span>
                  <span style={{ fontWeight: 700, fontSize: '1.18rem' }}>All done! Try it out in Singleplayer</span>
                </div>
                <span style={{ fontSize: '1.05rem', color: '#b0b0b0', marginLeft: 48 }}>Restart Civ 5 and load a single player game. You should now see extra UI options!</span>
                <img src="/images/ingamescreenshot.png" alt="In-game screenshot" style={{ maxWidth: 700, width: '100%', borderRadius: 12, boxShadow: '0 2px 12px #0003', marginTop: 10 }} />
              </div>
            </div>
          </div>
        )}
        {activeTab[0] === 2 && activeTab[1] === 1 && (
          <div style={{ width: '100%', maxWidth: 700, display: 'flex', flexDirection: 'column', alignItems: 'flex-start', fontFamily: 'Segoe UI, Arial, sans-serif' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 800, color: '#ff5e5e', marginBottom: 18 }}>Uninstall Guide</h2>
            <div style={{ background: '#23284a', borderRadius: 14, boxShadow: '0 2px 12px #0002', padding: '28px 32px', display: 'flex', flexDirection: 'column', gap: 12, width: '100%' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 8 }}>
                <span style={{ fontSize: 32, color: '#ff5e5e' }}>🗑️</span>
                <span style={{ fontWeight: 700, fontSize: '1.15rem' }}>Delete <span style={{ color: '#ffe066' }}>Kekmod</span> files from your <span style={{ color: '#00e0ff' }}>DLC</span> folder</span>
              </div>
              <ol style={{ fontSize: '1.08rem', color: '#fff', marginLeft: 32, marginBottom: 0 }}>
                <li>Open your <span style={{ color: '#00e0ff' }}>Civilization V</span> Mods folder.</li>
                <li>Delete the <span style={{ color: '#ffe066' }}>kekmod</span> files from the folder.</li>
                <li>Restart Civilization V if it was running.</li>
              </ol>
              <video controls style={{ maxWidth: 700, width: '100%', borderRadius: 12, boxShadow: '0 2px 12px #0003', marginTop: 16 }}>
                <source src="/videos/uninstall.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div style={{ background: '#1e2a1e', color: '#b0ffb0', borderRadius: 8, padding: '12px 20px', marginTop: 18, fontWeight: 600, fontSize: '1.12rem', display: 'flex', alignItems: 'center', gap: 10 }}>
                <span style={{ fontSize: 22 }}>✅</span> That's all! You are all set and back to normal.
              </div>
            </div>
          </div>
        )}
        {activeTab[0] === 3 && (
          <div style={{ maxWidth: 900, fontFamily: 'Segoe UI, Arial, sans-serif', margin: '0 auto' }}>
            <h2 style={{ color: '#00e0ff', fontWeight: 900, fontSize: '2.3rem', marginBottom: 32, letterSpacing: '-1px', textShadow: '0 2px 12px #0006' }}>Community & Gameplay Rules</h2>
            {/* Community Rules */}
            <div style={{ marginBottom: 48, background: 'linear-gradient(90deg, #23284a 80%, #1a223a 100%)', borderRadius: 18, boxShadow: '0 4px 24px #0003', padding: '32px 36px' }}>
              <h3 style={{ color: '#ffe066', fontWeight: 800, fontSize: '1.5rem', marginBottom: 18, letterSpacing: '-0.5px', textShadow: '0 1px 6px #0004' }}>Community Rules</h3>
              <ol style={{ paddingLeft: 20, marginBottom: 0 }}>
                <li style={{ marginBottom: 18, fontSize: '1.13rem', lineHeight: 1.6 }}><span style={{ fontSize: 22, marginRight: 8 }}>🗣️</span> <b style={{ color: '#00e0ff' }}>Free Speech & Harassment</b>
                  <ul style={{ marginTop: 8, marginLeft: 0, paddingLeft: 24, color: '#fff' }}>
                    <li>Free speech and diverse opinions are valued. Insults and disagreements are allowed, but <b style={{ color: '#ff5e5e' }}>serious violent speech is not tolerated</b> (e.g., threats, calls for harm).</li>
                    <li>Harassment is prohibited, whether in public channels, games, or private DMs. This includes doxxing, stalking, or sharing personal information to intimidate.</li>
                  </ul>
                </li>
                <li style={{ marginBottom: 18, fontSize: '1.13rem', lineHeight: 1.6 }}><span style={{ fontSize: 22, marginRight: 8 }}>⚖️</span> <b style={{ color: '#00e0ff' }}>Fair Play & Integrity</b>
                  <ul style={{ marginTop: 8, marginLeft: 0, paddingLeft: 24, color: '#fff' }}>
                    <li>Malicious interference with democratic processes is forbidden.</li>
                    <li>You may only use one Discord account on this server.</li>
                  </ul>
                </li>
                <li style={{ marginBottom: 0, fontSize: '1.13rem', lineHeight: 1.6 }}><span style={{ fontSize: 22, marginRight: 8 }}>🎥</span> <b style={{ color: '#00e0ff' }}>Privacy & Streaming</b>
                  <ul style={{ marginTop: 8, marginLeft: 0, paddingLeft: 24, color: '#fff' }}>
                    <li>Stream viewers must not relay in-game information to other players (no stream sniping).</li>
                  </ul>
                </li>
              </ol>
            </div>
            {/* Gameplay Rules */}
            <div style={{ background: 'linear-gradient(90deg, #23284a 80%, #1a223a 100%)', borderRadius: 18, boxShadow: '0 4px 24px #0003', padding: '32px 36px' }}>
              <h3 style={{ color: '#ffe066', fontWeight: 800, fontSize: '1.5rem', marginBottom: 18, letterSpacing: '-0.5px', textShadow: '0 1px 6px #0004' }}>Gameplay Rules</h3>
              <ol style={{ paddingLeft: 20, marginBottom: 0 }}>
                <li style={{ marginBottom: 18, fontSize: '1.13rem', lineHeight: 1.6 }}><span style={{ fontSize: 22, marginRight: 8 }}>🏆</span> <b style={{ color: '#00e0ff' }}>Victory & Gameplay Conduct</b>
                  <ul style={{ marginTop: 8, marginLeft: 0, paddingLeft: 24, color: '#fff' }}>
                    <li>Play for your own victory. Do not suicide into a neighbor just to lose your capital. Do not remove military units in order to lose your capital.</li>
                    <li>Pregame collusion is not allowed.</li>
                    <li>If you lose your capital, you may leave.</li>
                    <li>You may request to leave by declaring yourself irrelevant (irr). All but one must agree via in-game voting. Manipulations with voting are prohibited (bargaining for a vote, giving ultimatums, etc.).</li>
                    <li>Do not incorrectly cancel a game or incorrectly record a winner.</li>
                  </ul>
                </li>
                <li style={{ marginBottom: 18, fontSize: '1.13rem', lineHeight: 1.6 }}><span style={{ fontSize: 22, marginRight: 8 }}>🔁</span> <b style={{ color: '#00e0ff' }}>Restarts & Technical Rules</b>
                  <ul style={{ marginTop: 8, marginLeft: 0, paddingLeft: 24, color: '#fff' }}>
                    <li>Remaps are allowed. The first remap of the game requires 4 pluses in chat, then 5 and 6 respectively. Remaps may be up to and including turn 10.</li>
                    <li>A technical restart is possible up to and including turn 20, if the capitals of two players are within 7 tiles of each other (6 tiles between caps). The consent of one of the players is sufficient for a restart.</li>
                    <li>Scraps must be unanimous.</li>
                    <li>Timer resets require lobby consent unless you are attacked in the last 10 seconds.</li>
                    <li>Don't reset timers for paradropping unless a rejoin happens with discussion.</li>
                    <li>Don't reset turns or load previous turns for advantage.</li>
                    <li>When reloading a save, repeat actions as accurately as possible.</li>
                    <li>No settling your first settler more than 5 hexes from start.</li>
                  </ul>
                </li>
                <li style={{ marginBottom: 18, fontSize: '1.13rem', lineHeight: 1.6 }}><span style={{ fontSize: 22, marginRight: 8 }}>🧠</span> <b style={{ color: '#00e0ff' }}>Fair Use of Game Mechanics</b>
                  <ul style={{ marginTop: 8, marginLeft: 0, paddingLeft: 24, color: '#fff' }}>
                    <li>No exploiting bugs, cheats, shift-moves.</li>
                    <li>No use of EUI with enhanced demographics or use of the aircombot mod.</li>
                    <li>No city trading to prevent capture.</li>
                    <li>No plunder/repair loops or splitting caravan gold.</li>
                    <li>No farming XP on city-states unless they declared war on you with their ally.</li>
                    <li>No repeatedly declaring peace/war with city-states to capture them.</li>
                    <li>No ruining great tile improvements (academies, manufactories, etc.) before dying.</li>
                    <li>No blocking sea tiles with workers during war.</li>
                  </ul>
                </li>
                <li style={{ marginBottom: 0, fontSize: '1.13rem', lineHeight: 1.6 }}><span style={{ fontSize: 22, marginRight: 8 }}>📜</span> <b style={{ color: '#00e0ff' }}>Lobby Conduct</b>
                  <ul style={{ marginTop: 8, marginLeft: 0, paddingLeft: 24, color: '#fff' }}>
                    <li>No kicking unless unanimously agreed due to hacks, spam, or timer abuse.</li>
                    <li>No incorrect game scraps or victory declarations.</li>
                  </ul>
                </li>
              </ol>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}


export default App;
