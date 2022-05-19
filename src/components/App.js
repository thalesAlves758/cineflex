import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from "./Header";
import ChooseMovie from "./ChooseMovie";
import ChooseSession from "./ChooseSession";
import ChooseSeat from "./ChooseSeat";
import Success from "./Success";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<ChooseMovie />} />
          {/* <ChooseSession /> */}
          {/* <ChooseSeat /> */}
          {/* <Success /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}
