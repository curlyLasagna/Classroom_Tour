// Chat.tsx - Main chat component
import React, { useState } from 'react';
import MessageList from './MessageList';
import ChatInput from './Input';

interface Message {
  text: string;
  sender: 'user' | 'bot';
  token: string
}

const Chat: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  async function query(data: any) {
    const response = await fetch(
      "https://api-inference.huggingface.co/models/deepset/roberta-base-squad2",
      {
        headers: {
          Authorization: `Bearer ${import.meta.env.PUBLIC_HUGGING_FACE_KEY}`,
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
          context: 
          `If there's no display on the computer, make sure the computer turned on. 
          If the system is frozen, restart the system by turning off the power supply.
          For all other inputs say Call 4Tech at 410-704-8324. 
          My name is Robert. I am here to answer your questions regarding tech and maybe campus dining
          Towson's dining hall doesn't even come close to Goucher's
          Denny's on campus is underrated
          The union is home to a community of rats. 
          The rats love Dunkin Donuts the best.
          `
        }
      })

      const data = await response

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
