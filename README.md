# xyzen-ui

A modern React component library for displaying and interacting with AI agents on the web.

## Features

- 🤖 **AgentCard** - Display detailed information about AI agents
- 📋 **AgentList** - Grid layout for multiple agents
- 💬 **AgentChat** - Interactive chat interface with agents
- 🎨 **AgentAvatar** - Customizable avatars with status indicators
- 📊 **AgentStatus** - Visual status indicators for agent states

## Installation

```bash
npm install xyzen-ui react react-dom
```

## Usage

### Import Components

```typescript
import {
  AgentCard,
  AgentList,
  AgentChat,
  AgentAvatar,
  AgentStatus,
  Agent,
  ChatMessage,
} from 'xyzen-ui';
```

### AgentCard

Display detailed information about an AI agent:

```typescript
import { AgentCard, Agent } from 'xyzen-ui';

const agent: Agent = {
  id: '1',
  name: 'Assistant AI',
  description: 'General-purpose AI assistant',
  status: 'active',
  capabilities: ['Text Generation', 'Code Writing'],
  lastActive: new Date(),
};

<AgentCard agent={agent} onClick={(agent) => console.log(agent)} />
```

### AgentList

Display multiple agents in a responsive grid:

```typescript
import { AgentList, Agent } from 'xyzen-ui';

const agents: Agent[] = [
  // ... array of agents
];

<AgentList 
  agents={agents} 
  onAgentClick={(agent) => console.log(agent)}
  emptyMessage="No agents available"
/>
```

### AgentChat

Interactive chat interface with an AI agent:

```typescript
import { AgentChat, Agent, ChatMessage } from 'xyzen-ui';

const agent: Agent = {
  id: '1',
  name: 'Assistant AI',
  status: 'active',
};

const messages: ChatMessage[] = [
  {
    id: '1',
    content: 'Hello!',
    timestamp: new Date(),
    role: 'agent',
  },
];

<AgentChat
  agent={agent}
  messages={messages}
  onSendMessage={(content) => console.log(content)}
/>
```

### AgentAvatar

Display agent avatar with status indicator:

```typescript
import { AgentAvatar } from 'xyzen-ui';

<AgentAvatar 
  name="AI Assistant" 
  status="active" 
  size="medium"
  avatar="https://example.com/avatar.jpg"
/>
```

### AgentStatus

Show agent status with icon and label:

```typescript
import { AgentStatus } from 'xyzen-ui';

<AgentStatus status="active" showLabel={true} />
```

## Types

### Agent

```typescript
interface Agent {
  id: string;
  name: string;
  description?: string;
  status: AgentStatus;
  avatar?: string;
  capabilities?: string[];
  lastActive?: Date;
  metadata?: Record<string, any>;
}
```

### AgentStatus (Type)

```typescript
type AgentStatus = 'active' | 'idle' | 'processing' | 'offline' | 'error';
```

### ChatMessage

```typescript
interface ChatMessage {
  id: string;
  agentId?: string;
  content: string;
  timestamp: Date;
  role: 'user' | 'agent' | 'system';
}
```

## Component Props

### AgentCardProps

- `agent: Agent` - The agent data to display
- `onClick?: (agent: Agent) => void` - Click handler
- `className?: string` - Additional CSS class

### AgentListProps

- `agents: Agent[]` - Array of agents to display
- `onAgentClick?: (agent: Agent) => void` - Click handler for agents
- `emptyMessage?: string` - Message to show when list is empty
- `className?: string` - Additional CSS class

### AgentChatProps

- `agent: Agent` - The agent for the chat
- `messages: ChatMessage[]` - Array of chat messages
- `onSendMessage?: (content: string) => void` - Handler for sending messages
- `className?: string` - Additional CSS class

### AgentAvatarProps

- `name: string` - Agent name (used for initials)
- `avatar?: string` - URL to avatar image
- `status?: AgentStatus` - Agent status for indicator
- `size?: 'small' | 'medium' | 'large'` - Avatar size
- `className?: string` - Additional CSS class

### AgentStatusProps

- `status: AgentStatus` - The status to display
- `showLabel?: boolean` - Whether to show label text
- `className?: string` - Additional CSS class

## Development

Build the library:

```bash
npm run build
```

## License

ISC

