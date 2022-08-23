import React from "react";

const Crypto = ({ name, image}) => {

    return (
        <div>
            <h3>{name}</h3>
            <img src={`https://simpleswap.io/${image}`} />
        </div>

    )
}

export default Crypto;