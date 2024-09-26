const Friends = () => {
    return (
        <div className="pt-[40px] px-[30px]">
            <div className="flex items-center bg-[#262A2E] rounded-[8px]">
                <img className="w-[45px] h-[41px] mx-[42px] mt-[8px]" src="/imgs/friends.svg" alt="" />
                <div className="py-[10px]">
                    <div className="font-bold">Invite a friend</div>
                        <div className="flex items-center gap-2 mt-[8px] ml-[2px]">
                        <img className="w-[20px] h-[20px] rounded-full" src="/imgs/coin.svg" alt="" />
                        <span className="text-[12px] font-bold">25,000 for you</span>
                    </div>
                        <div className="flex items-center gap-2 mt-[6px] ml-[2px]">
                        <img className="w-[20px] h-[20px] rounded-full" src="/imgs/coin.svg" alt="" />
                        <span className="text-[12px] font-bold">5,000 for your friend</span>
                    </div>
                </div>
            </div>
            <button className="mt-[28px] w-full rounded-[10px] bg-primary hover:bg-primary/90 h-[49px] transition-all duration-300 text-[12px] text-black font-bold">Become a referal</button>
        </div>
    )
}

export default Friends;