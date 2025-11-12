"use client"
import Image from 'next/image'
import React, { useRef, useState } from 'react'
import { FaCaretDown, FaCaretUp } from 'react-icons/fa'
import SelectItem from './SelectItem'
import { FaArrowDownLong, FaArrowUpLong } from "react-icons/fa6";
const activeStyle = "border-1 border-gray-200 rounded-[3px]"
const imageList = ["/tabs1.svg", "/tabs2.svg", "/tabs3.svg"]
const listItem = [
    {
        id: 1,
        value: "0.1"
    }
]
const number1 = [
    ["103.584.9", "20.567", "34.0253","100%"],
    ["103.245.3", "19.876", "28.7621","90%"],
    ["103.789.1", "18.432", "22.9843","85%"],
    ["103.123.6", "17.987", "19.6524","72%"],
    ["103.654.2", "16.321", "15.7832","65%"],
    ["103.321.8", "15.654", "12.4567","50%"],
    ["103.876.4", "14.987", "9.8723","45%"],
    ["103.234.7", "13.210", "6.5432","30%"],
    ["103.765.9", "12.543", "3.7891","16%"],
    ["103.432.1", "11.876", "1.1567","5%"],
]

const number2 = [
    ["103.584.9", "0.1255", "0.1255","5%"],
    ["103.245.3", "0.4567", "2.3456","16%"],
    ["103.789.1", "0.7890", "4.5678","25%"],
    ["103.123.6", "1.2345", "8.9012","33%"],
    ["103.654.2", "1.6789", "12.3456","45%"],
    ["103.321.8", "2.1234", "18.7890","50%"],
    ["103.876.4", "2.5678", "24.1234","60%"],
    ["103.234.7", "3.0123", "30.4567","75%"],
    ["103.765.9", "3.4567", "33.7890","90%"],
    ["103.432.1", "3.9876", "36.3254","99%"],
]
export default function TabsOne() {
    const [active, setActive] = useState(0)
    const [isHovered, setIsHovered] = useState(false)
    const [proportion, setProportion] = useState(0.35)

    return (
        <div className='text-gray-500 relative px-3 py-1'>
            <div className='w-full flex justify-between '>
                <div className='flex items-center gap-2'>
                    {
                        imageList.map((item, index) => (
                            <Image key={index} src={item} alt={`tabs${index + 1}`} width={20} height={20} className={`${active === index ? activeStyle : ''} cursor-pointer`} onClick={() => setActive(index)} />
                        ))
                    }
                </div>
                <div className='relative'>
                    <div className='relative flex flex-row items-center text-[12px] gap-5 border text-gray-400 border-gray-600 rounded-[10px] px-2 py-1 cursor-pointer group' onClick={() => setIsHovered(!isHovered)}>
                        <div>0.1</div>
                        <FaCaretDown className={`text-gray-500 transition-transform duration-300 ${isHovered ? 'rotate-180' : ''}`} />
                    </div>
                    {isHovered && (
                        <SelectItem list={listItem} setIsHovered={setIsHovered} />
                    )}
                </div>
            </div>
            <div className='text-[13px] flex justify-between items-center my-2'>
                <div className='flex-1 text-left'>价格(SUUSDT)</div>
                <div className='flex-1 text-right'>数量(BTC)</div>
                <div className='flex-1 text-right'>总量(BTC)</div>
            </div>
            {number1.map((item, index) => (
                <div key={index} className='relative text-[13px] flex justify-between items-center py-1 text-[14px] leading-4'>
                    <div className='absolute h-full bg-[#2a1a1b] opacity-50 top-0 right-0' style={{ width: `${item[3]}` }}></div>
                    <div className='flex-1 text-left text-red-700 z-10'>{item[0]}</div>
                    <div className='flex-1 text-right text-gray-400 z-10'>{item[1]}</div>
                    <div className='flex-1 text-right text-gray-400 z-10'>{item[2]}</div>
                </div>
            ))}
            <div className='text-[18px] font-bold text-red-700 flex items-center my-2 gap-2'>
                <div className='text-left'>103.584.6 SUSDT</div>
                <FaArrowDownLong className='text-red-700' size={14} />
            </div>
            {number2.map((item, index) => (
                <div key={index} className='relative text-[13px] flex justify-between items-center py-1 text-[14px] leading-4'>
                    <div className='absolute h-full bg-[#15251e] opacity-50 top-0 right-0' style={{ width: `${item[3]}` }}></div>
                    <div className='flex-1 text-left text-green-700 z-10'>{item[0]}</div>
                    <div className='flex-1 text-right text-gray-400 z-10'>{item[1]}</div>
                    <div className='flex-1 text-right text-gray-400 z-10'>{item[2]}</div>
                </div>
            ))}
            <div className='text-[18px] font-bold text-red-700 flex items-center my-2 flex-row relative h-[30px] w-full'>
                <div className="absolute text-green-700 text-left flex flex-row item-center gap-2" style={{ width: `${proportion * 100}%`, clipPath: 'polygon(0 0, 100% 0, calc(100% - 20px) 100%, 0 100%)', backgroundColor: '#15251e' }}>
                    <div className='border-2 rounded px-[4px] py-[1px] border-green-700 w-6 h-6 flex items-center justify-center'>B</div>
                    <div className='text-[14px] pt-0.5'>{proportion * 100}%</div>
                </div>
                <div className="absolute right-0 justify-end flex flex-row item-center gap-2" style={{ width: `${(1 - proportion) * 100}%`, clipPath: 'polygon(20px 0, 100% 0, 100% 100%, 0 100%)', backgroundColor: '#2a1a1b' }}>
                    <div className='text-[14px] pt-0.5'>{(1 - proportion) * 100}%</div>
                    <div className='border-2 rounded px-[4px] py-[1px] border-red-700 w-6 h-6 flex items-center justify-center'>S</div>
                </div>
            </div>
        </div>
    )
}
