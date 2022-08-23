import React, {useState, useContext} from "react";
import Crypto from "./Crypto"
import { CryptoContext } from "./CryptoContext";

export const CryptoList = () => {

        const [cryptos, setCryptos] = useContext(CryptoContext);
    return (
        <div>
            {cryptos.map((crypto, key) => (
                <Crypto
                    name={crypto.name}
                    image={crypto.image}
                />
            ))}
        </div>

    )
}

export default CryptoList;