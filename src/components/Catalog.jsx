import { useTranslation } from "react-i18next";
import productsData from "../data/products_mock.json";
import Product from "./Product";

export const Catalog = ({ currency, rate, symbol, onAddToCart }) => {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t("catalogTitle")}</h1>
      <div className="product-container">
        {productsData.map((product) => (
          <Product
            key={product.id}
            product={product}
            currency={currency}
            rate={rate}
            symbol={symbol}
            onAddToCart={onAddToCart}
          />
        ))}
      </div>
    </div>
  );
};
