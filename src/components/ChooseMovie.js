import axios from "axios";
import { useEffect, useState } from "react";

import Main from "./Main";
import Movie from "./Movie";
import Movies from "./Movies";
import Title from "./Title";

export default function ChooseMovie() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get('https://mock-api.driven.com.br/api/v5/cineflex/movies')
      .then(({ data }) => {
        setMovies([...data]);
      });
  }, []);

  return (
    <Main>
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
    </Main>
  );
}
