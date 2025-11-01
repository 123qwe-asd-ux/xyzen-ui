import React from 'react';
import { Agent } from '../types';
import { AgentCard } from './AgentCard';

export interface AgentListProps {
  agents: Agent[];
  onAgentClick?: (agent: Agent) => void;
  emptyMessage?: string;
  className?: string;
}

/**
 * AgentList - Display a list of AI agents
 */
export const AgentList: React.FC<AgentListProps> = ({
  agents,
  onAgentClick,
  emptyMessage = 'No agents available',
  className = '',
}) => {
  const containerStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: '16px',
    width: '100%',
  };

  const emptyStyle: React.CSSProperties = {
    padding: '40px',
    textAlign: 'center',
    color: '#94a3b8',
    fontSize: '16px',
  };

  if (agents.length === 0) {
    return (
      <div style={emptyStyle} className={`agent-list-empty ${className}`}>
        {emptyMessage}
      </div>
    );
  }

  return (
    <div style={containerStyle} className={`agent-list ${className}`}>
      {agents.map((agent) => (
        <AgentCard key={agent.id} agent={agent} onClick={onAgentClick} />
      ))}
    </div>
  );
};
