import React from 'react';
import { Agent } from '../types';
import { AgentAvatar } from './AgentAvatar';
import { AgentStatus } from './AgentStatus';

export interface AgentCardProps {
  agent: Agent;
  onClick?: (agent: Agent) => void;
  className?: string;
}

/**
 * AgentCard - Display detailed information about an AI agent
 */
export const AgentCard: React.FC<AgentCardProps> = ({
  agent,
  onClick,
  className = '',
}) => {
  const cardStyle: React.CSSProperties = {
    border: '1px solid #e2e8f0',
    borderRadius: '8px',
    padding: '16px',
    backgroundColor: 'white',
    cursor: onClick ? 'pointer' : 'default',
    transition: 'box-shadow 0.2s, transform 0.2s',
  };

  const headerStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    marginBottom: '12px',
  };

  const contentStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  };

  const nameStyle: React.CSSProperties = {
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#1e293b',
    margin: 0,
  };

  const descriptionStyle: React.CSSProperties = {
    fontSize: '14px',
    color: '#64748b',
    margin: 0,
  };

  const capabilitiesStyle: React.CSSProperties = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '6px',
    marginTop: '8px',
  };

  const capabilityTagStyle: React.CSSProperties = {
    padding: '4px 8px',
    backgroundColor: '#f1f5f9',
    borderRadius: '4px',
    fontSize: '12px',
    color: '#475569',
  };

  const lastActiveStyle: React.CSSProperties = {
    fontSize: '12px',
    color: '#94a3b8',
    marginTop: '8px',
  };

  const handleClick = () => {
    if (onClick) {
      onClick(agent);
    }
  };

  const formatLastActive = (date?: Date) => {
    if (!date) return 'Never';
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    const minutes = Math.floor(diff / 60000);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (minutes < 1) return 'Just now';
    if (minutes < 60) return `${minutes}m ago`;
    if (hours < 24) return `${hours}h ago`;
    return `${days}d ago`;
  };

  return (
    <div
      style={cardStyle}
      className={`agent-card ${className}`}
      onClick={handleClick}
      onMouseEnter={(e) => {
        if (onClick) {
          e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
          e.currentTarget.style.transform = 'translateY(-2px)';
        }
      }}
      onMouseLeave={(e) => {
        if (onClick) {
          e.currentTarget.style.boxShadow = 'none';
          e.currentTarget.style.transform = 'translateY(0)';
        }
      }}
    >
      <div style={headerStyle}>
        <AgentAvatar name={agent.name} avatar={agent.avatar} status={agent.status} />
        <div style={contentStyle}>
          <h3 style={nameStyle}>{agent.name}</h3>
          <AgentStatus status={agent.status} />
        </div>
      </div>

      {agent.description && <p style={descriptionStyle}>{agent.description}</p>}

      {agent.capabilities && agent.capabilities.length > 0 && (
        <div style={capabilitiesStyle}>
          {agent.capabilities.map((capability, index) => (
            <span key={index} style={capabilityTagStyle}>
              {capability}
            </span>
          ))}
        </div>
      )}

      {agent.lastActive && (
        <div style={lastActiveStyle}>Last active: {formatLastActive(agent.lastActive)}</div>
      )}
    </div>
  );
};
