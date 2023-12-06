// MessageList.tsx - Component to display messages
import React from 'react';

interface Message {
  text: string;
  sender: 'user' | 'bot';
}

interface MessageListProps {
  messages: Message[];
}

const MessageList: React.FC<MessageListProps> = ({ messages }) => (
  <div className="message-list">
    {messages.map((message, index) => (
      <div key={index} className={`message ${message.sender}`}>
        {message.text}
      </div>
    ))}
  </div>
);

export default MessageList;
