import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage/Homepage";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Coins from "./components/Coins/Coins";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import CoinDetails from "./components/CoinDetails/CoinDetails";
import BdAddress from "./components/Contact/BdAddress";
import UsAddress from "./components/Contact/UsAddress";
import NotFound from "./components/NotFound/NotFound";

const App = () => {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Homepage></Homepage>} />
        <Route path="/about" element={<About></About>} />
        <Route path="/coins" element={<Coins></Coins>} />
        <Route
          path="/coin-details/:coinId"
          element={<CoinDetails></CoinDetails>}
        />
        <Route path="/contact" element={<Contact />}>
          <Route path={"bd-address"} element={<BdAddress />}></Route>
          <Route path={"us-address"} element={<UsAddress />}></Route>
        </Route>
        <Route path="*" element={<NotFound></NotFound>} />
      </Routes>
      <Footer></Footer>;
    </div>
  );
};

export default App;
