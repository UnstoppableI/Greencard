import React from 'react';

function CapsuleSection() {
  const capsuleStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '340px',
    height: '32px',
    backgroundColor: '#09893833',
    borderRadius: '16px',
    margin: '20px auto'
  };

  const columnStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '50%'
  };

  const highlightedColumnStyle = {
    ...columnStyle,
    backgroundColor: '#f0f0f0'
  };

  const linkStyle = {
    
    textDecoration: 'none',
    color: '#000'
  };

  return (
    <div style={capsuleStyle}>
      <div style={highlightedColumnStyle}>
        <a href="https://example.com" style={linkStyle}>
          🎉 Announcement
        </a>
      </div>
      <div style={columnStyle}>
        <a href="https://example.com" style={linkStyle}>
          Introucing EB1 Copilot
        </a>
      </div>
    </div>
  );
}

export default CapsuleSection;
