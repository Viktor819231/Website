import React, { useState, useEffect } from 'react';
import { database } from './firebase';
import { ref, onValue } from 'firebase/database';
import './Botstatus.css';

function Botstatus() {
  const [botData, setBotData] = useState(null);
  const [lastUpdate, setLastUpdate] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [timeRange, setTimeRange] = useState('24h'); // '24h', '7d', '30d'

  // Function to fetch data from Firebase
  const fetchBotData = () => {
    try {
      const botStatsRef = ref(database, 'bot-stats');
      
      onValue(botStatsRef, (snapshot) => {
        const data = snapshot.val();
        if (data) {
          setBotData(data);
          setLastUpdate(new Date().toLocaleString());
          setLoading(false);
          setError(null);
        } else {
          setError('No data available');
          setLoading(false);
        }
      }, (error) => {
        setError(error.message);
        setLoading(false);
      });
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    // Initial fetch
    fetchBotData();

    // Set up polling every 2 minutes (120000 milliseconds)
    const interval = setInterval(() => {
      fetchBotData();
    }, 120000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  // Helper function to get bot status (green < 2min, yellow < 5min, red otherwise)
  const getBotStatus = (lastPing) => {
    if (!lastPing) return 'offline';
    const lastPingTime = new Date(lastPing).getTime();
    const now = new Date().getTime();
    const diff = now - lastPingTime;
    const twoMinutes = 2 * 60 * 1000;
    const fiveMinutes = 5 * 60 * 1000;
    
    if (diff < twoMinutes) return 'online';
    if (diff < fiveMinutes) return 'warning';
    return 'offline';
  };

  // Helper function to format date
  const formatDate = (dateString) => {
    if (!dateString) return 'N/A';
    return new Date(dateString).toLocaleString();
  };

  // Helper function to format timestamp from history
  const formatTimestamp = (timestamp) => {
    if (!timestamp || timestamp === 'NULL') return 'N/A';
    const date = new Date(parseInt(timestamp) * 1000);
    return date.toLocaleString();
  };

  // Generate activity timeline data for selected time range
  const generateTimeline = (history) => {
    if (!history) return [];
    
    const now = Date.now();
    const timeRanges = {
      '24h': 24 * 60 * 60 * 1000,
      '7d': 7 * 24 * 60 * 60 * 1000,
      '30d': 30 * 24 * 60 * 60 * 1000
    };
    const rangeAgo = now - timeRanges[timeRange];
    const timeline = [];
    
    Object.keys(history).forEach(timestamp => {
      if (timestamp !== 'NULL') {
        const time = parseInt(timestamp) * 1000;
        if (time > rangeAgo) {
          timeline.push({ time, player: history[timestamp] });
        }
      }
    });
    
    return timeline.sort((a, b) => a.time - b.time);
  };

  // Create activity graph bars for selected time range
  const createActivityGraph = (history) => {
    const now = Date.now();
    const timeRanges = {
      '24h': { duration: 24 * 60 * 60 * 1000, segments: 24 },
      '7d': { duration: 7 * 24 * 60 * 60 * 1000, segments: 28 },
      '30d': { duration: 30 * 24 * 60 * 60 * 1000, segments: 30 }
    };
    
    const { duration, segments } = timeRanges[timeRange];
    const segmentDuration = duration / segments;
    const activityCount = new Array(segments).fill(0);
    
    if (history) {
      Object.keys(history).forEach(timestamp => {
        if (timestamp !== 'NULL') {
          const time = parseInt(timestamp) * 1000;
          const age = now - time;
          if (age < duration && age > 0) {
            const segmentIndex = Math.floor(age / segmentDuration);
            if (segmentIndex >= 0 && segmentIndex < segments) {
              activityCount[segments - 1 - segmentIndex]++;
            }
          }
        }
      });
    }
    
    return activityCount;
  };

  // Get time label for graph based on range
  const getTimeLabel = (index, totalSegments) => {
    if (timeRange === '24h') {
      return `${totalSegments - index}h`;
    } else if (timeRange === '7d') {
      const hoursAgo = ((totalSegments - index) * 7 * 24) / totalSegments;
      if (hoursAgo >= 24) {
        return `${Math.round(hoursAgo / 24)}d`;
      }
      return `${Math.round(hoursAgo)}h`;
    } else { // 30d
      return `${Math.round(30 - (index * 30 / totalSegments))}d`;
    }
  };

  // Get readable time range label
  const getTimeRangeLabel = () => {
    switch(timeRange) {
      case '24h': return 'Last 24 Hours';
      case '7d': return 'Last 7 Days';
      case '30d': return 'Last 30 Days';
      default: return 'Last 24 Hours';
    }
  };

  if (loading) {
    return (
      <div className="botstatus-container">
        <div className="loading">Loading bot status...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="botstatus-container">
        <div className="error">Error: {error}</div>
      </div>
    );
  }

  return (
    <div className="botstatus-container">
      <div className="header">
        <h1>Bot Status Dashboard</h1>
        <div className="last-update">Last Updated: {lastUpdate}</div>
        <div className="auto-refresh">Auto-refreshes every 2 minutes</div>
        
        <div className="time-range-toggle">
          <button 
            className={timeRange === '24h' ? 'active' : ''} 
            onClick={() => setTimeRange('24h')}
          >
            24 Hours
          </button>
          <button 
            className={timeRange === '7d' ? 'active' : ''} 
            onClick={() => setTimeRange('7d')}
          >
            7 Days
          </button>
          <button 
            className={timeRange === '30d' ? 'active' : ''} 
            onClick={() => setTimeRange('30d')}
          >
            30 Days
          </button>
        </div>
      </div>

      <div className="bots-grid">
        {botData && Object.entries(botData)
          .sort(([, botA], [, botB]) => {
            // Sort by status first (online > warning > offline)
            const statusA = getBotStatus(botA.stats?.lastPing);
            const statusB = getBotStatus(botB.stats?.lastPing);
            const statusOrder = { online: 0, warning: 1, offline: 2 };
            
            if (statusOrder[statusA] !== statusOrder[statusB]) {
              return statusOrder[statusA] - statusOrder[statusB];
            }
            
            // Then sort by most recent ping time
            const timeA = botA.stats?.lastPing ? new Date(botA.stats.lastPing).getTime() : 0;
            const timeB = botB.stats?.lastPing ? new Date(botB.stats.lastPing).getTime() : 0;
            return timeB - timeA;
          })
          .map(([botId, bot]) => {
            const status = getBotStatus(bot.stats?.lastPing);
            const activityData = createActivityGraph(bot.history);
            const timeline = generateTimeline(bot.history);
            const maxActivity = Math.max(...activityData, 1);
            
            return (
              <div key={botId} className={`bot-card ${status}`}>
                <div className="bot-header">
                  <div className="bot-title">
                    <h2>{bot.info?.region || 'Unknown Region'}</h2>
                    <span className="bot-id">{botId}</span>
                  </div>
                  <span className={`status-indicator ${status}`}>
                    ● {status === 'online' ? 'ONLINE' : status === 'warning' ? 'IDLE' : 'OFFLINE'}
                  </span>
                </div>

                <div className="bot-content">
                  <div className="left-section">
                    <div className="bot-info">
                      <div className="info-row">
                        <span className="label">Bot Name:</span>
                        <span className="value">{bot.info?.botName || 'N/A'}</span>
                      </div>
                      
                      <div className="info-row">
                        <span className="label">Last Ping:</span>
                        <span className="value">{formatDate(bot.stats?.lastPing)}</span>
                      </div>
                      
                      <div className="info-row">
                        <span className="label">Last Relobby:</span>
                        <span className="value">{formatDate(bot.stats?.lastRelobby)}</span>
                      </div>
                      
                      <div className="info-row">
                        <span className="label">Last Game Start:</span>
                        <span className="value">{formatDate(bot.stats?.lastGameStart)}</span>
                      </div>
                      
                      <div className="info-row">
                        <span className="label">Registered:</span>
                        <span className="value">{formatDate(bot.info?.registeredAt)}</span>
                      </div>
                    </div>

                    <div className="activity-section">
                      <h3>Activity Timeline ({getTimeRangeLabel()})</h3>
                      <div className="activity-graph">
                        {activityData.map((count, index) => {
                          const timeLabel = getTimeLabel(index, activityData.length);
                          return (
                            <div key={index} className="activity-bar-container">
                              <div 
                                className="activity-bar"
                                style={{ 
                                  height: `${(count / maxActivity) * 100}%`,
                                  opacity: count === 0 ? 0.2 : 1
                                }}
                                title={`${timeLabel} ago: ${count} connection${count !== 1 ? 's' : ''}`}
                              />
                              <div className="bar-label">{count > 0 ? count : ''}</div>
                              <div className="bar-time">{timeLabel}</div>
                            </div>
                          );
                        })}
                      </div>
                      <div className="graph-labels">
                        <span>{getTimeRangeLabel()} ago</span>
                        <span>Now</span>
                      </div>
                    </div>
                  </div>

                  {bot.history && Object.keys(bot.history).length > 0 && (
                    <div className="connected-players">
                      <h3>Players Connected ({timeline.length} in {timeRange === '24h' ? 'last 24h' : timeRange === '7d' ? 'last 7d' : 'last 30d'})</h3>
                      <div className="players-list">
                        {timeline.length > 0 ? (
                          timeline.map((entry, index) => (
                            <div key={index} className="player-entry">
                              <span className="player-name">{entry.player}</span>
                              <span className="player-time">{formatTimestamp(entry.time / 1000)}</span>
                            </div>
                          ))
                        ) : (
                          <div className="no-players">No recent player activity</div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Botstatus;
