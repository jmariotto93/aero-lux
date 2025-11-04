import { useState } from "react";
import { useTranslation } from "react-i18next";

const Product = ({ product, currency, rate, symbol, onAddToCart }) => {
  const [quantity, setQuantity] = useState(1);

  const { i18n, t } = useTranslation();
  const convertedPrice = product.price * (rate || 1);

  const abbreviations = {
    "pt-BR": { million: " MI", thousand: " mil" },
    "en-US": { million: " M", thousand: " K" },
    "de-DE": { million: " Mio", thousand: " Tsd" },
    "es-ES": { million: " M", thousand: " mil" },
    "ru-RU": { million: " млн", thousand: " тыс" },
    "zh-CN": { million: " 百万", thousand: " 千" },
  };

  const localeMap = {
    pt: "pt-BR",
    en: "en-US",
    de: "de-DE",
    es: "es-ES",
    ru: "ru-RU",
    zh: "zh-CN",
  };

  const currentLocale = localeMap[i18n.language] || "en-US";
  const abbr = abbreviations[currentLocale];

  const formatAbbreviatedPrice = (value) => {
    let formattedNumber;
    if (value >= 1_000_000) {
      formattedNumber = (value / 1_000_000).toFixed(1);
      return (
        symbol +
        new Intl.NumberFormat(currentLocale, {
          style: "decimal",
          minimumFractionDigits: 1,
          maximumFractionDigits: 1,
        }).format(formattedNumber) +
        abbr.million
      );
    }
    if (value >= 1_000) {
      formattedNumber = (value / 1_000).toFixed(1);
      return (
        symbol +
        new Intl.NumberFormat(currentLocale, {
          style: "decimal",
          minimumFractionDigits: 1,
          maximumFractionDigits: 1,
        }).format(formattedNumber) +
        abbr.thousand
      );
    }
    return new Intl.NumberFormat(currentLocale, {
      style: "currency",
      currency: currency,
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(value);
  };

  return (
    <div className="product">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{formatAbbreviatedPrice(convertedPrice)}</p>
      <div className="cart-buttons">
        <select onChange={(e) => setQuantity(e.target.value)}>
          {[...Array(10).keys()].map((x) => (
            <option key={x + 1} value={x + 1}>
              {x + 1}
            </option>
          ))}
        </select>
        <button onClick={() => onAddToCart(product, quantity)}>
          {t("addToCart")}
        </button>
      </div>
    </div>
  );
};

export default Product;
