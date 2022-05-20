import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Main from "./Main";
import Title from "./Title";
import Button from "./shared/Button";

export default function Success ({ reservation }) {
  const { cpf, name, movie, seats, session } = reservation;

  const navigate = useNavigate();

  useEffect(() => {
    if(cpf === '' && name === '') {
      navigate('/', { replace: true });
    }
  }, []);

  return (
    <Main>
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
          <h2>Ingressos</h2>
          <div className="info">
            { seats.map((seat, index) => <p key={index}>Assento {seat}</p>) }
          </div>
        </div>

        <div className="buyers">
          <h2>Comprador</h2>
          <div className="info">
            <p>Nome: { name }</p>
            <p>CPF: { cpf }</p>
          </div>
        </div>
      </div>

      <div className="success-button">
        <Button>
          Voltar para Home
        </Button>
      </div>
    </Main>
  );
}
