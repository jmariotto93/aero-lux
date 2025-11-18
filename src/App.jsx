import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Catalog } from "./components/Catalog";
import Cart from "./components/Cart";
import ThankYouPage from "./components/ThankYouPage";
import i18n from "./i18n";
import { useTranslation } from "react-i18next";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/NavBar";
import { useCart } from "./hooks/useCart";

function App() {
  const [currency, setCurrency] = useState("USD");
  const [rate, setRate] = useState(1);
  const [symbol, setSymbol] = useState("$");
  const { t } = useTranslation();
  const { cartItems, addToCart, updateCart, removeFromCart, checkout } =
    useCart();

  // busca a cotação atual com base na moeda escolhida
  useEffect(() => {
    const fetchRate = async () => {
      if (currency === "USD") {
        setRate(1);
        setSymbol("$");
        return;
      }

      try {
        const res = await fetch(
          `https://api.exchangerate-api.com/v4/latest/USD`
        );
        const data = await res.json();

        if (data && data.rates[currency]) {
          setRate(data.rates[currency]);
        }

        // define o símbolo da moeda
        switch (currency) {
          case "BRL":
            setSymbol("R$");
            break;
          case "EUR":
            setSymbol("€");
            break;
          case "RUB":
            setSymbol("₽");
            break;
          case "CNY":
            setSymbol("¥");
            break;
          default:
            setSymbol("$");
        }
      } catch (err) {
        console.error("Erro ao buscar cotação:", err);
      }
    };

    fetchRate();
  }, [currency]);

  // muda idioma + moeda ao clicar na bandeira
  const handleLanguageChange = (lang, curr) => {
    i18n.changeLanguage(lang);
    setCurrency(curr);
  };

  return (
    <BrowserRouter>
      <Navbar onLanguageChange={handleLanguageChange} />

      <div className="container">
        <Routes>
          <Route
            path="/"
            element={
              <Catalog
                onAddToCart={addToCart}
                currency={currency}
                rate={rate}
                symbol={symbol}
              />
            }
          />
          <Route
            path="/cart"
            element={
              <Cart
                cartItems={cartItems}
                onUpdateCart={updateCart}
                OnRemoveFromCart={removeFromCart}
                onCheckout={checkout}
              />
            }
          />
          <Route path="/thank-you" element={<ThankYouPage />} />
        </Routes>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={false}
        closeOnClick
        pauseOnFocusLoss
        pauseOnHover
      />
    </BrowserRouter>
  );
}

export default App;
