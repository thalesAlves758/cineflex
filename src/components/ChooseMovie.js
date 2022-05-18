import Main from "./Main";
import Movie from "./Movie";
import Movies from "./Movies";
import Title from "./Title";

import movies from "../data/movies";

export default function ChooseMovie() {
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
