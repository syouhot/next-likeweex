import React, { useRef } from 'react'
import { SlCalculator, SlPlus } from "react-icons/sl";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { FaCaretDown, FaCaretUp } from 'react-icons/fa'
import { Slider } from "@/components/ui/slider"
import { CustomSlider } from '@/components/ui/custom-slider';
import { PiWarningCircle } from "react-icons/pi";
import { Checkbox } from '@/components/ui/checkbox';
import { Tooltip } from 'antd';
import { Button } from '@/components/ui/button';
import { FaChevronRight } from "react-icons/fa";
const selectType = [
    {
        id: 0,
        name: '最新',
    },
    {
        id: 1,
        name: '标记',
    },
]
export default function RightTabsOne({ className }: { className?: string }) {
    const [checkBox, setCheckBox] = React.useState<number | null>(null)
    const [isHovering1, setIsHovering1] = React.useState<boolean>(false)
    const closeTimer = useRef<NodeJS.Timeout | null>(null);
    const [isHovering2, setIsHovering2] = React.useState<boolean>(false)
    const [active1, setActive1] = React.useState<number>(0)
    const [active2, setActive2] = React.useState<number>(0)
    const handleChangeCheckbox = (value: number) => {
        checkBox !== value ? setCheckBox(value) : setCheckBox(null)

    }
    const setSliderValue = () => { }
    // 清除关闭定时器
    const clearCloseTimer = () => {
        if (closeTimer.current) {
            clearTimeout(closeTimer.current as NodeJS.Timeout);
            closeTimer.current = null;
        }
    };
    const handleEnterHovering1 = () => {
        clearCloseTimer();
        setIsHovering1(true);
    }
    const handleEnterHovering2 = () => {
        clearCloseTimer();
        setIsHovering2(true);
    }
    const handleLeaveHovering = () => {
        closeTimer.current = setTimeout(() => {
            setIsHovering1(false);
            setIsHovering2(false);
        }, 150);
    }
    return (
        <div className={`${className} flex flex-col h-full`}>
            <div className='text-white p-4 w-full '>
                <div className='flex flex-row justify-between text-[12px] w-full'>
                    <div className='flex flex-row gap-2'>
                        <div className='text-gray-500'>可用</div>
                        <div>0.0000</div>
                        <div>SUSDT</div>
                    </div>
                    <div className='flex flex-row gap-4'>
                        <SlPlus size={15} className='text-yellow-300' />
                        <SlCalculator size={15} className='text-gray-500' />
                    </div>
                </div>
                <div className='flex flex-row w-full my-5 items-end gap-2'>
                    <div className="grid w-full items-center gap-3 relative">
                        <Label htmlFor="price">价格(SUSDT)</Label>
                        <input type="text" id="price" placeholder="请输入价格" className=' bg-[#1f1f1f] border-0 text-[12px] w-full h-full focus:outline-none focus:ring-0 hover:bg-[#292929] p-3 rounded-[8px]' max={10000000} maxLength={10} />
                        <Tooltip placement='top' color='#292929' title={<div className='px-2 text-gray-300 rounded-[8px] text-[12px]'>点击将传入最新价格。</div>
                        }>
                            <div className='absolute top-9 right-4 text-[12px] text-yellow-500 cursor-pointer'>最新</div>
                        </Tooltip>
                    </div>
                    <Tooltip placement='topLeft' color='#292929' title={<div className='px-2 text-gray-300 rounded-[8px] text-[12px]'>BBO用于快速设置与BBO选项匹配的限价单价格。下单时使用BBO选项，系统会自动选择匹配的市场报价来执行订单。</div>
                    }>
                        <div className='py-2 px-3 bg-[#1f1f1f] rounded-[8px] cursor-pointer'>BBO</div>
                    </Tooltip>
                </div>
                <div className='flex flex-row w-full my-5 items-end'>
                    <div className="grid w-full items-center gap-3 relative">
                        <Label htmlFor="number">
                            <span>数量(BTC)</span>
                            <FaCaretDown className='text-[12px] text-gray-500' />
                        </Label>
                        <input type="text" id="number" placeholder="请输入数量" className='bg-[#1f1f1f] border-0 text-[12px] w-full h-full focus:outline-none focus:ring-0 hover:bg-[#292929] p-3 rounded-[8px] ' max={10000000} maxLength={10} />
                    </div>
                </div>
                <div className='my-6 px-2'>
                    <CustomSlider
                        value={1}
                        onChange={setSliderValue}
                        min={0}
                        max={100}
                        step={1}
                    />
                </div>
                <div>
                    <div className='flex justify-between items-center'>
                        <div className='flex items-center gap-2 text-gray-500 text-[12px]'>
                            <Checkbox onCheckedChange={() => handleChangeCheckbox(1)} checked={checkBox === 1} className='border border-gray-600 data-[state=checked]:text-black data-[state=checked]:bg-gray-200 cursor-pointer' />
                            <div>开多止盈/止损</div>
                            <Tooltip placement='topLeft' color='#292929' title={<div className='px-2 text-gray-300 rounded-[8px] text-[12px]'>预设止盈止损并非实际存在的止盈止损单，需委托成交后才可发起。下单委托成交后，默认将按照您的实际成交数量全部挂止盈止损单。如果您撤销挂单委托，预设止盈止损单将同时失效。</div>
                            }>
                                <PiWarningCircle size={14} className='right-2 top-3 cursor-pointer' />
                            </Tooltip>
                        </div>
                        <div className='flex items-center gap-2 text-gray-500 text-[12px]'>
                            <Checkbox value={2} onCheckedChange={() => handleChangeCheckbox(2)} checked={checkBox === 2} className='border border-gray-600 data-[state=checked]:text-black data-[state=checked]:bg-gray-200 cursor-pointer' />
                            <div>开空止盈/止损</div>
                        </div>
                    </div>
                    {
                        checkBox && <div>
                            <div className='flex flex-row'>
                                <div className='flex flex-row w-full my-5 items-end gap-2 text-[10px]'>
                                    <div className="grid flex-2 items-center gap-3 relative">
                                        <Label htmlFor="number" className='group cursor-pointer relative' onMouseEnter={handleEnterHovering1} onMouseLeave={handleLeaveHovering}>
                                            <span className='text-[12px]'>止盈({selectType[active1].name})</span>
                                            <FaCaretDown className=' text-gray-500 group-hover:rotate-180' />
                                        </Label>
                                        <input type="text" id="price" className=' bg-[#1f1f1f] border-0  w-full h-full focus:outline-none focus:ring-0 hover:bg-[#292929] p-3 rounded-[8px]' max={10000000} maxLength={10} />
                                        {
                                            isHovering1 &&
                                            <div className='z-10 absolute top-8 left-0 text-[14px] w-[140px] h-[110px] bg-[#262626] border border-[#313131] rounded-2xl p-3 text-white cursor-pointer flex flex-col gap-2 flex flex-col justify-around' onMouseEnter={handleEnterHovering1} onMouseLeave={handleLeaveHovering}>
                                                {selectType.map(item => (
                                                    <div key={item.id} className={`${active1 === item.id ? 'bg-[#313131]' : ''} text-center p-2 rounded-[8px] hover:bg-[#313131]`} onClick={() => { setActive1(item.id) }}>{item.name}</div>

                                                ))}
                                            </div>
                                        }
                                    </div>
                                    <div className="grid flex-1 items-center gap-3 relative">
                                        <Label htmlFor="number" className='group cursor-pointer'>
                                            <span className='text-[12px]'>按收益率</span>
                                            <FaCaretDown className=' text-gray-500 group-hover:rotate-180' />
                                        </Label>
                                        <input type="text" id="price" className=' bg-[#1f1f1f] border-0  w-full h-full focus:outline-none focus:ring-0 hover:bg-[#292929] p-3 rounded-[8px]' max={10000000} maxLength={10} />
                                    </div>
                                </div>
                            </div>
                            <div className='flex flex-row'>
                                <div className='flex flex-row w-full my-5 items-end gap-2 text-[10px]'>
                                    <div className="grid flex-2 items-center gap-3 relative">
                                        <Label htmlFor="number" className='group cursor-pointer relative' onMouseEnter={handleEnterHovering2} onMouseLeave={handleLeaveHovering}>
                                            <span className='text-[12px]'>止损({selectType[active2].name})</span>
                                            <FaCaretDown className=' text-gray-500 group-hover:rotate-180' />
                                        </Label>
                                        <input type="text" id="price" className=' bg-[#1f1f1f] border-0  w-full h-full focus:outline-none focus:ring-0 hover:bg-[#292929] p-3 rounded-[8px]' max={10000000} maxLength={10} />
                                        {
                                            isHovering2 &&
                                            <div className='z-10 absolute top-8 left-0 text-[14px] w-[140px] h-[110px] bg-[#262626] border border-[#313131] rounded-2xl p-3 text-white cursor-pointer flex flex-col gap-2 flex flex-col justify-around' onMouseEnter={handleEnterHovering2} onMouseLeave={handleLeaveHovering}>
                                                {selectType.map(item => (
                                                    <div key={item.id} className={`${active2 === item.id ? 'bg-[#313131]' : ''} text-center p-2 rounded-[8px] hover:bg-[#313131]`} onClick={() => { setActive2(item.id) }}>{item.name}</div>

                                                ))}
                                            </div>
                                        }
                                    </div>
                                    <div className="grid flex-1 items-center gap-3 relative">
                                        <Label htmlFor="number" className='group cursor-pointer'>
                                            <span className='text-[12px]'>按收益率</span>
                                            <FaCaretDown className=' text-gray-500 group-hover:rotate-180' />
                                        </Label>
                                        <input type="text" id="price" className=' bg-[#1f1f1f] border-0  w-full h-full focus:outline-none focus:ring-0 hover:bg-[#292929] p-3 rounded-[8px]' max={10000000} maxLength={10} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    }
                </div>
                <div className='flex flex-col gap-4 py-10'>
                    <Button variant="outline" className='text-black font-bold hover:opacity-90 border-none h-[40px]'>注册</Button>
                    <Button variant="outline" className='text-white bg-[#292929] font-bold hover:opacity-90 border-none hover:bg-[#292929] hover:text-white h-[40px]'>登录</Button>
                    <div className='flex flex-row items-center gap-2 cursor-pointer w-fit '>
                        <div className='text-[12px] text-[#808080]'>生效时间</div>
                        <div className='text-[14px] text-[#c0bebe]'>GTC</div>
                        <FaCaretDown className='text-[12px] text-gray-500' />
                    </div>
                </div>
                <div className='flex flex-row items-center justify-between gap-2 cursor-pointer bg-[#1f1f1f] p-3 rounded-[8px] text-[14px] hover:opacity-90 mb-10'>
                    <div>成为VIP8，享受更多优惠</div>
                    <FaChevronRight />
                </div>
            </div>
            <div className='h-px bg-[#313131]'></div>
            <div className='p-4 text-[12px] text-gray-500 flex-1'>
                <div className='text-[14px] font-bold text-white'>合约信息</div>
                <div className='flex flex-row justify-between mt-4'>
                    <div>指数来源</div>
                    <div>Huobi,Binance,Okx,Gate</div>
                </div>
                <div className='flex flex-row justify-between mt-4'>
                    <div>保证金币种</div>
                    <div>SUSDT</div>
                </div>
                <div className='flex flex-row justify-between mt-4'>
                    <div>最大杠杆</div>
                    <div>200x</div>
                </div>
                <div className='flex flex-row justify-between mt-4'>
                    <div>标记价格</div>
                    <div>106.897.9</div>
                </div>
            </div>
        </div>
    )
}
