import { useState } from 'react';

const TWO = 2;

export default function Seat({ id = null, name = null, isAvailable, selectedSeat = false, idSeats, setIdSeats }) {
  const [selected, setSelected] = useState(selectedSeat);

  function handleClick() {
    if(!isAvailable) {
      alert("Esse assento não está disponível");
      return;
    }

    if(!selected) {
      setSelected(true);
      setIdSeats([...idSeats, id]);
    } else {
      setSelected(false);
      setIdSeats(idSeats.filter(idSeat => idSeat !== id));
    }
  }

  const addPadLeft = str => str ? str.padStart(TWO, '0') : null;

  return (
    <div onClick={name !== null ? handleClick : null} className={`seat ${!isAvailable ? 'unavailable' : ''} ${selected ? 'selected' : ''}`}>
      { addPadLeft(name) }
    </div>
  );
}
