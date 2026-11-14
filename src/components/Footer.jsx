import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-header border-t border-app">
      <div className="text-muted mx-auto flex max-w-5xl flex-col items-center justify-between gap-2 px-4 py-6 text-sm sm:flex-row">
        <p>© 2024 Peak Learn · MCQ Practice</p>
        <div className="flex gap-4">
          <Link to="/topics" className="text-muted link-accent">
            Topics
          </Link>
          <Link to="/privacy-policy" className="text-muted link-accent">
            Privacy Policy
          </Link>
          <a href="mailto:web.work334@gmail.com" className="text-muted link-accent">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
