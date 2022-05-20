import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <Link to={'/'}>
        <div className="logo">
          CINEFLEX
        </div>
      </Link>
    </header>
  );
}
