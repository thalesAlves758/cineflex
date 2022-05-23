import { Link } from "react-router-dom";

import Main from "./Main";
import Title from "./Title";
import Button from "./shared/Button";

export default function Success ({ reservation }) {
  const { movie, buyers, session } = reservation;

  return (
    <Main withMarginBottom={true}>
      <Title greenColor={true}>
        Pedido feito com sucesso!
      </Title>

      <div className="informations">
        <div className="movie-session">
          <h2>Filme e sessão</h2>
          <div className="info">
            <p>{movie.title}</p>
            <p>{session.date} - {session.name}</p>
          </div>
        </div>

        <div className="tickets">
          <h2>Ingressos e Compradores</h2>
          <div className="info">
            { buyers.map((buyer, index) => (
              <div key={index} className="buyer">
                <p>Assento {buyer.seatName}:</p>
                <p>Comprador: {buyer.name}</p>
                <p>CPF: {buyer.cpf}</p>
              </div>
            )) }
          </div>
        </div>
      </div>

      <div className="success-button">
        <Link to={`/`}>
          <Button>
            Voltar para Home
          </Button>
        </Link>
      </div>
    </Main>
  );
}
