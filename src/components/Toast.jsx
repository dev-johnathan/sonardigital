import { useEffect, useState } from 'react';

export default function Toast() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const handler = (e) => {
      const msg = (e && e.detail && e.detail.message) || String(e || '');
      const id = Date.now() + Math.random();
      setMessages((m) => [...m, { id, text: msg }]);
      setTimeout(() => {
        setMessages((m) => m.filter((x) => x.id !== id));
      }, 3500);
    };

    window.addEventListener('admin-notification', handler);
    return () => window.removeEventListener('admin-notification', handler);
  }, []);

  if (messages.length === 0) return null;

  return (
    <div className="admin-toasts" aria-live="polite">
      {messages.map((msg) => (
        <div key={msg.id} className="admin-toast panel">
          {msg.text}
        </div>
      ))}
    </div>
  );
}
