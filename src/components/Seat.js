import { useState } from 'react';

const TWO = 2;

export default function Seat({ id = null, name = null, isAvailable, selectedSeat = false, buyers, setBuyers }) {
  const [selected, setSelected] = useState(selectedSeat);

  function handleClick() {
    if(!isAvailable) {
      window.alert("Esse assento não está disponível");
      return;
    }

    if(!selected) {
      setSelected(true);
      setBuyers([...buyers, { idSeat: id, seatName: name, name: '', cpf: '' }]);
    } else {
      const thisSeat = buyers.find(buyer => buyer.idSeat === id);

      if(thisSeat && (thisSeat.name !== '' || thisSeat.cpf !== '')) {
        const canDelete = window.confirm("Esse assento possui dados preenchidos. Deseja realmente removê-lo?");

        if(!canDelete) {
          return;
        }
      }
      
      setSelected(false);
      setBuyers(buyers.filter(buyer => buyer.idSeat !== id));
    }
  }

  const addPadLeft = str => str ? str.padStart(TWO, '0') : null;

  return (
    <div onClick={name !== null ? handleClick : null} className={`seat ${!isAvailable ? 'unavailable' : ''} ${selected ? 'selected' : ''}`}>
      { addPadLeft(name) }
    </div>
  );
}
