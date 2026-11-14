/**
 * Floating study toolbar — appears at the bottom of the Practice page.
 * Contains: font size controls, focus mode, study timer, progress, theme toggle.
 */

const FONT_SIZES = [
  { key: 'small', label: 'S' },
  { key: 'medium', label: 'M' },
  { key: 'large', label: 'L' },
];

export default function StudyToolbar({
  fontSize,
  onFontSizeChange,
  isFocused,
  onToggleFocus,
  timerFormatted,
  currentIndex,
  totalQuestions,
  mode,
}) {
  return (
    <div className="study-toolbar" role="toolbar" aria-label="Study tools">
      {/* Font size selector */}
      <div className="font-size-selector" title="Font size">
        {FONT_SIZES.map((s) => (
          <button
            key={s.key}
            type="button"
            onClick={() => onFontSizeChange(s.key)}
            className={fontSize === s.key ? 'active' : ''}
            aria-label={`Font size ${s.label}`}
          >
            {s.label}
          </button>
        ))}
      </div>

      <div className="toolbar-divider" />

      {/* Focus mode toggle */}
      <button
        type="button"
        className={`toolbar-btn ${isFocused ? 'active' : ''}`}
        onClick={onToggleFocus}
        title={isFocused ? 'Exit focus mode' : 'Enter focus mode'}
      >
        <i className={`fas ${isFocused ? 'fa-compress' : 'fa-expand'}`} />
        <span className="hide-mobile">{isFocused ? 'Exit Focus' : 'Focus'}</span>
      </button>

      <div className="toolbar-divider" />

      {/* Study timer */}
      <div className="toolbar-btn" style={{ cursor: 'default' }} title="Study time">
        <i className="fas fa-clock" />
        <span>{timerFormatted}</span>
      </div>

      <div className="toolbar-divider" />

      {/* Progress */}
      <div className="toolbar-btn" style={{ cursor: 'default' }} title="Progress">
        <i className="fas fa-list-ol" />
        <span>
          {mode === 'quiz' ? `${currentIndex + 1}` : totalQuestions} / {totalQuestions}
        </span>
      </div>
    </div>
  );
}
