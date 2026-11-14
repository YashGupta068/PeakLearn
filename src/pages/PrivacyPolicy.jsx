import { Link } from 'react-router-dom';

const SECTIONS = [
  {
    title: 'Information We Collect',
    body: 'We collect minimal data to improve your learning experience: practice session progress stored locally in your browser, topic preferences, and basic usage patterns.',
  },
  {
    title: 'How We Use Your Information',
    body: 'Data is used to track your progress, improve question quality, and enhance the platform. Bookmarked questions are stored in your browser\'s local storage only.',
  },
  {
    title: 'Your Rights',
    body: 'You can clear your bookmarks and session data at any time through your browser settings. No account is required to use this platform.',
  },
  {
    title: 'Contact',
    body: 'Questions about this policy or MCQ content: web.work334@gmail.com',
  },
];

export default function PrivacyPolicy() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      <h1 className="text-app mb-1 text-2xl font-bold">Privacy Policy</h1>
      <p className="text-muted mb-6 text-sm">Last updated: December 2024</p>

      <div className="card space-y-6 rounded-lg p-6">
        {SECTIONS.map((section) => (
          <section key={section.title}>
            <h2 className="text-app mb-2 font-semibold">{section.title}</h2>
            <p className="text-secondary text-sm leading-relaxed">{section.body}</p>
          </section>
        ))}
      </div>

      <Link to="/" className="link-accent mt-6 inline-block text-sm font-medium">
        ← Back to Home
      </Link>
    </div>
  );
}
