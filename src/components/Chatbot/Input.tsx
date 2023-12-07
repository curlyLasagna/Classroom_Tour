// ChatInput.tsx - Component for user input
import React, { useState } from 'react';

interface Input {
  onSubmit: (text: string) => void;
}

const ChatInput: React.FC<Input> = ({ onSubmit }) => {
  const [inputText, setInputText] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputText.trim() !== '') {
      onSubmit(inputText);
      setInputText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="chat-input-form">
      <input
        type="text"
        placeholder="Ask me a question!"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <button type="submit">Send</button>
    </form>
  );
};

export default ChatInput;
