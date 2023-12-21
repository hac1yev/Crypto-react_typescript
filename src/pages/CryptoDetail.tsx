import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchCryptoData } from "../api/fetchData";
import { cryptoDetailSliceAction } from "../store/cryptoDetail-slice";
import { CoinType } from "../types/types";

const CryptoDetail = () => {
    const { coinId } = useParams();
    const dispatch = useDispatch();
    const coin = useSelector((state: { cryptoDetailReducer: CoinType}) => state.cryptoDetailReducer.coin);

    useEffect(() => {
        fetchCryptoData(`coin/${coinId}`).then((data) => {
            dispatch(cryptoDetailSliceAction.getCryptoDetail(data.data.coin));
        });
    }, [dispatch]);
    
    console.log("CRYPTO DETAIL");

    return (
        <div>
            <h1>{coin.name}</h1>
            <h2>{coin.symbol}</h2>
            <h3>{coin.description}</h3>
            <h5>{coin.price}</h5>
        </div>
    );
};

export default CryptoDetail;