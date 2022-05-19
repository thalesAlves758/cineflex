import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import Main from "./Main";
import Title from "./Title";
import Seats from "./Seats";
import Seat from "./Seat";
import Footer from "./Footer";
import ReservationInfo from "./ReservationInfo";

function ReservationForm () {
  return (
    <div className="reservation-form">
      <div className="form-input">
        <label>Nome do comprador:</label>
        <input type="text" placeholder="Digite seu nome..." />
      </div>

      <div className="form-input">
        <label>CPF do comprador:</label>
        <input type="text" placeholder="Digite seu CPF..." />
      </div>

      <button className="btn-primary">Reservar assento(s)</button>
    </div>
  );
}

function SeatLabels () {
  return (
    <div className="seat-labels">
      <div className="label">
        <Seat isAvailable={true} selected={true} />
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
              isAvailable={seat.isAvailable}
              name={seat.name}
            />
          )) }
        </Seats>
        
        <SeatLabels />

        <ReservationForm />
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
