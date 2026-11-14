import { useCallback, useEffect, useState } from 'react';

const STORAGE_KEY = 'bookmarkedQuestions';

export function useBookmarks() {
  const [bookmarks, setBookmarks] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(bookmarks));
  }, [bookmarks]);

  const isBookmarked = useCallback(
    (topic, index) => bookmarks.some((b) => b.id === `${topic}_${index}`),
    [bookmarks]
  );

  const toggleBookmark = useCallback((topic, topicName, question, index) => {
    const id = `${topic}_${index}`;
    let added = false;
    setBookmarks((prev) => {
      const exists = prev.find((b) => b.id === id);
      if (exists) {
        added = false;
        return prev.filter((b) => b.id !== id);
      }
      added = true;
      return [
        ...prev,
        {
          id,
          topic,
          topicName,
          question: question.question,
          options: question.options,
          correctAnswer: question.correct,
          explanation: question.explanation,
          questionIndex: index,
          timestamp: new Date().toISOString(),
        },
      ];
    });
    return added;
  }, []);

  const removeBookmark = useCallback((id) => {
    setBookmarks((prev) => prev.filter((b) => b.id !== id));
  }, []);

  const clearAllBookmarks = useCallback(() => {
    setBookmarks([]);
  }, []);

  return { bookmarks, isBookmarked, toggleBookmark, removeBookmark, clearAllBookmarks };
}
