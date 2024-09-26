import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "@/components/Footer";

const Layout = () => {
    return (
        <div className="bg-black">
            <div className="relative mx-3 pt-[14px] mb-[9px] z-10">
                <div className="flex items-center">
                    <img className="w-[21px] h-[21px]" src="/imgs/camel.webp" alt="" />
                    <span className="ml-3 text-xs font-bold">User name</span>
                </div>
                <div className="flex justify-between mt-[13px] text-[11px] font-bold">
                    <div className="">
                        <div className="flex justify-between">
                            <div>Platinum &gt;</div>
                            <div>4/11</div>
                        </div>
                        <div className="mt-[2px] w-[109px] h-[9px] rounded-full bg-[#C2C2C2]">
                            <div className="h-[9px] rounded-full bg-primary w-1/2"></div>
                        </div>
                    </div>
                    <div className="w-[175px] h-[33px] rounded-full backdrop-blur-sm bg-white/20 pl-10">
                        <p>Profit per hour</p>
                        <div className="flex gap-2">
                            <img className="w-[14px] h-[14px]" src="/imgs/coin.svg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative items-center border border-[#f0b93b] border-b-0 rounded-t-[35px] min-h-[calc(100vh-161px)] bg-[#1D1F23] w-[calc(100vw+20px)] -translate-x-[10px] shadow-[0_-15px_15px_#664E16] px-[10px]">
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}

export default Layout;