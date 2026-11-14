import { Link, Outlet, useLocation } from 'react-router-dom';
import { useTheme } from '../hooks/useTheme';
import Footer from './Footer';

const NAV = [
  { to: '/', label: 'Home' },
  { to: '/topics', label: 'Topics' },
  { to: '/privacy-policy', label: 'Privacy' },
];

export default function Layout() {
  const { pathname } = useLocation();
  const { isDark, toggleTheme } = useTheme();

  return (
    <div className="bg-app flex min-h-screen flex-col">
      <header className="bg-header sticky top-0 z-40 border-b border-app">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
          <Link to="/" className="text-app flex items-center gap-2 no-underline">
            <span className="bg-accent flex h-8 w-8 items-center justify-center rounded-lg text-sm text-[#f5f5f3]">
              <i className="fas fa-graduation-cap" />
            </span>
            <span className="text-lg font-semibold">Peak Learn</span>
          </Link>

          <nav className="flex items-center gap-1">
            {NAV.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className={`rounded-md px-3 py-1.5 text-sm font-medium no-underline transition-colors ${
                  pathname === to
                    ? 'bg-accent-soft text-accent'
                    : 'text-secondary hover:bg-muted hover:text-app'
                }`}
              >
                {label}
              </Link>
            ))}
            <button
              type="button"
              onClick={toggleTheme}
              className="text-muted hover:bg-muted hover:text-app ml-2 cursor-pointer rounded-md p-2"
              aria-label="Toggle theme"
            >
              <i className={`fas ${isDark ? 'fa-sun' : 'fa-moon'}`} />
            </button>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
