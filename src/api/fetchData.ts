import axios from "axios";

const apiUrl = 'https://coinranking1.p.rapidapi.com';

const cryptos_options = {
    method: 'GET',
    params: {
        referenceCurrencyUuid: 'yhjMzLPhuIDl',
        timePeriod: '24h',
        'tiers[0]': '1',
        orderBy: 'marketCap',
        orderDirection: 'desc',
        limit: '5',
        offset: '0'
    },
    headers: {
      'X-RapidAPI-Key': 'b1b91afd29msh6e573e591a5c790p1baf61jsn47d60d4b1557',
      'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
    }
};

const crypto_options = {
    method: 'GET',
    params: {
        referenceCurrencyUuid: 'yhjMzLPhuIDl',
        timePeriod: '24h'
    },
    headers: {
        'X-RapidAPI-Key': 'b1b91afd29msh6e573e591a5c790p1baf61jsn47d60d4b1557',
        'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
    }
};
  
export const fetchCryptosData = async (baseUrl: string) => {
    const response = await axios.get(`${apiUrl}/${baseUrl}`, cryptos_options);
    const { data } = response;
    return data;
};

export const fetchCryptoData = async (baseUrl: string) => {
    const response = await axios.get(`${apiUrl}/${baseUrl}`, crypto_options);
    const { data } = response;
    return data;
};
