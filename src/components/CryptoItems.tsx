import { memo } from "react";
import { CoinsItemsType } from "../types/types";
import CryptoItem from "./CryptoItem";

type CryptoItemsProps = {
    coins: CoinsItemsType[]
};

const CryptoItems: React.FC<CryptoItemsProps> = ({ coins }) => {
    console.log('CRYPTO ITEMS');

    return (
        <ul className="crypto-container max-w-screen-xl container mx-auto">
            <div className="flex flex-wrap w-full">
                {coins.map((coin) => (
                    <CryptoItem key={coin.uuid} {...coin} />
                ))}
            </div>
        </ul>
    );
};

export default memo(CryptoItems);