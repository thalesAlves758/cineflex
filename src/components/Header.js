import { Link, useNavigate, useLocation } from 'react-router-dom';
import Button from './shared/Button';
import RenderIf from './utilities/RenderIf';

const MINUS_ONE = -1;

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <header>
      <RenderIf isTrue={location.pathname !== '/'}>
        <Button onClick={() => navigate(MINUS_ONE)}>
          Voltar
        </Button>
      </RenderIf>

      <Link to={'/'}>
        <div className="logo">
          CINEFLEX
        </div>
      </Link>
    </header>
  );
}
