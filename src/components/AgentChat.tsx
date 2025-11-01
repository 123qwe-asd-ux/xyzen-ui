import React, { useState } from 'react';
import { Agent, ChatMessage } from '../types';
import { AgentAvatar } from './AgentAvatar';

export interface AgentChatProps {
  agent: Agent;
  messages: ChatMessage[];
  onSendMessage?: (content: string) => void;
  className?: string;
}

/**
 * AgentChat - Chat interface for interacting with an AI agent
 */
export const AgentChat: React.FC<AgentChatProps> = ({
  agent,
  messages,
  onSendMessage,
  className = '',
}) => {
  const [inputValue, setInputValue] = useState('');

  const containerStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    height: '500px',
    border: '1px solid #e2e8f0',
    borderRadius: '8px',
    backgroundColor: 'white',
    overflow: 'hidden',
  };

  const headerStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    padding: '16px',
    borderBottom: '1px solid #e2e8f0',
    backgroundColor: '#f8fafc',
  };

  const headerInfoStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
  };

  const agentNameStyle: React.CSSProperties = {
    fontSize: '16px',
    fontWeight: 'bold',
    color: '#1e293b',
  };

  const agentStatusStyle: React.CSSProperties = {
    fontSize: '12px',
    color: '#64748b',
  };

  const messagesContainerStyle: React.CSSProperties = {
    flex: 1,
    overflowY: 'auto',
    padding: '16px',
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  };

  const messageStyle = (role: string): React.CSSProperties => ({
    display: 'flex',
    gap: '8px',
    alignItems: 'flex-start',
    flexDirection: role === 'user' ? 'row-reverse' : 'row',
  });

  const messageBubbleStyle = (role: string): React.CSSProperties => ({
    padding: '12px 16px',
    borderRadius: '12px',
    maxWidth: '70%',
    backgroundColor: role === 'user' ? '#3b82f6' : '#f1f5f9',
    color: role === 'user' ? 'white' : '#1e293b',
    fontSize: '14px',
    wordWrap: 'break-word',
  });

  const timestampStyle: React.CSSProperties = {
    fontSize: '11px',
    color: '#94a3b8',
    marginTop: '4px',
  };

  const inputContainerStyle: React.CSSProperties = {
    display: 'flex',
    gap: '8px',
    padding: '16px',
    borderTop: '1px solid #e2e8f0',
  };

  const inputStyle: React.CSSProperties = {
    flex: 1,
    padding: '12px',
    border: '1px solid #e2e8f0',
    borderRadius: '6px',
    fontSize: '14px',
    outline: 'none',
  };

  const buttonStyle: React.CSSProperties = {
    padding: '12px 24px',
    backgroundColor: '#3b82f6',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    fontSize: '14px',
    fontWeight: 500,
    cursor: 'pointer',
    transition: 'background-color 0.2s',
  };

  const buttonDisabledStyle: React.CSSProperties = {
    ...buttonStyle,
    backgroundColor: '#94a3b8',
    cursor: 'not-allowed',
    opacity: 0.6,
  };

  const handleSend = () => {
    if (inputValue.trim() && onSendMessage) {
      onSendMessage(inputValue.trim());
      setInputValue('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const formatTime = (date: Date) => {
    return new Date(date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div style={containerStyle} className={`agent-chat ${className}`}>
      <div style={headerStyle}>
        <AgentAvatar name={agent.name} avatar={agent.avatar} status={agent.status} size="small" />
        <div style={headerInfoStyle}>
          <div style={agentNameStyle}>{agent.name}</div>
          <div style={agentStatusStyle}>{agent.status}</div>
        </div>
      </div>

      <div style={messagesContainerStyle}>
        {messages.map((message) => (
          <div key={message.id} style={messageStyle(message.role)}>
            {message.role === 'agent' && (
              <AgentAvatar
                name={agent.name}
                avatar={agent.avatar}
                status={agent.status}
                size="small"
              />
            )}
            <div>
              <div style={messageBubbleStyle(message.role)}>{message.content}</div>
              <div style={timestampStyle}>{formatTime(message.timestamp)}</div>
            </div>
          </div>
        ))}
      </div>

      <div style={inputContainerStyle}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Type a message..."
          style={inputStyle}
          aria-label="Message input"
          aria-describedby="chat-input-description"
        />
        <button
          onClick={handleSend}
          disabled={!inputValue.trim()}
          style={inputValue.trim() ? buttonStyle : buttonDisabledStyle}
          aria-label="Send message"
        >
          Send
        </button>
      </div>
    </div>
  );
};
