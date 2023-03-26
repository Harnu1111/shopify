import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from "./page/Index";
import Shop from "./page/Shop";
import PhoneCard from "./components/shop/card/PhoneCard";
import LaptopCard from "./components/shop/card/LaptopCard";
import GameCard from "./components/shop/card/GameCard";
import SpeakerCard from "./components/shop/card/SpeakerCard";
import TvCard from "./components/shop/card/TvCard";
import Cart from "./page/Cart";
import Navvy from "./components/Navvy";
import SmartPhoneShop from "./components/shop/SmartPhoneShop";
import Laptop from "./components/shop/Laptop";
import Speaker from "./components/shop/Speakers";
import Games from "./components/shop/Games";
import Televison from "./components/shop/Televison";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Provider store={store}>
          <Navvy />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/PhoneCard/:id" element={<PhoneCard />} />
            <Route path="/LaptopCard/:id" element={<LaptopCard />} />
            <Route path="/GameCard/:id" element={<GameCard />} />
            <Route path="/SpeakerCard/:id" element={<SpeakerCard />} />
            <Route path="/TvCard/:id" element={<TvCard />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/smartPhoneShop" element={<SmartPhoneShop />} />
            <Route path="/laptop" element={<Laptop />} />
            <Route path="/speaker" element={<Speaker />} />
            <Route path="/games" element={<Games />} />
            <Route path="/televison" element={<Televison />} />
          </Routes>
        </Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
