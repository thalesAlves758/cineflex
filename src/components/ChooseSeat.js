import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import Main from "./Main";
import Title from "./Title";
import Seats from "./Seats";
import Seat from "./Seat";
import Footer from "./Footer";
import ReservationInfo from "./ReservationInfo";

const ELEVEN = 11;

function ReservationForm ({ name, setName, cpf, setCpf, reserve }) {
  function handleNameInput(event) {
    setName(event.target.value);
  }

  function handleCpfInput(event) {
    const onlyNumberRegex = /^[0-9]+$/;
    const { value } = event.target;

    const isValidValue = () => (value === '' || onlyNumberRegex.test(value)) && value.length <= ELEVEN;
    
    if(isValidValue()) {
      setCpf(value);
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    reserve();
  }

  return (
    <div className="reservation-form">
      <form onSubmit={handleSubmit}>
        <div className="form-input">
          <label>Nome do comprador:</label>
          <input required value={name} onChange={handleNameInput} type="text" placeholder="Digite seu nome..." />
        </div>

        <div className="form-input">
          <label>CPF do comprador:</label>
          <input required value={cpf} onChange={handleCpfInput} type="text" placeholder="Digite seu CPF..." />
        </div>

        <button type="submit" className="btn-primary">Reservar assento(s)</button>
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

export default function ChooseSeat () {
  const [seats, setSeats] = useState([]);
  const [movie, setMovie] = useState({});
  const [session, setSession] = useState({});

  const [idSeats, setIdSeats] = useState([]);
  const [name, setName] = useState('');
  const [cpf, setCpf] = useState('');

  const { idSessao } = useParams();

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

  function reserve() {
    axios
      .post('https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many', {
        ids: idSeats,
        name,
        cpf
      })
      .then(response => {
        console.log(response.status);
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
              idSeats={idSeats}
              setIdSeats={setIdSeats}
            />
          )) }
        </Seats>
        
        <SeatLabels />

        <ReservationForm
          name={name}
          setName={setName}
          cpf={cpf}
          setCpf={setCpf}
          reserve={reserve}
        />
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
