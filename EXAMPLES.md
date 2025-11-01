# Xyzen UI - Quick Start Examples

## Basic Agent Display

```tsx
import React from 'react';
import { AgentCard, Agent } from 'xyzen-ui';

function MyApp() {
  const agent: Agent = {
    id: '1',
    name: 'Assistant AI',
    description: 'Your helpful AI assistant',
    status: 'active',
    capabilities: ['Chat', 'Code', 'Analysis'],
    lastActive: new Date(),
  };

  return (
    <AgentCard 
      agent={agent} 
      onClick={(agent) => alert(`Clicked ${agent.name}`)} 
    />
  );
}
```

## Agent List with Multiple Agents

```tsx
import React from 'react';
import { AgentList, Agent } from 'xyzen-ui';

function AgentDashboard() {
  const agents: Agent[] = [
    {
      id: '1',
      name: 'Assistant AI',
      status: 'active',
      capabilities: ['Chat', 'Help'],
    },
    {
      id: '2',
      name: 'Code Helper',
      status: 'processing',
      capabilities: ['Coding', 'Debug'],
    },
    {
      id: '3',
      name: 'Data Analyst',
      status: 'idle',
      capabilities: ['Analysis', 'Reports'],
    },
  ];

  return (
    <AgentList 
      agents={agents}
      onAgentClick={(agent) => console.log('Selected:', agent)}
    />
  );
}
```

## Interactive Chat

```tsx
import React, { useState } from 'react';
import { AgentChat, Agent, ChatMessage } from 'xyzen-ui';

function ChatInterface() {
  const agent: Agent = {
    id: '1',
    name: 'Assistant AI',
    status: 'active',
  };

  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      content: 'Hello! How can I help you?',
      timestamp: new Date(),
      role: 'agent',
    },
  ]);

  const handleSendMessage = (content: string) => {
    const newMessage: ChatMessage = {
      id: Date.now().toString(),
      content,
      timestamp: new Date(),
      role: 'user',
    };
    setMessages([...messages, newMessage]);
    
    // Add your agent response logic here
  };

  return (
    <AgentChat 
      agent={agent}
      messages={messages}
      onSendMessage={handleSendMessage}
    />
  );
}
```

## Custom Styling

All components accept a `className` prop for custom styling:

```tsx
import { AgentCard } from 'xyzen-ui';
import './my-custom-styles.css';

<AgentCard 
  agent={myAgent} 
  className="my-custom-agent-card"
/>
```

## Status Indicators

```tsx
import { AgentStatus } from 'xyzen-ui';

function StatusDisplay() {
  return (
    <div>
      <AgentStatus status="active" />
      <AgentStatus status="processing" />
      <AgentStatus status="idle" />
      <AgentStatus status="offline" />
      <AgentStatus status="error" />
    </div>
  );
}
```
