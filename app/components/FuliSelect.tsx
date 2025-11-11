"use client"
import React, { useRef, useState } from 'react'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import LinkItem from './LinkItem';
import Image from 'next/image';

interface fuliSelectProps {
    listItem: fuliSelectModel[],
    title: string
}

type fuliSelectModel = {
    title: string,
    item: listItemType[]
}
type listItemType = {
    icon: React.ReactNode,
    text: string,
    description: string,
    titleIcon?: React.ReactNode
}

export default function FuliSelect({ listItem, title }: fuliSelectProps) {
    const [isHovered, setIsHovered] = useState(false);
    const closeTimer = useRef<NodeJS.Timeout | null>(null);

    // 清除关闭定时器
    const clearCloseTimer = () => {
        if (closeTimer.current) {
            clearTimeout(closeTimer.current as NodeJS.Timeout);
            closeTimer.current = null;
        }
    };

    // 处理鼠标进入组件区域
    const handleMouseEnter = () => {
        clearCloseTimer();
        setIsHovered(true);
    };

    // 处理鼠标离开组件区域
    const handleMouseLeave = () => {
        // 设置一个延迟关闭，以便检查鼠标是否移动到了下拉菜单上
        closeTimer.current = setTimeout(() => {
            setIsHovered(false);
        }, 150);
    };
    return (
        <div
            className="flex flex-col relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className="flex flex-row items-center gap-2 hover:text-yellow-400">
                <div>{title}</div>
                {isHovered ? <FaChevronUp className="text-yellow-400" /> : <FaChevronDown />}
            </div>
            {isHovered && (
                <div
                    className="absolute flex flex-row w-auto bg-transparent top-11 left-[-400] z-10 rounded-2xl overflow-hidden"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    {listItem.map((item) => (
                        <div
                            key={item.title}
                            className="bg-[#262626] text-white shadow-lg p-5 w-[300] border-l-black border-l"
                        >
                            <div className='mb-8'>{item.title}</div>
                            {item.item.map((entity, index2) => (
                                <LinkItem key={index2} icon={entity.icon} text={entity.text} description={entity.description} titleIcon={entity.titleIcon} />
                            ))}
                        </div>
                    ))}
                    <div
                        className="bg-[#262626] text-white shadow-lg p-5 w-[270px] border-l-black border-l"
                    >
                        <div className='flex flex-col items-center pt-5 px-4 gap-5 justify-between h-full'>
                            <div className='flex flex-col items-center pt-5 gap-5'>
                                <Image src="/fuli.png" alt="fuli" width={180} height={180} />
                                <div >福利中心</div>
                            </div>
                            <button className='border-white w-full border py-3 rounded-3xl text-[14px] hover:cursor-pointer hover:bg-white hover:text-black hover:font-bold'>详情</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
