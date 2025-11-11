"use client";
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
const activeStyle = ' text-white border-b-2 border-white'
export default function LeftChart({ className = "" }: { className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0)
  useEffect(() => {
    const initializeTradingView = () => {
      // 检查容器是否存在
      if (!containerRef.current) {
        return;
      }
      // 清空容器
      containerRef.current.innerHTML = '';
      // 检查 TradingView 是否已存在
      if (typeof window.TradingView !== 'undefined') {
        createWidget();
      } else {
        // 加载 TradingView 脚本
        const script = document.createElement('script');
        script.src = 'https://s3.tradingview.com/tv.js';
        script.async = true;

        script.onload = () => {
          createWidget();
        };
        document.head.appendChild(script);
      }
    };

    const createWidget = () => {
      console.log('DebugLeftChart: Creating widget');

      if (typeof window.TradingView === 'undefined') {
        return;
      }

      if (!containerRef.current) {
        return;
      }

      try {
        const widget = new window.TradingView.widget({
          autosize: true,
          symbol: 'BINANCE:BTCUSDT',
          interval: 'D',
          timezone: 'Etc/UTC',
          theme: 'dark',
          style: '1',
          locale: 'zh_CN',
          enable_publishing: false,
          hide_top_toolbar: false,
          hide_side_toolbar: false,
          allow_symbol_change: true,
          calendar: false,
          details: false,
          hide_legend: false,
          hide_volume: false,
          hotlist: false,
          save_image: false,
          gridColor: 'rgba(46, 46, 46, 0.06)',
          toolbar_bg: '#000',
          backgroundColor: '#000',
          watchlist: [],
          withdateranges: false,
          container_id: containerRef.current.id
        })
        console.log(widget);

      } catch (error) {
        console.error('DebugLeftChart: Error creating widget:', error);
      }
    };

    // 设置容器 ID
    if (containerRef.current) {
      containerRef.current.id = 'debug-tradingview-chart';
    }

    // 初始化 TradingView
    initializeTradingView();

    // 清理函数
    return () => {
      // 移除可能添加的脚本
      const scripts = document.head.querySelectorAll('script[src*="tradingview"]');
      scripts.forEach(script => {
        document.head.removeChild(script);
      });
    };
  }, []);

  return (
    <div className={`${className} bg-black flex flex-col`}>
      <div className='flex flex-row items-center px-4 gap-4 cursor-pointer h-[40px]'>
        <div className={`${active === 0 ? activeStyle : ''} text-[12px] text-[#808080] py-2`} onClick={() => setActive(0)}>图标</div>
        <div className={`${active === 1 ? activeStyle : ''} text-[12px] text-[#c0bebe] py-2`} onClick={() => setActive(1)}>币种资料</div>
        <div className={`${active === 3 ? activeStyle : ''} text-[12px] text-[#c0bebe] py-2`} onClick={() => setActive(3)}>交易规则</div>
        <div className={`${active === 4 ? activeStyle : ''} text-[12px] text-[#c0bebe] py-2`} onClick={() => setActive(4)}>仓位挡位</div>

      </div>
      <div className="grow relative">
        <div
          ref={containerRef}
          className="w-full h-full absolute inset-0"
        >
          <p>Loading TradingView chart...</p>
        </div>
      </div>
    </div>
  );
};
