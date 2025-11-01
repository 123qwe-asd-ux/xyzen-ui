/**
 * Represents the status of an AI agent
 */
export type AgentStatus = 'active' | 'idle' | 'processing' | 'offline' | 'error';

/**
 * Represents an AI agent
 */
export interface Agent {
  id: string;
  name: string;
  description?: string;
  status: AgentStatus;
  avatar?: string;
  capabilities?: string[];
  lastActive?: Date;
  metadata?: Record<string, any>;
}

/**
 * Represents a message in the chat
 */
export interface ChatMessage {
  id: string;
  agentId?: string;
  content: string;
  timestamp: Date;
  role: 'user' | 'agent' | 'system';
}
