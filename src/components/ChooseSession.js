import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import Main from "./Main";
import Title from "./Title";
import Sessions from "./Sessions";
import Session from "./Session";
import Footer from "./Footer";
import ReservationInfo from "./ReservationInfo";
import RenderIf from "./utilities/RenderIf";
import Loading from "./shared/Loading";

export default function ChooseSession() {
  const [loaded, setLoaded] = useState(false);
  const [loading, setLoading] = useState(true);

  const [movie, setMovie] = useState({});
  const [days, setDays] = useState([]);

  const { idFilme } = useParams();

  useEffect(() => {
    axios
      .get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${idFilme}/showtimes`)
      .then(({ data }) => {
        const { posterURL, title, days } = data;
        
        setMovie({ posterURL, title });
        setDays([...days]);

        setLoading(false);
        setLoaded(true);
      });
  }, []);

  return (
    <>
      <RenderIf isTrue={loading}>
        <Loading />
      </RenderIf>

      <RenderIf isTrue={loaded}>
        <Main withMarginBottom={true}>
          <Title>
            Selecione o horário
          </Title>
          <Sessions>
            { days.map((day, index) => (
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
          <ReservationInfo image={movie.posterURL} title={movie.title} />
        </Footer>
      </RenderIf>
    </>
  );
}
