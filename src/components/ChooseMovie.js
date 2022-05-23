import axios from "axios";
import { useEffect, useState } from "react";

import Main from "./Main";
import Movie from "./Movie";
import Movies from "./Movies";
import Title from "./Title";
import RenderIf from "./utilities/RenderIf";
import Loading from "./shared/Loading";

export default function ChooseMovie() {
  const [loaded, setLoaded] = useState(false);
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get('https://mock-api.driven.com.br/api/v5/cineflex/movies')
      .then(({ data }) => {
        setMovies([...data]);
        setLoading(false);
        setLoaded(true);
      });
  }, []);

  return (
    <Main>
      <RenderIf isTrue={loading}>
        <Loading />
      </RenderIf>

      <RenderIf isTrue={loaded}>
        <Title>
          Selecione o filme
        </Title>

        <Movies>
          { movies.map((movie, index) => (
            <Movie
              key={index}
              id={movie.id}
              image={movie.posterURL}
              title={movie.title}
            />
          )) }
        </Movies>
      </RenderIf>
    </Main>
  );
}
