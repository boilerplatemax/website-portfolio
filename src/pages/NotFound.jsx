import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <section className="container-x grid min-h-[70vh] place-items-center pt-32 text-center">
      <div>
        <p className="font-display text-7xl font-bold gradient-text">404</p>
        <h1 className="mt-4 heading-lg">Page not found.</h1>
        <p className="mt-3 text-ink-600 dark:text-ink-300">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link to="/" className="btn-primary mt-8">
          Back home
        </Link>
      </div>
    </section>
  );
}
