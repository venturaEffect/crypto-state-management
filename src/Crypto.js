import React from "react";

const Crypto = ({ name, image}) => {

    return (
        <div className="bg-[#181918] m-4 flex flex-1 2xl:min-w-[450px] 2xl:max-w-[500px] sm:min-w-[270px] sm:max-w-[300px] min-w-full flex-col p-3 rounded-md hover:shadow-2xl">
            <h3 className="text-white text-3xl text-center my-2">{name}</h3>
            <img src={`https://simpleswap.io/${image}`} />
        </div>

    )
}

export default Crypto;