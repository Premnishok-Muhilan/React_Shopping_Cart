import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createContext, useState } from "react";
import AllCardData from "./data/CardData.json";
import { ItemCard } from "./components/ItemCard";
import { HomePage } from "./components/HomePage";
import { CartPage } from "./components/CartPage";

export const CartContext = createContext([]);
export const ItemContext = createContext([]);

export const BadgeContext = createContext();

function App() {
  const [cartState, setCartState] = useState([]);
  const [itemState, setItemState] = useState(AllCardData);

  const [badgeState, setBadgeState] = useState(0);
  // console.log("itemState", itemState);

  return (
    <BadgeContext.Provider value={{ badgeState, setBadgeState }}>
      <ItemContext.Provider value={{ itemState, setItemState }}>
        <CartContext.Provider value={{ cartState, setCartState }}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/CartPage" element={<CartPage />} />
            </Routes>
          </BrowserRouter>
        </CartContext.Provider>
      </ItemContext.Provider>
    </BadgeContext.Provider>
  );
}

export default App;

