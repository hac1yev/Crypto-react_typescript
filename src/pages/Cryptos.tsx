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
    const [crypto,setCrypto] = useState({
        uuid: "",
        name: ""
    });

    const handleSubmit = useCallback((e: React.FormEvent) => {
        e.preventDefault();
        dispatch(cryptoSliceAction.addCrypto(crypto));
        setCrypto({
            uuid: "",
            name: ""
        })
    }, [dispatch, crypto])

    const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setCrypto(
            {
                uuid: uniqid(),
                name: e.target.value
            }
        );
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
        return coins.filter((coin) => coin.name.includes(filterName));
    }, [filterName,coins]);
    
    console.log("CRYPTOS");
    
    return (
        <div>
            <CryptoForm handleSubmit={handleSubmit} handleChange={handleChange} name={crypto.name} />
            <CryptoFilterForm handleFilterChange={handleFilterChange} />
            <CryptoItems coins={filteredCoins} />
            <MyComponent />
            <button onClick={handleClick}>Increase</button>
            <h2>{count}</h2>
        </div>
    );
};

export default memo(Cryptos);