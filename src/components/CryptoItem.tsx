import { Link } from "react-router-dom";
import { CoinsItemsType } from "../types/types";
import { memo } from "react";

const CryptoItem = (props: CoinsItemsType) => {
    
    console.log("CRYPTO ITEM");

    return (
        <li>
            <Link to={`/coins/${props.uuid}`} className="bg-blue-500 text-white p-4">
                {props.name}
            </Link>
        </li>
    );
};

export default memo(CryptoItem);