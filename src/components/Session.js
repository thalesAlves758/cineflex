import { Link } from 'react-router-dom';

function ButtonTime({ id, name }) {
  return (
    <button className="time btn-primary">
      <Link to={`/assentos/${id}`}>
        { name }
      </Link>
    </button>
  );
}

function Showtimes({ children }) {
  return (
    <div className="showtimes">
      { children }
    </div>
  );
}

export default function Session({ weekday, date, showtimes }) {
  return (
    <div className="session">
      <h2>{weekday} - {date}</h2>
      <Showtimes>
        { showtimes.map((time, index) => (
          <ButtonTime 
            key={index}
            id={time.id}
            name={time.name}
          />
        )) }
      </Showtimes>
    </div>
  );
}
