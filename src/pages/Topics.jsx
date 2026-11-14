import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { mcqData } from '../data';
import { useBookmarks } from '../hooks/useBookmarks';
import { formatTopicName } from '../utils/helpers';

const TOPICS = [
  {
    id: 'oops',
    title: 'Object-Oriented Programming',
    description: 'Classes, inheritance, polymorphism, and encapsulation',
    route: '/practice/oops',
    keywords: 'object oriented programming classes inheritance polymorphism encapsulation',
  },
  {
    id: 'data_structures',
    title: 'Data Structures',
    description: 'Arrays, linked lists, trees, graphs — choose Java, C++, or general',
    route: '/data-structures',
    keywords: 'data structures algorithms arrays linked lists stacks queues trees graphs',
  },
  {
    id: 'software_engineering',
    title: 'Software Engineering',
    description: 'SDLC, design patterns, testing, and development practices',
    route: '/practice/software_engineering',
    keywords: 'software engineering sdlc design patterns testing agile',
  },
  {
    id: 'operating_systems',
    title: 'Operating Systems',
    description: 'Process scheduling, memory management, and synchronization',
    route: '/practice/operating_systems',
    keywords: 'operating systems process scheduling memory management deadlocks',
  },
  {
    id: 'dbms',
    title: 'Database Management System',
    description: 'SQL, normalization, transactions, indexing, and NoSQL',
    route: '/practice/dbms',
    keywords: 'database dbms sql normalization transactions indexing nosql',
  },
  {
    id: 'source_code_management',
    title: 'Git & GitHub',
    description: 'Version control, branching, and collaborative development',
    route: null,
    comingSoon: true,
    keywords: 'git github version control',
  },
];

function BookmarkItem({ bookmark, onRemove, onReview }) {
  return (
    <div className="card rounded-lg p-4">
      <div className="mb-2 flex items-start justify-between gap-2">
        <span className="bg-muted text-secondary rounded px-2 py-0.5 text-xs font-medium">
          {bookmark.topicName || formatTopicName(bookmark.topic)}
        </span>
        <button
          type="button"
          onClick={() => onRemove(bookmark.id)}
          className="text-muted hover:text-incorrect cursor-pointer"
          aria-label="Remove bookmark"
        >
          <i className="fas fa-times" />
        </button>
      </div>
      <p className="text-app mb-3 text-sm">{bookmark.question}</p>
      <div className="flex items-center justify-between">
        <span className="text-muted text-xs">
          Q{bookmark.questionIndex + 1} · {new Date(bookmark.timestamp).toLocaleDateString()}
        </span>
        <button
          type="button"
          onClick={() => onReview(bookmark.topic, bookmark.questionIndex)}
          className="text-accent link-accent cursor-pointer text-sm font-medium"
        >
          Review →
        </button>
      </div>
    </div>
  );
}

export default function Topics() {
  const navigate = useNavigate();
  const { bookmarks, removeBookmark, clearAllBookmarks } = useBookmarks();
  const [search, setSearch] = useState('');
  const [tab, setTab] = useState('topics');

  const filteredTopics = useMemo(() => {
    const term = search.toLowerCase().trim();
    if (!term) return TOPICS;
    return TOPICS.filter(
      (t) =>
        t.keywords.includes(term) ||
        t.title.toLowerCase().includes(term) ||
        t.description.toLowerCase().includes(term)
    );
  }, [search]);

  const getQuestionCount = (id) => mcqData[id]?.questions?.length ?? null;

  const tabClass = (active) =>
    active
      ? 'border-[var(--accent)] text-accent'
      : 'text-muted hover:text-secondary border-transparent';

  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      <div className="mb-6">
        <h1 className="text-app mb-1 text-2xl font-bold">Topics</h1>
        <p className="text-secondary">Select a subject to begin practicing</p>
      </div>

      <div className="mb-6 flex gap-2 border-b border-app">
        <button
          type="button"
          onClick={() => setTab('topics')}
          className={`cursor-pointer border-b-2 px-4 py-2 text-sm font-medium transition-colors ${tabClass(tab === 'topics')}`}
        >
          All Topics
        </button>
        <button
          type="button"
          onClick={() => setTab('bookmarks')}
          className={`cursor-pointer border-b-2 px-4 py-2 text-sm font-medium transition-colors ${tabClass(tab === 'bookmarks')}`}
        >
          Bookmarks ({bookmarks.length})
        </button>
      </div>

      {tab === 'topics' ? (
        <>
          <input
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search topics…"
            className="input-field mb-4 w-full rounded-lg px-4 py-2 text-sm"
          />

          <div className="space-y-3">
            {filteredTopics.length === 0 && (
              <p className="text-muted py-8 text-center">No topics match your search.</p>
            )}
            {filteredTopics.map((topic) => {
              const count = getQuestionCount(topic.id);
              const disabled = topic.comingSoon || !topic.route;
              return (
                <button
                  key={topic.id}
                  type="button"
                  disabled={disabled}
                  onClick={() => topic.route && navigate(topic.route)}
                  className={`card card-hover w-full cursor-pointer rounded-lg p-4 text-left transition-colors ${
                    disabled ? 'cursor-not-allowed opacity-50' : ''
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h2 className="text-app font-semibold">{topic.title}</h2>
                      <p className="text-secondary mt-1 text-sm">{topic.description}</p>
                    </div>
                    <div className="shrink-0 text-right text-sm">
                      {topic.comingSoon ? (
                        <span className="bg-muted text-secondary rounded px-2 py-0.5 text-xs font-medium">Soon</span>
                      ) : count ? (
                        <span className="text-muted">{count} Qs</span>
                      ) : null}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </>
      ) : (
        <div>
          {bookmarks.length > 0 && (
            <div className="mb-4 flex justify-end">
              <button
                type="button"
                onClick={() => {
                  if (confirm('Clear all bookmarks?')) clearAllBookmarks();
                }}
                className="text-incorrect hover:text-incorrect cursor-pointer text-sm"
              >
                Clear all
              </button>
            </div>
          )}
          {bookmarks.length === 0 ? (
            <p className="text-muted py-12 text-center">
              No bookmarked questions yet. Bookmark questions while practicing to review them here.
            </p>
          ) : (
            <div className="space-y-3">
              {bookmarks.map((bookmark) => (
                <BookmarkItem
                  key={bookmark.id}
                  bookmark={bookmark}
                  onRemove={removeBookmark}
                  onReview={(t, idx) => navigate(`/practice/${t}?question=${idx}&mode=quiz`)}
                />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
