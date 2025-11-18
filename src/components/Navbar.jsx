import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Navbar({ onLanguageChange }) {
  const { t } = useTranslation();

  return (
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
          onClick={() => onLanguageChange("pt", "BRL")}
        />
        <img
          className="flags"
          src="https://flagcdn.com/gb.svg"
          alt="Inglês"
          onClick={() => onLanguageChange("en", "GBP")}
        />
        <img
          className="flags"
          src="https://flagcdn.com/de.svg"
          alt="Alemão"
          onClick={() => onLanguageChange("de", "EUR")}
        />
        <img
          className="flags"
          src="https://flagcdn.com/es.svg"
          alt="Espanhol"
          onClick={() => onLanguageChange("es", "EUR")}
        />
        <img
          className="flags"
          src="https://flagcdn.com/cn.svg"
          alt="Chinês"
          onClick={() => onLanguageChange("zh", "CNY")}
        />
        <img
          className="flags"
          src="https://flagcdn.com/ru.svg"
          alt="Russo"
          onClick={() => onLanguageChange("ru", "RUB")}
        />
      </div>
    </nav>
  );
}
