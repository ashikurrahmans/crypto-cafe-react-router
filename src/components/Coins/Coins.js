import React from "react";
import { useState, useEffect } from "react";
import Spinner from "../Spinner/Spinner";
import CoinCard from "./../CoinCard/CoinCard";

const Coins = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false"
    )
      .then((res) => res.json())
      .then((data) => setCoins(data));
    setLoading(false);
  }, []);
  return (
    <>
      {loading ? (
        <Spinner></Spinner>
      ) : (
        <div>
          <div className="px-4 pt-24 mx-auto mx-w-7xl md:px-2">
            <p className="text-center text-3xl font-bold text-gray">
              Available Crypto Currencies
            </p>
            <p className="text-center mb-12 font-normal text-gray-500">
              Total Coins : {coins.length}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center">
            {coins.map((coin) => (
              <CoinCard coin={coin} key={coin.id}></CoinCard>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Coins;
