import { useCallback, useEffect, useState } from 'react';

/**
 * Manages focus mode — hides header/footer for distraction-free study.
 * Toggles the `focus-mode` class on the root layout div.
 */
export function useFocusMode() {
  const [isFocused, setIsFocused] = useState(
    () => sessionStorage.getItem('focusMode') === 'true'
  );

  useEffect(() => {
    const root = document.getElementById('root');
    if (!root) return;

    if (isFocused) {
      root.classList.add('focus-mode');
    } else {
      root.classList.remove('focus-mode');
    }
    sessionStorage.setItem('focusMode', String(isFocused));
  }, [isFocused]);

  const toggleFocus = useCallback(() => {
    setIsFocused((prev) => !prev);
  }, []);

  return { isFocused, toggleFocus };
}
