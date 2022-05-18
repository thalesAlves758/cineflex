import Main from "./Main";
import Title from "./Title";
import Sessions from "./Sessions";
import Session from "./Session";
import Footer from "./Footer";
import ReservationInfo from "./ReservationInfo";

import showtimes from "../data/showtimes";

export default function ChooseSession() {
  return (
    <>
      <Main withMarginBottom={true}>
        <Title>
          Selecione o horário
        </Title>
        <Sessions>
          { showtimes.days.map((day, index) => (
            <Session
              key={index}
              weekday={day.weekday}
              date={day.date}
              showtimes={day.showtimes}
            />
          )) }
        </Sessions>
      </Main>
      <Footer>
        <ReservationInfo image={showtimes.posterURL} title={showtimes.title} />
      </Footer>
    </>
  );
}
