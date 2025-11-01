import React from 'react';
import { AgentStatus } from '../types';

export interface AgentAvatarProps {
  name: string;
  avatar?: string;
  status?: AgentStatus;
  size?: 'small' | 'medium' | 'large';
  className?: string;
}

/**
 * AgentAvatar - Display an agent's avatar with status indicator
 */
export const AgentAvatar: React.FC<AgentAvatarProps> = ({
  name,
  avatar,
  status = 'idle',
  size = 'medium',
  className = '',
}) => {
  const statusColors = {
    active: '#4ade80',
    idle: '#94a3b8',
    processing: '#fbbf24',
    offline: '#64748b',
    error: '#ef4444',
  };

  const avatarStyle: React.CSSProperties = {
    position: 'relative',
    display: 'inline-block',
    borderRadius: '50%',
    overflow: 'hidden',
    backgroundColor: '#e2e8f0',
  };

  const imgStyle: React.CSSProperties = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  };

  const initialsStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    fontSize: size === 'small' ? '12px' : size === 'medium' ? '16px' : '24px',
    fontWeight: 'bold',
    color: '#475569',
  };

  const statusIndicatorStyle: React.CSSProperties = {
    position: 'absolute',
    bottom: '2px',
    right: '2px',
    width: size === 'small' ? '8px' : size === 'medium' ? '12px' : '16px',
    height: size === 'small' ? '8px' : size === 'medium' ? '12px' : '16px',
    borderRadius: '50%',
    backgroundColor: statusColors[status],
    border: '2px solid white',
  };

  const containerStyle: React.CSSProperties = {
    ...avatarStyle,
    width: size === 'small' ? '32px' : size === 'medium' ? '48px' : '64px',
    height: size === 'small' ? '32px' : size === 'medium' ? '48px' : '64px',
  };

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <div style={containerStyle} className={`agent-avatar ${className}`}>
      {avatar ? (
        <img src={avatar} alt={name} style={imgStyle} />
      ) : (
        <div style={initialsStyle}>{getInitials(name)}</div>
      )}
      <div style={statusIndicatorStyle} className="status-indicator" />
    </div>
  );
};
