// Chat.tsx - Main chat component
import React, { useState } from 'react';
import MessageList from './MessageList';
import ChatInput from './Input';

interface Message {
  text: string;
  sender: 'user' | 'bot';
}

const Chat: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  async function query(data: any) {
    const response = await fetch(
      "https://api-inference.huggingface.co/models/deepset/roberta-base-squad2",
      {
        headers: {
          Authorization: `Bearer ${import.meta.env.HUGGING_FACE_KEY}`,
        },
        method: "POST",
        body: JSON.stringify(data),
      },
    );
    const result = await response.json();
    return result;
  }

  const handleMessageSubmit = async (text: string) => {
    // Add user message to the message list
    setMessages([...messages, { text, sender: 'user' }]);

    // Make API call to get the reply
    try {
      const response = query({
        inputs: {
          question: text,
          context: "If there's no display on the computer, make sure the computer turned on. Restart the system if it's frozen. If you can't understand the message sent, reply with Call 4Tech. My name is Luis. I am doing well"
        }
      })

      const data = await response
      console.log(data)

      // Add API response to the message list
      setMessages([...messages, { text: data.answer, sender: 'bot' }]);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className="chat-container">
      <MessageList messages={messages} />
      <ChatInput onSubmit={handleMessageSubmit} />
    </div>
  );
};

export default Chat;
