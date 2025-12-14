import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Sparkles } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";
import { ChatMessage } from '../types';

const GeminiAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Olá! Sou a consultora virtual da Bijuday. Posso te ajudar a escolher o acessório perfeito para seu look hoje? 💕' }
  ]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!inputText.trim() || isLoading) return;

    const userMessage = inputText;
    setInputText('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      const apiKey = process.env.API_KEY;
      if (!apiKey) {
        throw new Error("API Key not found");
      }

      const ai = new GoogleGenAI({ apiKey });
      
      const systemInstruction = `
        Você é uma assistente de estilo virtual amigável e experiente da loja "Bijuday".
        A Bijuday vende semijoias artesanais, brincos, colares e braceletes feitos à mão.
        
        Suas características:
        1. Use emojis e linguagem acolhedora (ex: 💕, ✨, 💎).
        2. Dê conselhos de moda baseados no que o usuário pedir (ex: combinações de cores, tipos de acessórios para eventos).
        3. Sempre lembre que as peças são únicas e feitas à mão.
        4. Para comprar, instrua o usuário a mandar mensagem no Direct do Instagram.
        5. Seja concisa nas respostas.
      `;

      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: [
            ...messages.map(m => ({
                role: m.role,
                parts: [{ text: m.text }]
            })),
            { role: 'user', parts: [{ text: userMessage }]}
        ],
        config: {
          systemInstruction: systemInstruction,
        }
      });

      const reply = response.text;
      
      if (reply) {
         setMessages(prev => [...prev, { role: 'model', text: reply }]);
      } else {
         throw new Error("Empty response");
      }

    } catch (error) {
      console.error("Gemini Error:", error);
      setMessages(prev => [...prev, { role: 'model', text: 'Desculpe, tive um probleminha técnico. Pode me perguntar novamente? 🥺', isError: true }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-40 bg-rose-600 text-white p-4 rounded-full shadow-2xl hover:bg-rose-700 transition-all hover:scale-110 ${isOpen ? 'hidden' : 'flex'}`}
        aria-label="Abrir Chat de Estilo"
      >
        <MessageCircle size={28} />
        <span className="absolute -top-2 -right-2 bg-yellow-400 text-rose-900 text-xs font-bold px-2 py-0.5 rounded-full animate-bounce">Ajuda?</span>
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-full max-w-sm bg-white rounded-2xl shadow-2xl border border-rose-100 overflow-hidden flex flex-col max-h-[500px] animate-fade-in-up">
          {/* Header */}
          <div className="bg-rose-500 p-4 flex justify-between items-center text-white">
            <div className="flex items-center gap-2">
              <Sparkles size={20} className="text-yellow-300" />
              <h3 className="font-bold">Consultora Bijuday</h3>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-white/20 p-1 rounded-full transition-colors">
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-stone-50 h-80">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div 
                  className={`max-w-[85%] p-3 rounded-2xl text-sm leading-relaxed ${
                    msg.role === 'user' 
                      ? 'bg-rose-500 text-white rounded-br-none' 
                      : 'bg-white text-stone-700 shadow-sm border border-stone-100 rounded-bl-none'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                 <div className="bg-white p-3 rounded-2xl rounded-bl-none shadow-sm border border-stone-100 flex gap-1">
                    <span className="w-2 h-2 bg-rose-400 rounded-full animate-bounce"></span>
                    <span className="w-2 h-2 bg-rose-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></span>
                    <span className="w-2 h-2 bg-rose-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></span>
                 </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-3 bg-white border-t border-gray-100 flex gap-2">
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ex: Qual brinco combina com vestido vermelho?"
              className="flex-1 bg-stone-100 border-none rounded-full px-4 py-2 text-sm focus:ring-2 focus:ring-rose-200 outline-none text-stone-700"
            />
            <button 
              onClick={handleSend}
              disabled={isLoading || !inputText.trim()}
              className="bg-rose-500 text-white p-2 rounded-full hover:bg-rose-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <Send size={18} />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default GeminiAssistant;