import { memo } from "react";
import { CoinsItemsType } from "../types/types";
import CryptoItem from "./CryptoItem";

type CryptoItemsProps = {
    coins: CoinsItemsType[]
};

const CryptoItems = ({ coins }: CryptoItemsProps) => {
    console.log('CRYPTO ITEMS');

    return (
        <ul>
            {coins.map((coin) => (
                <CryptoItem key={coin.uuid} {...coin} />
            ))}
        </ul>
    );
};

export default memo(CryptoItems);