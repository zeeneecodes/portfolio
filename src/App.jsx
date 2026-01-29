import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Bio from "./features/personal/Bio";
import Cashier from "./features/projects/Cashier";
import MoneyPouch from "./features/projects/MoneyPouch";
import NavBar from "./ui/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<Bio />} />
          <Route path="overview/cashier" element={<Cashier />} />
          <Route path="overview/moneypouch" element={<MoneyPouch />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
