import { Link } from 'react-router-dom';
import { hasCaseStudy } from '../data/portfolio.js';

/**
 * How a project card behaves when activated:
 *  - 'case'     → internal case-study page at /work/<slug>
 *  - 'external' → the live site, in a new tab (the original card behaviour)
 *  - 'none'     → not a link (no case study and no live URL)
 */
export function projectLinkType(item) {
  if (hasCaseStudy(item)) return 'case';
  if (item.url) return 'external';
  return 'none';
}

export function ProjectLink({ item, className = '', children }) {
  const type = projectLinkType(item);

  if (type === 'case') {
    return (
      <Link to={`/work/${item.slug}`} className={className}>
        {children}
      </Link>
    );
  }

  if (type === 'external') {
    return (
      <a href={item.url} target="_blank" rel="noopener noreferrer" className={className}>
        {children}
        <span className="sr-only"> (opens in a new tab)</span>
      </a>
    );
  }

  return <div className={className}>{children}</div>;
}
