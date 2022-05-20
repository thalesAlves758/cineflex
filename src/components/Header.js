import { Link } from 'react-router-dom';
import Button from './shared/Button';

export default function Header() {
  return (
    <header>
      <Link to={'/'}>
        <Button>
          Voltar
        </Button>
        <div className="logo">
          CINEFLEX
        </div>
      </Link>
    </header>
  );
}
