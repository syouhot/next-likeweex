"use client"
import Image from "next/image";
import { FaCaretDown, FaCaretUp } from 'react-icons/fa'
import { IoMdSwitch } from "react-icons/io";
import Marquee, { MarqueeItem } from "../../components/Marquee";
import { useState } from "react";

const listData: MarqueeItem[] = [
    {
        name: "BTC/USDT",
        status:"up",
        change:"1.23%",
        volume:"102949.2"
    }, {
        name: "ETH/USDT",
        status:"down",
        change:"-1.23%",
        volume:"3426.28"
    },
    {
        name: "BNB/USDT",
        status:"up",
        change:"1.23%",
        volume:"102949.2"
    },
    {
        name: "USDT/USDT",
        status:"up",
        change:"1.23%",
        volume:"102949.2"
    },
    {
        name: "XRP/USDT",
        status:"down",
        change:"-1.23%",
        volume:"3426.28"
    },
    {
        name: "ADA/USDT",
        status:"down",
        change:"-1.23%",
        volume:"3426.28"
    },
    {
        name: "SOL/USDT",
        status:"down",
        change:"-1.23%",
        volume:"3426.28"
    },
    {
        name: "DOGE/USDT",
        status:"down",
        change:"-1.23%",
        volume:"3426.28"
    },
    {
        name: "DOT/USDT",
        status:"down",
        change:"-1.23%",
        volume:"3426.28"
    },
    {
        name: "LTC/USDT",
        status:"down",
        change:"-1.23%",
        volume:"3426.28"
    },
    {
        name: "LINK/USDT",
        status:"down",
        change:"-1.23%",
        volume:"3426.28"
    },
    {
        name: "UNI/USDT",
        status:"down",
        change:"-1.23%",
        volume:"3426.28"
    },
    {
        name: "AVAX/USDT",
        status:"down",
        change:"-1.23%",
        volume:"3426.28"
    },
    {
        name: "MATIC/USDT",
        status:"down",
        change:"-1.23%",
        volume:"3426.28"
    },
]
export default function Floor() {
    const [showScroll, setShowScroll] = useState(true);
    return (
        <div className='h-[30px] w-full fixed bottom-0 flex flex-row justify-between items-end px-5 bg-[#0f1115] border-t border-[#262626] box-border'>
            <div className='flex flex-row items-center w-auto gap-2'>
                <Image src="/wifi.svg" alt="wifi" width={10} height={10} />
                <div className="text-[12px] text-green-600">系统连接稳定</div>
                <div className="text-white mx-2 text-[14px]">线路-1</div>
                <div className="text-green-600 text-[14px] flex flex-row items-center gap-1 cursor-pointer" >
                    <div>103ms</div>
                    <FaCaretDown className='text-[12px] text-gray-500' />
                </div>
                <IoMdSwitch className="text-white text-[18px] cursor-pointer" onClick={() => setShowScroll(!showScroll)}/>

            </div>
            {showScroll && <Marquee items={listData} />}
            <div className='flex flex-row gap-3 text-white text-[12px] relative'>
                <div>公告中心</div>
                <div>客户服务</div>
                <div className="bg-yellow-600 w-2 h-2 rounded-full absolute left-11"></div>
            </div>
        </div>
    )
}