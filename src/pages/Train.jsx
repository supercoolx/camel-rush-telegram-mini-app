const Train = () => {
    return (
        <div className="px-3">
            <div className="flex items-center justify-center gap-[10px] mt-[20px]">
                <img className="w-[26px] h-[26px]" src="/imgs/coin.svg" alt="" />
                <span className="text-[23px] font-bold">10.346.140</span>
            </div>
            <div className="mt-4 bg-[#262A2E] py-[4px] text-[11px] leading-none font-bold flex justify-evenly rounded-[10px]">
                <button className="rounded-full w-[74px] h-[26px] hover:bg-primary hover:text-black text-white transition-color duration-300">Skills</button>
                <button className="rounded-full w-[74px] h-[26px] hover:bg-primary hover:text-black text-white transition-color duration-300">Equipment</button>
                <button className="rounded-full w-[74px] h-[26px] hover:bg-primary hover:text-black text-white transition-color duration-300">Team</button>
            </div>
            <div className="grid grid-cols-2 gap-3 mt-5">
                <div className="bg-[#262A2E] rounded-[7px] pt-[6px] pb-[6px]">
                    <div className="flex items-center ml-2">
                        <img className="w-[29px] h-[26px]" src="/imgs/accel.svg" alt="" />
                        <span className="text-[11px] ml-3 font-bold">Acceleration</span>
                    </div>
                    <div className="flex items-center gap-4 ml-2 mt-[4px]">
                        <span className="text-[11px] font-thin">Profit per hour</span>
                        <div className="flex items-center gap-1">
                            <img className="w-[13px] h-[13px]" src="/imgs/profit.svg" alt="" />
                            <span className="text-[11px] leading-none font-bold">+50</span>
                        </div>
                    </div>
                    <hr className="mt-[2px] mb-[13px]" />
                    <div className="flex items-start gap-6 ml-2">
                        <span className="text-[11px] font-bold">lvl 0</span>
                        <div className="flex items-center gap-1">
                            <img className="w-[20px] h-[18px]" src="/imgs/coin.svg" alt="" />
                            <span className="text-[11px] leading-none font-bold">1K</span>
                        </div>
                    </div>
                </div>
                <div className="bg-[#262A2E] rounded-[7px] pt-[6px] pb-[6px]">
                    <div className="flex items-center ml-2">
                        <img className="w-[29px] h-[26px]" src="/imgs/agility.svg" alt="" />
                        <span className="text-[11px] ml-3 font-bold">Agility</span>
                    </div>
                    <div className="flex items-center gap-4 ml-2 mt-[4px]">
                        <span className="text-[11px] font-thin">Profit per hour</span>
                        <div className="flex items-center gap-1">
                            <img className="w-[13px] h-[13px]" src="/imgs/profit.svg" alt="" />
                            <span className="text-[11px] leading-none font-bold">+50</span>
                        </div>
                    </div>
                    <hr className="mt-[2px] mb-[13px]" />
                    <div className="flex items-start gap-6 ml-2">
                        <span className="text-[11px] font-bold">lvl 0</span>
                        <div className="flex items-center gap-1">
                            <img className="w-[20px] h-[18px]" src="/imgs/coin.svg" alt="" />
                            <span className="text-[11px] leading-none font-bold">1K</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Train;