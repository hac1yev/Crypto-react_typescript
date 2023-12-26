import { memo, useCallback, useEffect, useMemo, useState } from "react";
import CryptoItems from "../components/CryptoItems";
import { useDispatch, useSelector } from "react-redux";
import { CoinsType } from "../types/types";
import { fetchCryptosData } from "../api/fetchData";
import { cryptoSliceAction } from "../store/crypto-slice";
import CryptoForm from "./CryptoForm";
import MyComponent from "../components/MyComponent";
import uniqid from 'uniqid';
import CryptoFilterForm from "./CryptoFilterForm";

const Cryptos = () => {
    const coins = useSelector((state: { cryptoReducer: CoinsType }) => state.cryptoReducer.coins);
    const dispatch = useDispatch();
    const [count,setCount] = useState(0);
    const [filterName,setFilterName] = useState("");
    const [cryptoName,setCryptoName] = useState("");
    const [cryptoIconUrl,setCryptoIconUrl] = useState("");
    const [cryptoSymbol,setCryptoSymbol] = useState("");
    const [cryptoPrice,setCryptoPrice] = useState("");    

    const handleSubmit = useCallback((e: React.FormEvent) => {
        e.preventDefault();
        
        const cryptoData = {
            uuid: uniqid(),
            name: cryptoName,
            iconUrl: cryptoIconUrl,
            symbol: cryptoSymbol,
            price: cryptoPrice
        }

        console.log(cryptoData)

        dispatch(cryptoSliceAction.addCrypto(cryptoData));

        setCryptoName("");
        setCryptoIconUrl("");
        setCryptoSymbol("");
        setCryptoPrice("");
    }, [dispatch, cryptoName,cryptoIconUrl,cryptoSymbol,cryptoPrice])

    const handleNameChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setCryptoName(e.target.value)
    }, []);
    const handleIconUrlChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setCryptoIconUrl(e.target.value)
    }, []);
    const handleSymbolChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setCryptoSymbol(e.target.value)
    }, []);
    const handlePriceChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setCryptoPrice(e.target.value)
    }, []);

    const handleFilterChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setFilterName(e.target.value);
    }, []);

    useEffect(() => {
        fetchCryptosData('coins').then((data) => {
            dispatch(cryptoSliceAction.getAllCryptos(data.data.coins));
        });
    }, [dispatch]);

    const handleClick = () => {
        setCount(prev => prev + 1);
    }
    
    let filteredCoins = useMemo(() => {
        return coins.filter((coin) => coin.name.toLocaleLowerCase('AZ').includes(filterName));
    }, [filterName,coins]);
    
    console.log("CRYPTOS");
    
    return (
        <div>
            <CryptoForm 
                handleSubmit={handleSubmit} 
                handleNameChange={handleNameChange}
                handleIconUrlChange={handleIconUrlChange}
                handleSymbolChange={handleSymbolChange}
                handlePriceChange={handlePriceChange}
                name={cryptoName}
                iconUrl={cryptoIconUrl}
                symbol={cryptoSymbol}
                price={cryptoPrice}
            />
            <CryptoFilterForm handleFilterChange={handleFilterChange} />
            <CryptoItems coins={filteredCoins} />
            <MyComponent />
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleClick}>Increase</button>
            <h2>{count}</h2>
        </div>
    );
};

export default memo(Cryptos);