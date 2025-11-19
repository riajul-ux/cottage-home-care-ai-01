import React, { useState, useRef, useEffect } from 'react';
import { APP_NAME } from './constants';
import { Message } from './types';
import { sendMessageToGemini } from './geminiService';
import MessageBubble from './MessageBubble';
import Login from './Login';

const App: React.FC = () => {
  // Login State
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Chat State
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'init-1',
      role: 'model',
      text: 'Hello! I am the Cottage Home Care AI assistant. I can help you with Intake Guidelines, MLTC plans, Medicaid codes, and more. How can I help you today?',
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isThinking, setIsThinking] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isThinking]);

  // Focus input on load
  useEffect(() => {
    if (isLoggedIn) {
       inputRef.current?.focus();
    }
  }, [isLoggedIn]);

  const handleSendMessage = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!inputValue.trim() || isThinking) return;

    const userText = inputValue.trim();
    setInputValue('');

    const newMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      text: userText,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, newMessage]);
    setIsThinking(true);

    // Create a placeholder for the model response
    const modelMessageId = (Date.now() + 1).toString();
    const initialModelMessage: Message = {
      id: modelMessageId,
      role: 'model',
      text: '', // Start empty
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, initialModelMessage]);

    try {
      const stream = await sendMessageToGemini(userText);
      let accumulatedText = '';

      for await (const chunk of stream) {
        accumulatedText += chunk;
        
        setMessages((prev) => 
          prev.map((msg) => 
            msg.id === modelMessageId 
              ? { ...msg, text: accumulatedText }
              : msg
          )
        );
      }
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now().toString(),
          role: 'model',
          text: "I'm sorry, I encountered an error connecting to the knowledge base. Please try again.",
          timestamp: new Date(),
        },
      ]);
    } finally {
      setIsThinking(false);
    }
  };

  // SHOW LOGIN SCREEN IF NOT LOGGED IN
  if (!isLoggedIn) {
    return <Login onLogin={() => setIsLoggedIn(true)} />;
  }

  return (
    <div className="flex flex-col h-screen bg-slate-50 text-slate-900 overflow-hidden">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 bg-white border-b border-slate-200 shadow-sm z-10">
        <div className="flex items-center gap-3">
          <div className="bg-slate-900 p-2 rounded-lg">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-white">
              <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.632 8.632a.75.75 0 0 1-.53 1.28h-8.63a.75.75 0 0 1-.532-1.28l8.63-8.632Z" />
              <path fillRule="evenodd" d="M2.25 12.75a.75.75 0 0 1 .75-.75h12.5a.75.75 0 0 1 .75.75v6.5a2.25 2.25 0 0 1-2.25 2.25H3a.75.75 0 0 1-.75-.75V12.75Z" clipRule="evenodd" />
            </svg>
          </div>
          <div>
            <h1 className="text-lg font-bold text-slate-800 leading-tight">{APP_NAME}</h1>
            <p className="text-xs text-orange-500 font-medium uppercase tracking-wide">Right Home Care For You</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
             <button onClick={() => setIsLoggedIn(false)} className="text-xs text-slate-500 hover:text-slate-800 underline mr-2">
                Logout
            </button>
            <div className="hidden md:block">
                <span className="text-xs bg-slate-100 text-slate-500 py-1 px-3 rounded-full font-medium">
                    Training Module v2025
                </span>
            </div>
        </div>
      </header>

      {/* Chat Area */}
      <main className="flex-1 overflow-y-auto p-4 md:p-6 scrollbar-hide">
        <div className="max-w-3xl mx-auto pt-4">
            {/* Intro Banner (only if few messages) */}
            {messages.length < 3 && (
                <div className="mb-8 p-6 bg-gradient-to-r from-slate-800 to-slate-900 rounded-xl shadow-lg text-white relative overflow-hidden">
                    <div className="relative z-10">
                        <h2 className="text-2xl font-bold mb-2">Intake Guidelines Assistant</h2>
                        <p className="text-slate-300 max-w-lg text-sm mb-4">
                            Access information about Medicaid codes (54, 78), MLTC plans, Agency Transfers, and Pay Rates instantly.
                        </p>
                        <div className="flex flex-wrap gap-2">
                            <button onClick={() => { setInputValue("What is Code 54?"); inputRef.current?.focus(); }} className="text-xs bg-white/10 hover:bg-white/20 transition-colors px-3 py-1.5 rounded-full border border-white/20">
                                What is Code 54?
                            </button>
                            <button onClick={() => { setInputValue("List the MLTC plans in NYC"); inputRef.current?.focus(); }} className="text-xs bg-white/10 hover:bg-white/20 transition-colors px-3 py-1.5 rounded-full border border-white/20">
                                MLTC Plans in NYC
                            </button>
                             <button onClick={() => { setInputValue("What are the 2025 Pay Rates?"); inputRef.current?.focus(); }} className="text-xs bg-white/10 hover:bg-white/20 transition-colors px-3 py-1.5 rounded-full border border-white/20">
                                2025 Pay Rates
                            </button>
                        </div>
                    </div>
                    <div className="absolute -right-6 -bottom-12 opacity-10 text-white">
                        <svg width="200" height="200" viewBox="0 0 24 24" fill="currentColor">
                             <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.632 8.632a.75.75 0 0 1-.53 1.28h-8.63a.75.75 0 0 1-.532-1.28l8.63-8.632Z" />
                             <path fillRule="evenodd" d="M2.25 12.75a.75.75 0 0 1 .75-.75h12.5a.75.75 0 0 1 .75.75v6.5a2.25 2.25 0 0 1-2.25 2.25H3a.75.75 0 0 1-.75-.75V12.75Z" clipRule="evenodd" />
                        </svg>
                    </div>
                </div>
            )}

            {messages.map((msg) => (
                <MessageBubble key={msg.id} message={msg} />
            ))}

            {isThinking && (
                <div className="flex w-full mb-6 justify-start">
                    <div className="flex items-end gap-2">
                        <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center flex-shrink-0 shadow-sm">
                             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-white">
                                <path d="M16.5 7.5h-9v9h9v-9Z" />
                                <path fillRule="evenodd" d="M8.25 2.25A.75.75 0 0 1 9 3v.75h2.25V3a.75.75 0 0 1 1.5 0v.75H15V3a.75.75 0 0 1 1.5 0v.75h.75a3 3 0 0 1 3 3v.75H21A.75.75 0 0 1 21 9h-.75v2.25H21a.75.75 0 0 1 0 1.5h-.75V15H21a.75.75 0 0 1 0 1.5h-.75v.75a3 3 0 0 1-3 3h-.75V21a.75.75 0 0 1-1.5 0v-.75h-2.25V21a.75.75 0 0 1-1.5 0v-.75H9V21a.75.75 0 0 1-1.5 0v-.75h-.75a3 3 0 0 1-3-3v-.75H3a.75.75 0 0 1 0-1.5h.75v-2.25H3a.75.75 0 0 1 0-1.5h.75V9H3a.75.75 0 0 1 0-1.5h.75V6.75a3 3 0 0 1 3-3h.75V3a.75.75 0 0 1 .75-.75ZM6 6.75A1.5 1.5 0 0 0 4.5 8.25v7.5A1.5 1.5 0 0 0 6 17.25h12a1.5 1.5 0 0 0 1.5-1.5v-7.5A1.5 1.5 0 0 0 18 6.75H6Z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <div className="px-5 py-4 bg-white text-slate-500 rounded-2xl rounded-bl-none border border-slate-100 shadow-sm flex items-center gap-1">
                            <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce"></span>
                            <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce delay-100"></span>
                            <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce delay-200"></span>
                        </div>
                    </div>
                </div>
            )}
            <div ref={messagesEndRef} />
        </div>
      </main>

      {/* Input Area */}
      <footer className="bg-white p-4 md:p-6 border-t border-slate-200">
        <div className="max-w-3xl mx-auto">
          <form
            onSubmit={handleSendMessage}
            className="flex items-center gap-2 bg-slate-50 border border-slate-300 rounded-full px-2 py-2 shadow-inner focus-within:ring-2 focus-within:ring-orange-500/50 focus-within:border-orange-500 transition-all"
          >
            <input
              ref={inputRef}
              type="text"
              className="flex-1 bg-transparent px-4 py-2 outline-none text-slate-700 placeholder-slate-400"
              placeholder="Ask about Code 78, MLTC plans, or transfer process..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              disabled={isThinking}
            />
            <button
              type="submit"
              disabled={!inputValue.trim() || isThinking}
              className={`p-3 rounded-full flex items-center justify-center transition-all ${
                !inputValue.trim() || isThinking
                  ? 'bg-slate-200 text-slate-400 cursor-not-allowed'
                  : 'bg-orange-500 text-white hover:bg-orange-600 shadow-md transform hover:scale-105'
              }`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z" />
              </svg>
            </button>
          </form>
          <div className="text-center mt-3">
             <p className="text-[10px] text-slate-400">
                AI can make mistakes. Please verify important intake details with the Cottage Home Care HR department.
             </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
