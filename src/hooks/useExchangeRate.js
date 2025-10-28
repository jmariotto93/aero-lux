import { useState, useEffect } from "react";

export default function useExchangeRate(base = "USD", target = "BRL") {
  const [rate, setRate] = useState(null);

  useEffect(() => {
    fetch(`https://api.exchangerate.host/latest?base=${base}&symbols=${target}`)
      .then((res) => res.json())
      .then((data) => setRate(data.rates[target]))
      .catch((err) => console.error("Erro ao buscar cotação:", err));
  }, [base, target]);

  return rate;
}
