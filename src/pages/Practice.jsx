import { useCallback, useEffect, useMemo, useState } from 'react';
import { Link, useNavigate, useParams, useSearchParams } from 'react-router-dom';
import Alert from '../components/Alert';
import StudyToolbar from '../components/StudyToolbar';
import { getTopicData } from '../data';
import { useBookmarks } from '../hooks/useBookmarks';
import { useFocusMode } from '../hooks/useFocusMode';
import { useStudyTimer } from '../hooks/useStudyTimer';

function clampIndex(index, length) {
  if (length <= 0) return 0;
  if (Number.isNaN(index)) return 0;
  return Math.min(Math.max(0, index), length - 1);
}

/* ─── Study Mode Question ─── */
function StudyQuestion({ question, index, bookmarked, onBookmark, showAnswers }) {
  const [explOpen, setExplOpen] = useState(false);

  return (
    <article id={`question-${index}`} className="study-question">
      {/* Header: badge + question text + bookmark */}
      <div className="mb-3 flex items-start gap-3">
        <span className="q-badge">Q{index + 1}</span>
        <h3 className="q-text text-app flex-1 font-medium" style={{ lineHeight: '1.55' }}>
          {question.question}
        </h3>
        <button
          type="button"
          onClick={() => onBookmark(index)}
          className="text-muted shrink-0 cursor-pointer p-1 hover:text-accent"
          title={bookmarked ? 'Remove bookmark' : 'Bookmark'}
        >
          <i className={bookmarked ? 'fas fa-bookmark text-accent' : 'far fa-bookmark'} />
        </button>
      </div>

      {/* Options */}
      <ul className={`mb-3 space-y-1.5 ${showAnswers ? '' : 'answer-hidden'}`}>
        {question.options.map((option, optIdx) => {
          const isCorrect = optIdx === question.correct;
          return (
            <li
              key={optIdx}
              className={`opt-row ${isCorrect && showAnswers ? 'opt-correct bg-correct' : ''}`}
            >
              <span className="opt-badge">
                {String.fromCharCode(65 + optIdx)}
              </span>
              <span className="opt-text text-app flex-1">{option}</span>
              {isCorrect && showAnswers && (
                <span className="text-correct text-xs font-medium opacity-80">
                  <i className="fas fa-check mr-1" />correct
                </span>
              )}
            </li>
          );
        })}
      </ul>

      {/* Collapsible explanation */}
      <div>
        <button
          type="button"
          className={`expl-toggle ${explOpen ? 'open' : ''}`}
          onClick={() => setExplOpen((o) => !o)}
        >
          <i className="fas fa-caret-right" />
          <span>{explOpen ? 'Hide explanation' : 'Show explanation'}</span>
        </button>
        <div className={`expl-body ${explOpen ? 'open' : ''}`}>
          <div className="expl-text bg-muted rounded-md p-3">
            <p className="text-secondary" style={{ lineHeight: '1.6' }}>
              {question.explanation}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}

/* ─── Quiz Mode Question ─── */
function QuizQuestion({ question, index, selected, bookmarked, onSelect, onBookmark, streak }) {
  const answered = selected !== undefined;
  const isCorrect = answered && selected === question.correct;

  return (
    <div className="quiz-slide-enter" key={`quiz-${index}`}>
      {/* Streak badge */}
      {streak >= 2 && !answered && (
        <div className="mb-3 flex justify-center">
          <span className="streak-badge">
            🔥 {streak} in a row!
          </span>
        </div>
      )}

      {/* Question */}
      <div className="mb-5 flex items-start gap-3">
        <span className="q-badge">Q{index + 1}</span>
        <h3 className="q-text text-app flex-1 text-lg font-medium" style={{ lineHeight: '1.55' }}>
          {question.question}
        </h3>
        <button
          type="button"
          onClick={() => onBookmark(index)}
          className="text-muted shrink-0 cursor-pointer p-1 hover:text-accent"
        >
          <i className={bookmarked ? 'fas fa-bookmark text-accent' : 'far fa-bookmark'} />
        </button>
      </div>

      {/* Options */}
      <div className="mb-5 space-y-2.5">
        {question.options.map((option, optIdx) => {
          let extraClass = 'border-app bg-input hover:border-[var(--accent)]';
          if (answered) {
            if (optIdx === question.correct) {
              extraClass = `border-[var(--correct-text)] bg-correct ${isCorrect && optIdx === selected ? 'correct-pulse' : ''}`;
            } else if (optIdx === selected) {
              extraClass = 'border-[var(--incorrect-text)] bg-incorrect';
            }
          }

          return (
            <button
              key={optIdx}
              type="button"
              disabled={answered}
              onClick={() => onSelect(optIdx)}
              className={`flex w-full cursor-pointer items-center gap-3 rounded-xl border px-4 py-3.5 text-left transition-all duration-200 disabled:cursor-default ${extraClass}`}
            >
              <span className="opt-badge">
                {String.fromCharCode(65 + optIdx)}
              </span>
              <span className="opt-text text-app flex-1">{option}</span>
              {answered && optIdx === question.correct && (
                <i className="fas fa-check text-correct" />
              )}
              {answered && optIdx === selected && optIdx !== question.correct && (
                <i className="fas fa-times text-incorrect" />
              )}
            </button>
          );
        })}
      </div>

      {/* Result + explanation */}
      {answered && (
        <div className={`rounded-xl p-4 ${isCorrect ? 'bg-correct' : 'bg-incorrect'}`}
          style={{ animation: 'fadeSlideIn 0.3s ease both' }}
        >
          <p className={`mb-1.5 text-sm font-semibold ${isCorrect ? 'text-correct' : 'text-incorrect'}`}>
            {isCorrect
              ? '✓ Correct!'
              : `✗ Incorrect — the answer is ${String.fromCharCode(65 + question.correct)}.`}
          </p>
          <p className="expl-text text-secondary" style={{ lineHeight: '1.6' }}>
            {question.explanation}
          </p>
        </div>
      )}
    </div>
  );
}

/* ─── Main Practice Page ─── */
export default function Practice() {
  const { topic } = useParams();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { isBookmarked, toggleBookmark } = useBookmarks();
  const { isFocused, toggleFocus } = useFocusMode();
  const { formatted: timerFormatted } = useStudyTimer(topic);

  const topicData = getTopicData(topic);
  const questions = topicData?.questions ?? [];

  const questionParam = searchParams.get('question');
  const modeParam = searchParams.get('mode');
  const parsedQuestion = questionParam !== null ? parseInt(questionParam, 10) : 0;
  const startInQuiz = modeParam === 'quiz' || questionParam !== null;

  const [mode, setMode] = useState(startInQuiz ? 'quiz' : 'study');
  const [currentIndex, setCurrentIndex] = useState(() => clampIndex(parsedQuestion, questions.length));
  const [userAnswers, setUserAnswers] = useState({});
  const [showJumper, setShowJumper] = useState(false);
  const [alert, setAlert] = useState(null);
  const [showAnswers, setShowAnswers] = useState(true);
  const [fontSize, setFontSize] = useState(() => localStorage.getItem('mcqFontSize') || 'medium');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [streak, setStreak] = useState(0);

  // Persist font size preference
  useEffect(() => {
    localStorage.setItem('mcqFontSize', fontSize);
  }, [fontSize]);

  // Scroll tracking for progress bar + back-to-top
  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setScrollProgress(Math.min(progress, 100));
      setShowBackToTop(scrollTop > 400);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!topicData) {
      const timer = setTimeout(() => navigate('/topics'), 2000);
      return () => clearTimeout(timer);
    }
  }, [topicData, navigate]);

  useEffect(() => {
    if (!topicData) return;
    const clamped = clampIndex(parsedQuestion, topicData.questions.length);
    setCurrentIndex(clamped);
    if (startInQuiz) setMode('quiz');
  }, [topic, topicData, parsedQuestion, startInQuiz]);

  useEffect(() => {
    setUserAnswers({});
    setStreak(0);
  }, [topic]);

  const handleSelect = useCallback((optIdx) => {
    setUserAnswers((prev) => {
      if (prev[currentIndex] !== undefined) return prev;
      return { ...prev, [currentIndex]: optIdx };
    });

    // Update streak
    if (questions[currentIndex]) {
      if (optIdx === questions[currentIndex].correct) {
        setStreak((s) => s + 1);
      } else {
        setStreak(0);
      }
    }
  }, [currentIndex, questions]);

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'Escape') {
        setShowJumper(false);
        return;
      }

      // F key for focus mode
      if (e.key === 'f' && !e.ctrlKey && !e.metaKey && e.target.tagName !== 'INPUT') {
        toggleFocus();
        return;
      }

      if (mode !== 'quiz') return;

      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        setCurrentIndex((i) => Math.max(0, i - 1));
      }
      if (e.key === 'ArrowRight') {
        e.preventDefault();
        setCurrentIndex((i) => Math.min(questions.length - 1, i + 1));
      }
      const num = parseInt(e.key, 10);
      if (num >= 1 && num <= 4 && userAnswers[currentIndex] === undefined) {
        handleSelect(num - 1);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [mode, currentIndex, questions.length, userAnswers, handleSelect, toggleFocus]);

  const correctCount = useMemo(
    () => Object.entries(userAnswers).filter(([idx, ans]) => ans === questions[parseInt(idx, 10)]?.correct).length,
    [userAnswers, questions]
  );

  const answeredCount = Object.keys(userAnswers).length;
  const wrongCount = answeredCount - correctCount;
  const remainingCount = questions.length - answeredCount;
  const quizProgress = questions.length > 0 ? Math.round(((currentIndex + 1) / questions.length) * 100) : 0;

  const showAlertMsg = (message, type = 'info') => setAlert({ message, type });

  const handleBookmark = (index) => {
    const added = toggleBookmark(topic, topicData.title, questions[index], index);
    showAlertMsg(added ? 'Question bookmarked' : 'Bookmark removed', added ? 'success' : 'info');
  };

  const jumpToQuestion = (index) => {
    setCurrentIndex(index);
    setShowJumper(false);
    if (mode === 'study') {
      requestAnimationFrame(() => {
        document.getElementById(`question-${index}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const modeBtnClass = (active) =>
    active ? 'btn-active' : 'btn-ghost';

  if (!topicData) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-16 text-center">
        <p className="text-secondary">Topic not found.</p>
        <Link to="/topics" className="link-accent mt-4 inline-block">
          Back to Topics
        </Link>
      </div>
    );
  }

  return (
    <div className={`mx-auto max-w-3xl px-4 py-6 font-size-${fontSize}`}>
      {/* Scroll progress bar */}
      {mode === 'study' && (
        <div className="scroll-progress" style={{ width: `${scrollProgress}%` }} />
      )}

      {/* Breadcrumb */}
      <nav className="text-muted mb-4 text-sm">
        <Link to="/topics" className="link-accent">Topics</Link>
        <span className="mx-2">/</span>
        <span>{topicData.title}</span>
      </nav>

      {/* Top card — controls */}
      <div className="card mb-6 rounded-lg p-5">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <h1 className="text-app text-xl font-bold">{topicData.title}</h1>
          <div className="text-muted flex items-center gap-3 text-sm">
            <span>{questions.length} questions</span>
            {mode === 'quiz' && <span>{correctCount}/{answeredCount} correct</span>}
          </div>
        </div>

        <div className="mb-4 flex flex-wrap items-center gap-2">
          <button type="button" onClick={() => setMode('study')} className={`${modeBtnClass(mode === 'study')} cursor-pointer rounded-md px-3 py-1.5 text-sm font-medium transition-colors`}>
            <i className="fas fa-book-open mr-1.5 text-xs" /> Study
          </button>
          <button type="button" onClick={() => setMode('quiz')} className={`${modeBtnClass(mode === 'quiz')} cursor-pointer rounded-md px-3 py-1.5 text-sm font-medium transition-colors`}>
            <i className="fas fa-pen mr-1.5 text-xs" /> Quiz
          </button>

          {/* Study mode: show/hide answers toggle */}
          {mode === 'study' && (
            <button
              type="button"
              onClick={() => setShowAnswers((a) => !a)}
              className="btn-ghost cursor-pointer rounded-md px-3 py-1.5 text-sm font-medium transition-colors"
              title={showAnswers ? 'Hide answers to self-test' : 'Show correct answers'}
            >
              <i className={`fas ${showAnswers ? 'fa-eye-slash' : 'fa-eye'} mr-1.5 text-xs`} />
              {showAnswers ? 'Hide Answers' : 'Show Answers'}
            </button>
          )}

          <button
            type="button"
            onClick={() => setShowJumper(true)}
            className="btn-ghost ml-auto cursor-pointer rounded-md px-3 py-1.5 text-sm font-medium transition-colors"
          >
            Jump to Q…
          </button>
        </div>

        {mode === 'quiz' && (
          <div>
            <div className="text-muted mb-1 flex justify-between text-xs">
              <span>Question {currentIndex + 1} of {questions.length}</span>
              <span>{quizProgress}%</span>
            </div>
            <div className="bg-muted h-1.5 overflow-hidden rounded-full">
              <div
                className="bg-accent h-full rounded-full transition-all duration-300"
                style={{ width: `${quizProgress}%` }}
              />
            </div>
          </div>
        )}

        {/* Keyboard hints */}
        <div className="text-muted mt-3 flex flex-wrap items-center gap-3 text-xs">
          {mode === 'study' ? (
            <span>All questions with answers and explanations. Toggle answers to self-test.</span>
          ) : (
            <>
              <span className="flex items-center gap-1">
                <span className="kbd">←</span><span className="kbd">→</span> Navigate
              </span>
              <span className="flex items-center gap-1">
                <span className="kbd">1</span>–<span className="kbd">4</span> Select option
              </span>
              <span className="flex items-center gap-1">
                <span className="kbd">F</span> Focus mode
              </span>
            </>
          )}
        </div>
      </div>

      {/* Questions area */}
      <div className="card rounded-lg p-5">
        {mode === 'study' ? (
          questions.map((q, index) => (
            <StudyQuestion
              key={index}
              question={q}
              index={index}
              bookmarked={isBookmarked(topic, index)}
              onBookmark={handleBookmark}
              showAnswers={showAnswers}
            />
          ))
        ) : (
          <>
            <QuizQuestion
              question={questions[currentIndex]}
              index={currentIndex}
              selected={userAnswers[currentIndex]}
              bookmarked={isBookmarked(topic, currentIndex)}
              onSelect={handleSelect}
              onBookmark={handleBookmark}
              streak={streak}
            />

            {/* Navigation + Mini scoreboard */}
            <div className="mt-6 border-t border-app pt-4">
              {/* Mini scoreboard */}
              <div className="mini-score mb-4 justify-center">
                <span className="score-correct">
                  <i className="fas fa-check mr-1" />{correctCount} correct
                </span>
                <span className="score-wrong">
                  <i className="fas fa-times mr-1" />{wrongCount} wrong
                </span>
                <span className="score-remaining">
                  <i className="fas fa-hourglass-half mr-1" />{remainingCount} remaining
                </span>
              </div>

              <div className="flex justify-between">
                <button
                  type="button"
                  onClick={() => setCurrentIndex((i) => Math.max(0, i - 1))}
                  disabled={currentIndex === 0}
                  className="btn-ghost cursor-pointer rounded-md px-4 py-2 text-sm font-medium disabled:opacity-40"
                >
                  ← Previous
                </button>
                <button
                  type="button"
                  onClick={() => setCurrentIndex((i) => Math.min(questions.length - 1, i + 1))}
                  disabled={currentIndex === questions.length - 1}
                  className="btn-ghost cursor-pointer rounded-md px-4 py-2 text-sm font-medium disabled:opacity-40"
                >
                  Next →
                </button>
              </div>
            </div>
          </>
        )}
      </div>

      {/* Floating study toolbar */}
      <StudyToolbar
        fontSize={fontSize}
        onFontSizeChange={setFontSize}
        isFocused={isFocused}
        onToggleFocus={toggleFocus}
        timerFormatted={timerFormatted}
        currentIndex={currentIndex}
        totalQuestions={questions.length}
        mode={mode}
      />

      {/* Back to top button */}
      <button
        type="button"
        className={`back-to-top ${showBackToTop ? 'visible' : ''}`}
        onClick={scrollToTop}
        aria-label="Back to top"
      >
        <i className="fas fa-arrow-up" />
      </button>

      {/* Jump-to modal */}
      {showJumper && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ backgroundColor: 'var(--overlay)' }}
          onClick={() => setShowJumper(false)}
        >
          <div
            className="card max-h-[70vh] w-full max-w-sm overflow-y-auto rounded-lg p-4 shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-app mb-3 font-semibold">Jump to question</h3>
            <div className="grid grid-cols-5 gap-2">
              {questions.map((_, index) => {
                const answered = userAnswers[index] !== undefined;
                const correct = answered && userAnswers[index] === questions[index].correct;
                let btnClass = 'btn-ghost';
                if (index === currentIndex) btnClass = 'btn-active';
                else if (answered) btnClass = correct ? 'bg-correct text-correct' : 'bg-incorrect text-incorrect';

                return (
                  <button
                    key={index}
                    type="button"
                    onClick={() => jumpToQuestion(index)}
                    className={`${btnClass} cursor-pointer rounded py-1.5 text-sm font-medium transition-colors`}
                  >
                    {index + 1}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {alert && <Alert message={alert.message} type={alert.type} onClose={() => setAlert(null)} />}
    </div>
  );
}
