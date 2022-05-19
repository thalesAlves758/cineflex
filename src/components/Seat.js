import { useState } from 'react';

const TWO = 2;

export default function Seat({ name = null, isAvailable, selectedSeat = false }) {
  const [selected, setSelected] = useState(selectedSeat);

  function handleClick() {
    setSelected(!selected);
  }

  const isClickable = () => isAvailable && name;

  const addPadLeft = str => str ? str.padStart(TWO, '0') : null;

  return (
    <div onClick={isClickable() ? handleClick : null} className={`seat ${!isAvailable ? 'unavailable' : ''} ${selected ? 'selected' : ''}`}>
      { addPadLeft(name) }
    </div>
  );
}
