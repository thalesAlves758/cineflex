import Main from "./Main";
import Title from "./Title";
import Seats from "./Seats";
import Seat from "./Seat";
import Footer from "./Footer";
import ReservationInfo from "./ReservationInfo";

import seats from "../data/seats";

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
  return (
    <>
      <Main withMarginBottom={true}>
        <Title>
          Selecione o(s) assento(s)
        </Title>
        <Seats>
          { seats.seats.map((seat, index) => (
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
          image={seats.movie.posterURL}
          title={seats.movie.title}
          sessionDatetime={`${seats.day.weekday} - ${seats.name}`}
        />
      </Footer>
    </>
  );
}
