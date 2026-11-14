import { useEffect, useState } from 'react';

export default function Alert({ message, type = 'info', onClose }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const showTimer = setTimeout(() => setVisible(true), 50);
    const hideTimer = setTimeout(() => {
      setVisible(false);
      setTimeout(onClose, 200);
    }, 2500);
    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, [onClose]);

  const styles = {
    info: 'bg-card text-app border border-app',
    success: 'bg-correct text-correct border border-app',
    error: 'bg-incorrect text-incorrect border border-app',
  };

  return (
    <div
      className={`fixed top-20 left-1/2 z-50 -translate-x-1/2 rounded-lg px-4 py-2 text-sm shadow-md transition-all duration-200 ${styles[type]} ${visible ? 'alert-show translate-y-0 opacity-100' : '-translate-y-2 opacity-0'}`}
    >
      {message}
    </div>
  );
}
