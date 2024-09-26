const Race = () => {
    return (
        <div className="relative min-h-screen bg-[#582D29] pt-8">
            <img className="absolute w-full mt-[57px]" src="/imgs/line.webp" alt="" />
            <div className="bg-[url('/imgs/race-background.webp')] bg-cover px-2 pt-1 pb-4 border-b-2 border-black">
                <div className="grid grid-cols-5 gap-[6px]">
                    <div className="flex justify-center h-[434px] border-x-[4px] border-black bg-[#bd763dd1] p-[2px]">
                        <div className="w-[49px] h-[49px] border border-white rounded-full bg-[#045AFF] flex items-center justify-center shadow-[0_0_30px_#222222]">
                            <img className="w-[34px] h-[34px]" src="/imgs/camel.webp" alt="" />
                        </div>
                    </div>
                    <div className="flex justify-center h-[434px] border-x-[4px] border-black bg-[#bd763dd1] p-[2px]">
                        <div className="w-[49px] h-[49px] border border-white rounded-full bg-[#EA6020] flex items-center justify-center shadow-[0_0_30px_#222222]">
                            <img className="w-[34px] h-[34px]" src="/imgs/camel.webp" alt="" />
                        </div>
                    </div>
                    <div className="flex justify-center h-[434px] border-x-[4px] border-black bg-[#eeb700d1] p-[2px]">
                        <div className="w-[49px] h-[49px] border border-white rounded-full bg-[#2CCA36] flex items-center justify-center shadow-[0_0_30px_#222222]">
                            <img className="w-[34px] h-[34px]" src="/imgs/camel.webp" alt="" />
                        </div>
                    </div>
                    <div className="flex justify-center h-[434px] border-x-[4px] border-black bg-[#bd763dd1] p-[2px]">

                    </div>
                    <div className="flex justify-center h-[434px] border-x-[4px] border-black bg-[#bd763dd1] p-[2px]">

                    </div>
                </div>
                <div className="rounded-[10px] mt-3 bg-[#bd763dd1] py-[16px] px-[8px] grid grid-cols-5 gap-[10px]">
                    <div className="rounded-[10px] h-[85px] bg-primary"></div>
                    <div className="rounded-[10px] h-[85px] bg-primary"></div>
                    <div className="rounded-[10px] h-[85px] bg-primary"></div>
                    <div className="rounded-[10px] h-[85px] bg-primary"></div>
                    <div className="rounded-[10px] h-[85px] bg-primary"></div>
                </div>
            </div>
        </div>
    )
}

export default Race;