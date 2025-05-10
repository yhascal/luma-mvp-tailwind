import { useState } from 'react';
import scenario from '../data/scenario';

export default function Conversation() {
  const [messages, setMessages] = useState([]);
  const [index, setIndex] = useState(0);

  const next = () => {
    if (index < scenario.length) {
      setMessages([...messages, scenario[index]]);
      setIndex(index + 1);
    }
  };

  return (
    <div>
      <div className="space-y-4 mb-6">
        {messages.map((msg, i) => (
          <div key={i} className={msg.role === 'luma' ? 'text-left' : 'text-right'}>
            <div className={`inline-block px-4 py-2 rounded-xl ${msg.role === 'luma' ? 'bg-blue-100 text-blue-900' : 'bg-gray-300 text-gray-900'}`}>
              {msg.content}
            </div>
          </div>
        ))}
      </div>
      <button onClick={next} className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
        Next
      </button>
    </div>
  );
}
