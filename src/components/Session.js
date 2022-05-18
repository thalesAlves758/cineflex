function ButtonTime({ id, name }) {
  return (
    <button className="time">
      { name }
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
