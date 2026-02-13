import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Bio from "./features/personal/Bio";
import Cashier from "./features/projects/Cashier";
import MoneyPouch from "./features/projects/MoneyPouch";
import NavBar from "./ui/NavBar";
import Footer from "./ui/Footer";
import Portfolio from "./features/projects/Portfolio";
import TimeLineProff from "./features/personal/TimeLineProff";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<Bio />} />
          <Route path="overview/cashier" element={<Cashier />} />
          <Route path="overview/moneypouch" element={<MoneyPouch />} />
          <Route path="overview/portfolio" element={<Portfolio />} />
          <Route path="overview/timeline/upskill" element={<TimeLineProff />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
