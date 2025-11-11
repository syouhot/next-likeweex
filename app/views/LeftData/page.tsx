"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import { FaCaretUp } from "react-icons/fa";

const itemData = [
    {
        title: '24H 涨跌',
        value: '+1.23%',
    },
    {
        title: '标记价格',
        value: '101.740',
    },
    {
        title: '24h最高价',
        value: '104.999.9',
    },
    {
        title: '24h最低价',
        value: '99.223.3',
    },
    {
        title: '24h成交量',
        value: '1,021,917,249,214,45 SUSDT',
    },
    {
        title: '资金费率/倒计时',
        value: '0.003135%/07:02:10',
    },
]

const DataItem = ({ title, value }: { title: string, value: string }) => {
    return (
        <div className='flex flex-col'>
            <div className='text-[14px] text-gray-500'>{title}</div>
            <div className='text-[12px] font-bold'>{value}</div>
        </div>
    )
}
export default function LeftData({ className }: { className?: string }) {
    const [number, setNumber] = useState('101.223.3');
    return (
        <div className={`${className} bg-black py-1 px-4 text-white inline-block flex-row items-center box-border`}>
            <div className='flex flex-row gap-2 items-center w-full'>
                <div className='flex flex-row gap-2'>
                    <Image src="/btc_icon.png" alt="btc_icon" width={40} height={40} />
                    <div className='flex flex-col gap-1 group hover:cursor-pointer'>
                        <div className='flex flex-row items-center gap-1'>
                            <div>BTCSUSDT</div>
                            <FaCaretUp className='text-gray-500 transition-transform duration-300 group-hover:rotate-180' />
                        </div>
                        <div className='text-[12px] text-gray-500'>模拟</div>
                    </div>
                </div>
                <div className='text-[20px] font-bold mx-5'>
                    {number}
                </div>
                <div className='flex flex-row gap-5'>
                    {
                        itemData.map((item, index) => (
                            <DataItem key={index} title={item.title} value={item.value} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}


