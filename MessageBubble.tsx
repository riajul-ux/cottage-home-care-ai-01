import React from 'react';
import { Message } from './types';

interface MessageBubbleProps {
  message: Message;
}

const MessageBubble: React.FC<MessageBubbleProps> = ({ message }) => {
  const isUser = message.role === 'user';

  // A simple helper to process basic markdown-like syntax for display
  // In a production app, we might use 'react-markdown', but this keeps it dependency-free
  const formatText = (text: string) => {
    return text.split('\n').map((line, i) => {
      // Check for bullet points
      if (line.trim().startsWith('- ') || line.trim().startsWith('• ')) {
         return (
            <li key={i} className="ml-4 list-disc pl-1 mb-1">
               {parseBold(line.replace(/^[-•]\s/, ''))}
            </li>
         )
      }
      return <p key={i} className="min-h-[1.2em] mb-2 last:mb-0">{parseBold(line)}</p>;
    });
  };

  const parseBold = (text: string) => {
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, index) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={index}>{part.slice(2, -2)}</strong>;
      }
      return part;
    });
  };

  return (
    <div className={`flex w-full mb-6 ${isUser ? 'justify-end' : 'justify-start'}`}>
      <div
        className={`flex max-w-[85%] md:max-w-[70%] ${
          isUser ? 'flex-row-reverse' : 'flex-row'
        } items-end gap-2`}
      >
        {/* Avatar */}
        <div
          className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 shadow-sm ${
            isUser ? 'bg-orange-500' : 'bg-slate-800'
          }`}
        >
          {isUser ? (
             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-white">
              <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clipRule="evenodd" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-white">
              <path d="M16.5 7.5h-9v9h9v-9Z" />
              <path fillRule="evenodd" d="M8.25 2.25A.75.75 0 0 1 9 3v.75h2.25V3a.75.75 0 0 1 1.5 0v.75H15V3a.75.75 0 0 1 1.5 0v.75h.75a3 3 0 0 1 3 3v.75H21A.75.75 0 0 1 21 9h-.75v2.25H21a.75.75 0 0 1 0 1.5h-.75V15H21a.75.75 0 0 1 0 1.5h-.75v.75a3 3 0 0 1-3 3h-.75V21a.75.75 0 0 1-1.5 0v-.75h-2.25V21a.75.75 0 0 1-1.5 0v-.75H9V21a.75.75 0 0 1-1.5 0v-.75h-.75a3 3 0 0 1-3-3v-.75H3a.75.75 0 0 1 0-1.5h.75v-2.25H3a.75.75 0 0 1 0-1.5h.75V9H3a.75.75 0 0 1 0-1.5h.75V6.75a3 3 0 0 1 3-3h.75V3a.75.75 0 0 1 .75-.75ZM6 6.75A1.5 1.5 0 0 0 4.5 8.25v7.5A1.5 1.5 0 0 0 6 17.25h12a1.5 1.5 0 0 0 1.5-1.5v-7.5A1.5 1.5 0 0 0 18 6.75H6Z" clipRule="evenodd" />
            </svg>
          )}
        </div>

        {/* Bubble */}
        <div
          className={`px-5 py-3 rounded-2xl shadow-sm text-sm leading-relaxed ${
            isUser
              ? 'bg-orange-500 text-white rounded-br-none'
              : 'bg-white text-slate-700 border border-slate-100 rounded-bl-none'
          }`}
        >
           {formatText(message.text)}
        </div>
      </div>
    </div>
  );
};

export default MessageBubble;