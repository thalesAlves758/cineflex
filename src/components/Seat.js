import { useState } from 'react';

const TWO = 2;

export default function Seat({ name = null, isAvailable, selectedSeat = false }) {
  const [selected, setSelected] = useState(selectedSeat);

  function handleClick() {
    if(!isAvailable) {
      alert("Esse assento não está disponível");
      return;
    }

    setSelected(!selected);
  }

  const addPadLeft = str => str ? str.padStart(TWO, '0') : null;

  return (
    <div onClick={name !== null ? handleClick : null} className={`seat ${!isAvailable ? 'unavailable' : ''} ${selected ? 'selected' : ''}`}>
      { addPadLeft(name) }
    </div>
  );
}
