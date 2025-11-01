import React from 'react';
import { AgentStatus as AgentStatusType } from '../types';

export interface AgentStatusProps {
  status: AgentStatusType;
  showLabel?: boolean;
  className?: string;
}

/**
 * AgentStatus - Display the current status of an agent
 */
export const AgentStatus: React.FC<AgentStatusProps> = ({
  status,
  showLabel = true,
  className = '',
}) => {
  const statusConfig = {
    active: { label: 'Active', color: '#4ade80', icon: '●' },
    idle: { label: 'Idle', color: '#94a3b8', icon: '○' },
    processing: { label: 'Processing', color: '#fbbf24', icon: '◐' },
    offline: { label: 'Offline', color: '#64748b', icon: '○' },
    error: { label: 'Error', color: '#ef4444', icon: '⚠' },
  };

  const config = statusConfig[status];

  const containerStyle: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '6px',
    fontSize: '14px',
  };

  const dotStyle: React.CSSProperties = {
    color: config.color,
    fontSize: '16px',
    lineHeight: '1',
  };

  const labelStyle: React.CSSProperties = {
    color: '#334155',
    fontWeight: 500,
  };

  return (
    <div style={containerStyle} className={`agent-status ${className}`}>
      <span style={dotStyle}>{config.icon}</span>
      {showLabel && <span style={labelStyle}>{config.label}</span>}
    </div>
  );
};
