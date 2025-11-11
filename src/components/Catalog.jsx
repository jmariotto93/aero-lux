import { useTranslation } from "react-i18next";
import productsData from "../data/products_mock.json";
import Product from "./Product";

export const Catalog = ({ currency, rate, symbol, onAddToCart }) => {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t("catalogTitle")}</h1>
      <div className="product-container">
        {[...Array(16)].map((_, i) => {
          const product = productsData[i % productsData.length]; // repete os 6 produtos
          return (
            <Product
              key={`${product.id}-${i}`}
              product={product}
              currency={currency}
              rate={rate}
              symbol={symbol}
              onAddToCart={onAddToCart}
            />
          );
        })}
      </div>
    </div>
  );
};
