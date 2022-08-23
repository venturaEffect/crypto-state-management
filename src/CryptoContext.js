import React, {useState, createContext, useEffect} from "react";

export const CryptoContext = createContext();

export const CryptoProvider = (props) => {

    const API_KEY = process.env.REACT_APP_API_KEY;

    const [cryptos, setCryptos] = useState([])

    const getCryptos = async () => {
        const response = await fetch(`https://api.simpleswap.io/v1/get_all_currencies?api_key=${API_KEY}&currencies`) 
        const data = await response.json();
        console.log(data);
        setCryptos(data)
    }
    
    useEffect(() => {
        getCryptos();
    }, [])

    return (
        <CryptoContext.Provider value={[cryptos, setCryptos]}> 
            {props.children}
        </CryptoContext.Provider>
    )
}

export default CryptoProvider;