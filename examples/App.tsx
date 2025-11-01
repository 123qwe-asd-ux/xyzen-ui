import React, { useState } from 'react';
import {
  AgentAvatar,
  AgentCard,
  AgentList,
  AgentChat,
  AgentStatus,
  Agent,
  ChatMessage,
} from '../src';

// Example data
const exampleAgents: Agent[] = [
  {
    id: '1',
    name: 'Assistant AI',
    description: 'General-purpose AI assistant that can help with various tasks',
    status: 'active',
    capabilities: ['Text Generation', 'Code Writing', 'Analysis'],
    lastActive: new Date(Date.now() - 300000), // 5 minutes ago
  },
  {
    id: '2',
    name: 'Code Helper',
    description: 'Specialized AI for coding tasks and technical support',
    status: 'processing',
    capabilities: ['Code Review', 'Debugging', 'Documentation'],
    lastActive: new Date(Date.now() - 60000), // 1 minute ago
  },
  {
    id: '3',
    name: 'Data Analyst',
    description: 'AI agent focused on data analysis and insights',
    status: 'idle',
    capabilities: ['Data Processing', 'Visualization', 'Reporting'],
    lastActive: new Date(Date.now() - 3600000), // 1 hour ago
  },
  {
    id: '4',
    name: 'Research Bot',
    description: 'AI for research and information gathering',
    status: 'offline',
    capabilities: ['Web Search', 'Summarization', 'Citation'],
    lastActive: new Date(Date.now() - 86400000), // 1 day ago
  },
];

const exampleMessages: ChatMessage[] = [
  {
    id: '1',
    agentId: '1',
    content: 'Hello! How can I help you today?',
    timestamp: new Date(Date.now() - 120000),
    role: 'agent',
  },
  {
    id: '2',
    content: 'I need help with my React project',
    timestamp: new Date(Date.now() - 90000),
    role: 'user',
  },
  {
    id: '3',
    agentId: '1',
    content: "I'd be happy to help with your React project! What specific issue are you facing?",
    timestamp: new Date(Date.now() - 60000),
    role: 'agent',
  },
];

/**
 * Example React Application demonstrating the Xyzen UI components
 */
export const App: React.FC = () => {
  const [selectedAgent, setSelectedAgent] = useState<Agent>(exampleAgents[0]);
  const [messages, setMessages] = useState<ChatMessage[]>(exampleMessages);

  const handleSendMessage = (content: string) => {
    const newMessage: ChatMessage = {
      id: `msg-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      content,
      timestamp: new Date(),
      role: 'user',
    };
    setMessages([...messages, newMessage]);

    // Simulate agent response
    setTimeout(() => {
      const agentResponse: ChatMessage = {
        id: `msg-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
        agentId: selectedAgent.id,
        content: 'This is a simulated response from the AI agent.',
        timestamp: new Date(),
        role: 'agent',
      };
      setMessages((prev) => [...prev, agentResponse]);
    }, 1000);
  };

  const handleAgentClick = (agent: Agent) => {
    setSelectedAgent(agent);
    setMessages([]); // Clear messages when switching agents
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Xyzen UI Component Library - Examples</h1>

      <section style={{ marginBottom: '40px' }}>
        <h2>Agent Avatars</h2>
        <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
          <AgentAvatar name="John Doe" status="active" size="small" />
          <AgentAvatar name="Jane Smith" status="processing" size="medium" />
          <AgentAvatar name="AI Assistant" status="idle" size="large" />
        </div>
      </section>

      <section style={{ marginBottom: '40px' }}>
        <h2>Agent Status Indicators</h2>
        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
          <AgentStatus status="active" />
          <AgentStatus status="idle" />
          <AgentStatus status="processing" />
          <AgentStatus status="offline" />
          <AgentStatus status="error" />
        </div>
      </section>

      <section style={{ marginBottom: '40px' }}>
        <h2>Agent List</h2>
        <AgentList agents={exampleAgents} onAgentClick={handleAgentClick} />
      </section>

      <section style={{ marginBottom: '40px' }}>
        <h2>Agent Chat</h2>
        <AgentChat
          agent={selectedAgent}
          messages={messages}
          onSendMessage={handleSendMessage}
        />
      </section>
    </div>
  );
};

export default App;
