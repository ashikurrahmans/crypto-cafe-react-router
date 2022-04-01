import React from "react";
import { Link } from "react-router-dom";

const CoinCard = (props) => {
  const { id, name, image, symbol } = props.coin;

  return (
    <div className="drop-shadow-2xl rounded-2xl w-[260px] bg-white p-4 m-4 mb-5">
      <Link to={`/coin-details/${id}`}>
        <div className="flex gap-4 justify-between ">
          <div className="flex-shrink-0 w-20 h-16 w-16">
            <img src={image} alt="coin image" />
          </div>
          <div className="flex-col justify-end">
            <h2>{name}</h2>
            <h2>{symbol}</h2>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CoinCard;
