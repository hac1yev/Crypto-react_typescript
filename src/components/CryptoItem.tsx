import { Link } from "react-router-dom";
import { CoinsItemsType } from "../types/types";
import { memo } from "react";

const CryptoItem = (props: CoinsItemsType) => {
    
    console.log("CRYPTO ITEM");

    return (
        <li className="flex justify-center w-full sm:w-1/2 lg:w-1/3 p-2 lg:h-3/5 sm:2/4 crypto-item">
            <Link to={`/coins/${props.uuid}`} className="w-full p-6">
                <div className="flex justify-between items-center w-full h-3/6">
                    <span>{props.name}</span>
                    <span className="w-fit flex justify-end">
                        <img className="w-1/6" src={props.iconUrl} alt="icon-url" />
                    </span>
                </div>
                <div className="flex justify-between items-end w-full h-3/6">
                    <span>{props.symbol}</span>
                    <h3>{props.price}</h3>
                </div>
            </Link>
        </li>
    );
};

export default memo(CryptoItem);