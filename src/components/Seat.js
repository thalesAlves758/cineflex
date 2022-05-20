import { useState } from 'react';

const TWO = 2;

export default function Seat({ id = null, name = null, isAvailable, selectedSeat = false, selectedSeats, setSelectedSeats }) {
  const [selected, setSelected] = useState(selectedSeat);

  function handleClick() {
    if(!isAvailable) {
      alert("Esse assento não está disponível");
      return;
    }

    if(!selected) {
      setSelected(true);
      setSelectedSeats([...selectedSeats, { id, name }]);
    } else {
      setSelected(false);
      setSelectedSeats(selectedSeats.filter(seat => seat.id !== id));
    }
  }

  const addPadLeft = str => str ? str.padStart(TWO, '0') : null;

  return (
    <div onClick={name !== null ? handleClick : null} className={`seat ${!isAvailable ? 'unavailable' : ''} ${selected ? 'selected' : ''}`}>
      { addPadLeft(name) }
    </div>
  );
}
