const Earn = () => {
    return (
        <div className="px-3">
            <div className="flex items-center justify-center gap-[10px] mt-[20px]">
                <img className="w-[26px] h-[26px]" src="/imgs/coin.svg" alt="" />
                <span className="text-[23px] font-bold">10.346.140</span>
            </div>
            <div className="mt-8 px-2 bg-[#262A2E] py-[10px] text-[11px] leading-none font-bold flex items-center gap-3 rounded-[10px]">
                <img className="w-[27px] h-[27px]" src="/imgs/telegram.svg" alt="" />
                <div className="">
                    <div className="text-[11px]">Join our TG channel</div>
                    <div className="flex items-center gap-2 mt-2">
                        <img className="w-[18px] h-[18px]" src="/imgs/coin.svg" alt="" />
                        <span className="text-[11px]">+100,000</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Earn;