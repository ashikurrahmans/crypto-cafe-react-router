import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Spinner from "./../Spinner/Spinner";

const CoinDetails = () => {
  const { coinId } = useParams();
  const [coin, setCoin] = useState({});
  const [loading, setLoading] = useState(false);
  console.log(coin);
  useEffect(() => {
    setLoading(true);
    const url = `https://api.coingecko.com/api/v3/coins/${coinId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setCoin(data));
    setLoading(false);
  }, [coinId]);
  return (
    <>
      {loading ? (
        <Spinner></Spinner>
      ) : (
        <div className="px-4 pt-20 mx-auto max-2-7xl md:px-2">
          <div className="h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-4 content-center ">
            <div>
              <h1 className="text-3xl">General Info : </h1>
              <hr />
              <h1>Coin Name : {coin.name}</h1>
              <h1>
                Market Cap Rank :
                {coin.market_cap_rank ? coin.market_cap_rank : "Not Found"}
              </h1>
              <h1>
                Hash Algorithm :
                {coin.hashing_algorithm ? coin.hashing_algorithm : "Not Found"}
              </h1>
              <h1>Sybol : {coin.name}</h1>
            </div>

            <div className="flex justify-center items-center order-1 md:order-1">
              <img src={coin.image?.large} alt="coinImg" />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CoinDetails;
