import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import Main from "./Main";
import Title from "./Title";
import Seats from "./Seats";
import Seat from "./Seat";
import Footer from "./Footer";
import ReservationInfo from "./ReservationInfo";
import RenderIf from "./utilities/RenderIf";

import cpfMask from './utilities/cpfMask';

const ZERO = 0;

function ReservationInputs({ index, buyers, setBuyers }) {
  function handleNameInput(event) {
    buyers[index].name = event.target.value;
    setBuyers([...buyers]);
  }

  function handleCpfInput(event) {
    buyers[index].cpf = cpfMask(event.target.value);
    setBuyers([...buyers]);
  }

  return (
    <div className="buyer-inputs">
      <h2>Comprador do assento {buyers[index].seatName}:</h2>
      <div className="form-input">
        <label>Nome:</label>
        <input required value={buyers[index].name} onChange={handleNameInput} type="text" placeholder="Digite seu nome..." />
      </div>

      <div className="form-input">
        <label>CPF:</label>
        <input required value={buyers[index].cpf} onChange={handleCpfInput} type="text" placeholder="Digite seu CPF..." />
      </div>
    </div>
  );
}

function ReservationForm ({ children, reserve }) {
  function handleSubmit(event) {
    event.preventDefault();

    reserve();
  }

  return (
    <div className="reservation-form">
      <form onSubmit={handleSubmit}>
        { children }
        
        <RenderIf isTrue={children.length > ZERO}>
          <button type="submit" className="btn-primary">Reservar assento(s)</button>
        </RenderIf>
      </form>
    </div>
  );
}

function SeatLabels () {
  return (
    <div className="seat-labels">
      <div className="label">
        <Seat isAvailable={true} selectedSeat={true} />
        <h3>Selecionado</h3>
      </div>

      <div className="label">
        <Seat isAvailable={true} />
        <h3>Disponível</h3>
      </div>

      <div className="label">
        <Seat isAvailable={false} />
        <h3>Indisponível</h3>
      </div>
    </div>
  );
}

export default function ChooseSeat ({ setReservation }) {
  const [seats, setSeats] = useState([]);
  const [movie, setMovie] = useState({});
  const [session, setSession] = useState({});

  const [buyers, setBuyers] = useState([]);

  const { idSessao } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSessao}/seats`)
      .then(({ data }) => {
        const { name, day: { weekday, date }, movie, seats } = data;

        setSeats([...seats]);
        setMovie({...movie});
        setSession({ name, weekday, date });
      });
  }, []);

  const removeCpfMask = value => value.replaceAll('.', '').replaceAll('-', '');

  function getPostObject() {
    return {
      ids: buyers.map(buyer => buyer.idSeat),
      compradores: buyers.map(buyer => ({
        idAssento: buyer.idSeat,
        nome: buyer.name,
        cpf: removeCpfMask(buyer.cpf)
      })),
    };
  }

  function reserve() {
    axios
      .post('https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many', getPostObject())
      .then(() => {
          setReservation({ movie, session, buyers: [...buyers] });
          navigate('/sucesso', { replace: true });
        });
  }

  return (
    <>
      <Main withMarginBottom={true}>
        <Title>
          Selecione o(s) assento(s)
        </Title>
        <Seats>
          { seats.map((seat, index) => (
            <Seat
              key={index}
              id={seat.id}
              isAvailable={seat.isAvailable}
              name={seat.name}
              buyers={buyers}
              setBuyers={setBuyers}
            />
          )) }
        </Seats>
          
        <SeatLabels />

        <ReservationForm reserve={reserve}>
          { buyers.map((buyer, index) => (
            <ReservationInputs
              key={index}
              index={index}
              buyers={buyers}
              setBuyers={setBuyers}
            />
          )) }
        </ReservationForm>
      </Main>
      <Footer>
        <ReservationInfo
          image={movie.posterURL}
          title={movie.title}
          sessionDatetime={`${session.weekday} - ${session.name}`}
        />
      </Footer>
    </>
  );
}
