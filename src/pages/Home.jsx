import React from "react";

const Home = () => {
    return (
        <div className="absolute inset-0 flex flex-col items-center justify-center object-center">
            <div className="flex items-center gap-[10px]">
                <img className="w-[35px] h-[35px]" src="/imgs/coin.svg" alt="" />
                <span className="text-[25px] font-bold">10.346.140</span>
            </div>
            <div className="flex items-center justify-center mt-[30px] w-[250px] h-[236px] rounded-full bg-gradient-to-b from-[#7F8A8B] via-[#AD8D53] to-[#974A00]">
                <img className="w-[132px] h-[132px]" src="/imgs/logo.webp" alt="" />
            </div>
        </div>
    )
}

export default Home;