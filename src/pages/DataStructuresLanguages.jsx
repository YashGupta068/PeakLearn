import { Link, useNavigate } from 'react-router-dom';
import { mcqData } from '../data';

const OPTIONS = [
  {
    id: 'java',
    topic: 'data_structures_java',
    title: 'Java',
    description: 'Collections Framework, generics, and OOP-based data structures',
    count: mcqData.data_structures_java?.questions?.length,
  },
  {
    id: 'cpp',
    topic: 'data_structures_cpp',
    title: 'C++',
    description: 'STL containers, templates, and memory management',
    count: mcqData.data_structures_cpp?.questions?.length,
  },
  {
    id: 'general',
    topic: 'data_structures',
    title: 'General (Language-agnostic)',
    description: 'Core data structure concepts without language-specific syntax',
    count: mcqData.data_structures?.questions?.length,
  },
];

export default function DataStructuresLanguages() {
  const navigate = useNavigate();

  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      <nav className="text-muted mb-4 text-sm">
        <Link to="/topics" className="link-accent">Topics</Link>
        <span className="mx-2">/</span>
        <span>Data Structures</span>
      </nav>

      <h1 className="text-app mb-1 text-2xl font-bold">Data Structures</h1>
      <p className="text-secondary mb-6">
        Choose a track based on your preferred programming language.
      </p>

      <div className="space-y-3">
        {OPTIONS.map((opt) => (
          <button
            key={opt.id}
            type="button"
            onClick={() => navigate(`/practice/${opt.topic}`)}
            className="card card-hover w-full cursor-pointer rounded-lg p-4 text-left transition-colors"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <h2 className="text-app font-semibold">{opt.title}</h2>
                <p className="text-secondary mt-1 text-sm">{opt.description}</p>
              </div>
              {opt.count && (
                <span className="text-muted shrink-0 text-sm">{opt.count} Qs</span>
              )}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
