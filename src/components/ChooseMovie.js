import Main from "./Main";
import Movie from "./Movie";
import Movies from "./Movies";
import Title from "./Title";

const movies = [
  {
    image: "https://2.bp.blogspot.com/-TOCRLYBV3N4/UsbbAXBZmkI/AAAAAAAAPuM/DbPHOcuv6HA/s1600/A-Menina-Que-Roubava-Livros-capa-filme-1.jpg",
    title: "A menina que roubava livros",
  },
  {
    image: "https://2.bp.blogspot.com/-TOCRLYBV3N4/UsbbAXBZmkI/AAAAAAAAPuM/DbPHOcuv6HA/s1600/A-Menina-Que-Roubava-Livros-capa-filme-1.jpg",
    title: "A menina que roubava livros",
  },
  {
    image: "https://2.bp.blogspot.com/-TOCRLYBV3N4/UsbbAXBZmkI/AAAAAAAAPuM/DbPHOcuv6HA/s1600/A-Menina-Que-Roubava-Livros-capa-filme-1.jpg",
    title: "A menina que roubava livros",
  },
  {
    image: "https://2.bp.blogspot.com/-TOCRLYBV3N4/UsbbAXBZmkI/AAAAAAAAPuM/DbPHOcuv6HA/s1600/A-Menina-Que-Roubava-Livros-capa-filme-1.jpg",
    title: "A menina que roubava livros",
  },
];

export default function ChooseMovie () {
  return (
    <Main>
      <Title>
        Selecione o filme
      </Title>
      <Movies>
        { movies.map(movie => <Movie image={movie.image} title={movie.title} />) }
      </Movies>
    </Main>
  );
}
