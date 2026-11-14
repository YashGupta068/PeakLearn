import { useEffect, useRef, useState } from 'react';

/**
 * Tracks how long the user has been studying the current topic.
 * Pauses when the tab is hidden. Resets when topic changes.
 */
export function useStudyTimer(topic) {
  const [seconds, setSeconds] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    setSeconds(0);
  }, [topic]);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      if (!document.hidden) {
        setSeconds((s) => s + 1);
      }
    }, 1000);
    return () => clearInterval(intervalRef.current);
  }, []);

  const formatted = (() => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    if (m === 0) return `${s}s`;
    return `${m}m ${s.toString().padStart(2, '0')}s`;
  })();

  return { seconds, formatted };
}
