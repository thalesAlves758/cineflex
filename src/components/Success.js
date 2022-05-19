import Main from "./Main";
import Title from "./Title";
import Button from "./shared/Button";

export default function Success () {
  return (
    <Main>
      <Title greenColor={true}>
        Pedido feito com sucesso!
      </Title>

      <div className="informations">
        <div className="movie-session">
          <h2>Filme e sessão</h2>
          <div className="info">
            <p>Enola Holmes</p>
            <p>24/06/2021 15:00</p>
          </div>
        </div>

        <div className="tickets">
          <h2>Ingressos</h2>
          <div className="info">
            <p>Assento 15</p>
            <p>Assento 16</p>
          </div>
        </div>

        <div className="buyers">
          <h2>Comprador</h2>
          <div className="info">
            <p>Nome: João da Silva Sauro</p>
            <p>CPF: 123.456.789-10</p>
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
