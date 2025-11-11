
"use client"
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import React, { useRef, useState } from "react";
import LinkItem from "./LinkItem";

type listItemType = {
    icon: React.ReactNode,
    text: string,
    description: string,
    titleIcon?:React.ReactNode
}

interface LinkSelectProps {
    title: string,
    listItem: listItemType[]
}
export default function LinkSelect({ title, listItem }: LinkSelectProps) {
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
                    className="absolute top-10 left-0 mt-1 bg-[#262626] text-white rounded-2xl shadow-lg z-10 p-5 w-70 flex gap-2 flex-col"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    {listItem.map((item, index) => (
                        <LinkItem key={index} icon={item.icon} text={item.text} description={item.description} titleIcon={item.titleIcon} />
                    ))}
                </div>
            )}
        </div>
    )
}
