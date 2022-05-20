import { Link, useNavigate } from 'react-router-dom';
import Button from './shared/Button';

const MINUS_ONE = -1;

export default function Header() {
  const navigate = useNavigate();

  return (
    <header>
      <Link to={'/'}>
        <Button onClick={() => navigate(MINUS_ONE, { replace: true })}>
          Voltar
        </Button>
        <div className="logo">
          CINEFLEX
        </div>
      </Link>
    </header>
  );
}
