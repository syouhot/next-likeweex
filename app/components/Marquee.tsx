"use client";

import React, { useEffect, useRef, useState } from 'react';

export interface MarqueeItem {
    name: string;
    status: "up" | "down";
    change: string;
    volume: string;
}

interface MarqueeProps {
    items: MarqueeItem[];
    className?: string;
}

export default function Marquee({ items, className = "" }: MarqueeProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const [shouldScroll, setShouldScroll] = useState(false);
    const [isClient, setIsClient] = useState(true);

    useEffect(() => {
        if (!isClient) return;
        const checkOverflow = () => {
            if (containerRef.current && contentRef.current) {
                const containerWidth = containerRef.current.clientWidth;
                const contentWidth = contentRef.current.scrollWidth;
                setShouldScroll(contentWidth > containerWidth);
            }
        };

        checkOverflow();
        window.addEventListener('resize', checkOverflow);
        
        return () => {
            window.removeEventListener('resize', checkOverflow);
        };
    }, [isClient, items]);

    if (!isClient) {
        // 服务端渲染时返回静态内容
        return (
            <div className={`flex flex-row flex-1 mx-2 overflow-hidden gap-4 ${className}`}>
                {items.map((item, index) => (
                    <div key={index} className="flex flex-row items-center gap-1">
                        <div className="text-[12px] text-white">{item.name}</div>
                        <div className={`text-[12px] ${item.status === "up" ? "text-green-600" : "text-red-600"}`}>{item.change}</div>
                        <div className="text-[12px] text-gray-500">{item.volume}</div>
                    </div>
                ))}
            </div>
        );
    }

    if (!shouldScroll) {
        // 内容不超出容器宽度，静态显示
        return (
            <div ref={containerRef} className={`flex flex-row flex-1 mx-2 overflow-hidden gap-4 ${className}`}>
                <div ref={contentRef} className="flex flex-row gap-4">
                    {items.map((item, index) => (
                        <div key={index} className="flex flex-row items-center gap-1">
                            <div className="text-[12px] text-white">{item.name}</div>
                            <div className={`text-[12px] ${item.status === "up" ? "text-green-600" : "text-red-600"}`}>{item.change}</div>
                            <div className="text-[12px] text-gray-500">{item.volume}</div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    // 内容超出容器宽度，实现跑马灯效果
    return (
        <div ref={containerRef} className={`flex flex-row flex-1 mx-2 overflow-hidden gap-4 ${className}`}>
            <div className="relative w-full overflow-hidden">
                <div className="flex animate-marquee whitespace-nowrap">
                    <div ref={contentRef} className="flex flex-row gap-4">
                        {items.map((item, index) => (
                            <div key={index} className="flex flex-row items-center gap-1">
                                <div className="text-[12px] text-white">{item.name}</div>
                                <div className={`text-[12px] ${item.status === "up" ? "text-green-600" : "text-red-600"}`}>{item.change}</div>
                                <div className="text-[12px] text-gray-500">{item.volume}</div>
                            </div>
                        ))}
                    </div>
                    {/* 复制一份内容用于无缝循环 */}
                    <div className="flex flex-row gap-4">
                        {items.map((item, index) => (
                            <div key={`duplicate-${index}`} className="flex flex-row items-center gap-1">
                                <div className="text-[12px] text-white">{item.name}</div>
                                <div className={`text-[12px] ${item.status === "up" ? "text-green-600" : "text-red-600"}`}>{item.change}</div>
                                <div className="text-[12px] text-gray-500">{item.volume}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}