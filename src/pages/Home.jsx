import { Link } from 'react-router-dom';
import { topicKeys, mcqData } from '../data';

const totalQuestions = topicKeys.reduce((sum, key) => sum + (mcqData[key]?.questions?.length ?? 0), 0);

export default function Home() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <section className="mb-10 text-center">
        <h1 className="text-app mb-3 text-3xl font-bold">
          MCQ Practice Platform
        </h1>
        <p className="text-secondary text-lg">
          Study computer science topics with multiple-choice questions and detailed explanations.
        </p>
      </section>

      <section className="card mb-10 rounded-lg p-6">
        <h2 className="text-app mb-2 text-xl font-semibold">How it works</h2>
        <ol className="text-secondary list-inside list-decimal space-y-2">
          <li>Choose a topic from the subject list</li>
          <li>Read questions in <strong className="text-app">Study mode</strong> (answers shown) or test yourself in <strong className="text-app">Quiz mode</strong></li>
          <li>Review explanations to understand each concept</li>
          <li>Bookmark difficult questions to revisit later</li>
        </ol>
        <Link
          to="/topics"
          className="btn-primary mt-6 inline-flex w-full items-center justify-center rounded-lg px-6 py-3 font-medium no-underline transition-colors"
        >
          Browse Topics
        </Link>
      </section>

      <section className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {[
          { value: `${totalQuestions}+`, label: 'Questions' },
          { value: topicKeys.length, label: 'Subjects' },
          { value: 2, label: 'Study modes' },
        ].map((stat) => (
          <div key={stat.label} className="card rounded-lg p-4 text-center">
            <p className="text-accent text-2xl font-bold">{stat.value}</p>
            <p className="text-muted text-sm">{stat.label}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
