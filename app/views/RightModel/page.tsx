"use client"
import React, { useRef, useState } from 'react'
import { FaCaretDown, FaCaretUp } from 'react-icons/fa'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PiWarningCircle } from "react-icons/pi";
import RightTabsOne from '@/app/components/RightTabsOne';
import { Tooltip } from 'antd';
const activeStyle2 = ' text-white border-b-2 border-white'
const activeStyle = 'bg-[#333333] text-white '
const selectType = [
  {
    id: 1,
    name: '条件委托',
  },
  {
    id: 2,
    name: '只做Maker',
  },
]
export default function RightModel({ className, style }: { className?: string, style?: React.CSSProperties }) {
  const [active, setActive] = useState(0)
  const [active2, setActive2] = useState(0)
  const [tabsSelected, setTabsSelected] = useState(1)
  const [isHovering, setIsHovering] = useState(false)
  const closeTimer = useRef<NodeJS.Timeout | null>(null);
  const handleEnterHovering = () => {
    clearCloseTimer();
    setIsHovering(true)
  }
  // 清除关闭定时器
  const clearCloseTimer = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current as NodeJS.Timeout);
      closeTimer.current = null;
    }
  };
  const handleLeaveHovering = () => {
    closeTimer.current = setTimeout(() => {
      setIsHovering(false);
    }, 150);
  }

  return (
    <div className={`${className} bg-black text-white flex flex-col h-full`} style={style}>
        <div className='flex flex-row justify-between items-center h-[30px] px-4'>
          <div className='flex flex-row gap-1 text-[12px] text-gray-300'>
            <div>全仓</div>
            <div>合仓</div>
            <FaCaretDown className='text-[12px] text-gray-500' />
          </div>
          <div className='flex flex-row gap-1 text-[12px] text-gray-300 pr-10'>
            <div>杠杆</div>
            <div>20x</div>
            <FaCaretDown className='text-[12px] text-gray-500' />
          </div>
        </div>
        <div className=' w-full h-[50px] mt-2 px-4'>
          <div className='bg-[#222222] mx-1 p-[3px] flex flex-row items-center rounded-[8px]'>
            <div className={`${active === 0 ? activeStyle : ''} flex-1 text-center rounded-[8px] py-1 cursor-pointer text-gray-400`} onClick={() => setActive(0)}>开仓</div>
            <div className={`${active === 1 ? activeStyle : ''} flex-1 text-center rounded-[8px] py-1 cursor-pointer text-gray-400`} onClick={() => setActive(1)}>平仓</div>
          </div>
        </div>
        <div className='flex flex-row justify-between items-center relative px-4'>
          {/* <Tabs defaultValue="1" className='w-full'>
          <div className='border-b-1 border-[#333333] w-full'>
            <TabsList >
              <TabsTrigger value="1" className='bg-transparent text-[12px]'>限价</TabsTrigger>
              <TabsTrigger value="2" className='bg-transparent text-[12px]'>市价</TabsTrigger>
              <TabsTrigger value="3" className='bg-transparent text-[12px]'>
                <span>条件委托</span>
                <FaCaretDown className='text-[12px] text-gray-500' />
              </TabsTrigger>
            </TabsList>
          </div>
          <TabsContent value="1" className="w-full h-full">
            <RightTabsOne />
          </TabsContent>
          <TabsContent value="2" className="w-full">在这里更改你的密码。</TabsContent>
          <TabsContent value="3" className="w-full">在这里更改你的密码。</TabsContent>
        </Tabs> */}
          <div className='border-b-2 border-[#333333] box-border relative w-full h-[40px]'>
            <div className='flex flex-row items-center gap-4 cursor-pointer absolute h-[42px]'>
              <div className={`${active2 === 0 ? activeStyle2 : ''} text-[12px] text-[#808080] py-2`} onClick={() => setActive2(0)}>限价</div>
              <div className={`${active2 === 1 ? activeStyle2 : ''} text-[12px] text-[#c0bebe] py-2`} onClick={() => setActive2(1)}>市价</div>
              <div className='flex flex-row items-center gap-1 cursor-pointer relative' onMouseEnter={handleEnterHovering} onMouseLeave={handleLeaveHovering}>
                <div className='text-[12px] text-[#c0bebe] py-2'>{selectType.find(item => item.id === tabsSelected)?.name}</div>
                <FaCaretDown className='text-[12px] text-gray-500' />
                {
                  isHovering &&
                  <div className='z-10 absolute top-8 left-0 text-[14px] w-[140px] h-[110px] bg-[#262626] border border-[#313131] rounded-2xl p-3 text-white cursor-pointer flex flex-col gap-2 flex flex-col justify-around' onMouseEnter={handleEnterHovering} onMouseLeave={handleLeaveHovering}>
                    {selectType.map(item => (
                      <div key={item.id} className={`${tabsSelected === item.id ? 'bg-[#313131]' : ''} text-center p-2 rounded-[8px] hover:bg-[#313131]`} onClick={() => { setTabsSelected(item.id) }}>{item.name}</div>

                    ))}
                  </div>
                }
              </div>
            </div>
          </div>
          <Tooltip placement='left' color='#292929' title={<div className='px-2 text-gray-300 rounded-[8px] text-[12px]'>
            <div className='text-[14px] text-white'>只做Maker:</div>
            <div>
              只做Maker (Post Only) 订单不会立刻在市场成交，保证用户始终为Maker，如果委托会立即与已有委托成交，那么该委托会被取消。</div>
            <div className='text-[14px] text-right cursor-pointer text-white'>了解更多</div>
          </div>
          }>
            <PiWarningCircle className='text-gray-600 absolute right-4 top-3 cursor-pointer' />
          </Tooltip>
        </div>
        <RightTabsOne />
      </div>

  )
}
