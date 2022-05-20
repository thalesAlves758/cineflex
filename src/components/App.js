import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from "./Header";
import ChooseMovie from "./ChooseMovie";
import ChooseSession from "./ChooseSession";
import ChooseSeat from "./ChooseSeat";
import Success from "./Success";

export default function App() {
  const [reservation, setReservation] = useState({
    name: '',
    cpf: '',
    movie: {},
    seats: [],
    session: {},
  });
  
  console.log(reservation);

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<ChooseMovie />} />

          <Route path='/sessoes/:idFilme' element={<ChooseSession />} />

          <Route path='/assentos/:idSessao' element={<ChooseSeat setReservation={setReservation} />} />

          <Route path='/sucesso' element={<Success reservation={reservation} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
