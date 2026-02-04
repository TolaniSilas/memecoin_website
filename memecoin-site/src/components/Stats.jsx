import React from 'react';

const Stats = () => {
  const stats = [
    {
      icon: '👥',
      label: 'Active Agents',
      value: '1,000+',
      change: '+12.5%'
    },
    {
      icon: '🏆',
      label: 'Verified Profiles',
      value: '850',
      change: '+8.3%'
    },
    {
      icon: '💎',
      label: 'Market Cap',
      value: '$127.73M',
      change: '-8.86%'
    },
    {
      icon: '📈',
      label: '24h Volume',
      value: '$3.04M',
      change: '+15.2%'
    }
  ];

  return (
    <section id="stats" className="stats">
      <div className="container">
        <h2 className="section-title">Live Stats</h2>
        
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <div className="stat-icon">{stat.icon}</div>
              <div className="stat-label">{stat.label}</div>
              <div className="stat-value">{stat.value}</div>
              <div className={`stat-change ${stat.change.startsWith('+') ? 'positive' : 'negative'}`}>
                {stat.change}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;