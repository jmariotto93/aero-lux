import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Catalog } from "./components/Catalog";
import Cart from "./components/Cart";
import ThankYouPage from "./components/ThankYouPage";
import i18n from "./i18n";
import { useTranslation } from "react-i18next";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [currency, setCurrency] = useState("USD");
  const [rate, setRate] = useState(1);
  const [symbol, setSymbol] = useState("$");
  const { t } = useTranslation();

  const handleAddCart = (product, quantity) => {
    setCartItems((prevItems) => {
      //se não existir => adiciona o item
      // se existir => incremento a quantidade
      const itemExists = prevItems.find((item) => item.id === product.id);

      if (itemExists) {
        setTimeout(
          () => toast.info(`Quantidade do item ${product.name} atualizada!`),
          0
        );
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        setTimeout(
          () => toast.success(`${product.name} adicionado com sucesso!`),
          0
        );
        return [...prevItems, { ...product, quantity }];
      }
    });
  };

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

  const handleUpdateCart = (product, quantity) => {
    toast.info(`Quantidade do item ${product.name} atualizada!`);
    setCartItems((prevItems) => {
      return prevItems.map((item) =>
        item.id === product.id ? { ...item, quantity: +quantity } : item
      );
    });
  };

  return (
    <BrowserRouter>
      <nav>
        <div>
          <Link to="/">{t("catalog")}</Link>
          <Link to="/cart">{t("cart")}</Link>
        </div>

        {/* Bandeiras */}
        <div className="flags-container">
          <img
            className="flags"
            src="https://flagcdn.com/br.svg"
            alt="Português"
            onClick={() => handleLanguageChange("pt", "BRL")}
          />
          <img
            src="https://flagcdn.com/gb.svg"
            alt="Inglês"
            onClick={() => handleLanguageChange("en", "GBP")}
            className="flags"
          />
          <img
            src="https://flagcdn.com/de.svg"
            alt="Alemão"
            onClick={() => handleLanguageChange("de", "EUR")}
            className="flags"
          />
          <img
            src="https://flagcdn.com/es.svg"
            alt="Espanhol"
            onClick={() => handleLanguageChange("es", "EUR")}
            className="flags"
          />
          <img
            src="https://flagcdn.com/cn.svg"
            alt="Chinês"
            onClick={() => handleLanguageChange("zh", "CNY")}
            className="flags"
          />
          <img
            src="https://flagcdn.com/ru.svg"
            alt="Russo"
            onClick={() => handleLanguageChange("ru", "RUB")}
            className="flags"
          />
        </div>
      </nav>

      <div className="container">
        <Routes>
          <Route
            path="/"
            element={
              <Catalog
                onAddToCart={handleAddCart}
                currency={currency}
                rate={rate}
                symbol={symbol}
              />
            }
          />
          <Route
            path="/cart"
            element={
              <Cart cartItems={cartItems} onUpdateCart={handleUpdateCart} />
            }
          />
          <Route path="/thank-you" element={<ThankYouPage />} />
        </Routes>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
        pauseOnFocusLoss
        pauseOnHover
      />
    </BrowserRouter>
  );
}

export default App;
