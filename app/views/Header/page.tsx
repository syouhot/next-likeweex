import FuliSelect from '@/app/components/FuliSelect';
import LinkSelect from '@/app/components/LinkSelect';
import Svg1 from '@/app/components/Svg1';
import Svg2 from '@/app/components/Svg2';
import Svg3 from '@/app/components/Svg3';
import Svg4 from '@/app/components/Svg4';
import Svg5 from '@/app/components/Svg5';
import Svg6 from '@/app/components/Svg6';
import SvgBox from '@/app/components/SvgBox';
import Image from 'next/image'
import Link from 'next/link';
import { FiSearch, FiDownload, FiGlobe, FiSun,FiSliders } from "react-icons/fi";
import { IoIosCube } from "react-icons/io";
import { Button } from "@/components/ui/button"
const buyListItems = [
    {
        icon: <Svg2 />,
        text: "快速买币",
        description: "支持Visa，Mastercard，Apple Pay，Google Pay买币"
    },
    {
        icon: <Svg1 />,
        text: "C2C交易",
        description: "零手续费购买加密货币"
    }
]
const contractListItems = [
    {
        icon: <Svg3 />,
        text: "U本位合约",
        description: "以USDT结算的永续合约",
        titleIcon: <Image src="/fire.svg" alt="fire" width={25} height={25} />
    },
    {
        icon: <Svg4 />,
        text: "模拟交易",
        description: "U本位合约模拟盘"
    },
    {
        icon: <Svg5 />,
        text: "合约介绍",
        description: "合约交易相关介绍"
    },
    {
        icon: <Svg6 />,
        text: "合约榜单",
        description: "实时及往期合约榜单"
    }
]
const fuliListItems = [
    {
        title: "现货活动",
        item: [
            {
                icon: <Image src="/icon1.png" alt="fire" width={25} height={25} />,
                text: "热门币空投",
                description: "充值，交易热门币，领多重好礼",
            },
            {
                icon: <Image src="/icon2.png" alt="fire" width={25} height={25} />,
                text: "交易大赛来袭",
                description: "参与交易瓜分$30.000豪华空投"
            },
            {
                icon: <Image src="/icon3.png" alt="fire" width={25} height={25} />,
                text: "疯狂星期二（13期）",
                description: "交易$5即可获得盲盒奖励"
            },
            {
                icon: <Image src="/icon4.png" alt="fire" width={25} height={25} />,
                text: "万圣节狂欢周",
                description: "简单三步轻松领$115",
                titleIcon: <Image src="/fire.svg" alt="fire" width={25} height={25} />
            },
            {
                icon: <Image src="/icon5.png" alt="fire" width={25} height={25} />,
                text: "热币交易周",
                description: "简单三步轻松领$115",
            }
        ]
    },
    {
        title: "合约活动",
        item: [
            {
                icon: <Image src="/icon6.png" alt="fire" width={25} height={25} />,
                text: "跟单包赔$100",
                description: "安心交易0风险！",
            },
            {
                icon: <Image src="/icon7.png" alt="fire" width={25} height={25} />,
                text: "VIP秋日空投",
                description: "充值交易最高送1.000USDT"
            },
            {
                icon: <Image src="/icon7.png" alt="fire" width={25} height={25} />,
                text: "邀好友享三重好礼",
                description: "邀好友领现金与体验金，最高400USDT,另有限时高返佣！"
            },
        ]
    },
]
export default function Header() {
    return (
        <div className='w-full bg-black text-white h-[65px] flex flex-row items-center justify-between mx-1 box-border'>
            <div className='flex flex-row items-center gap-1 p-3'>
                <div className='relative h-[65px] w-[100px] min-w-[100px] mx-5'>
                    <Image src="/logo.svg" alt="logo" fill className='scale-130' />
                </div>
                {/* <IoIosCube className='mx-6 text-white text-[30px] min-w-[30px]' /> */}
                <SvgBox className='mx-6 text-white text-[30px] min-w-[30px] relative' />
                <div className='flex flex-row items-center gap-8'>
                    <LinkSelect title="购买" listItem={buyListItems} />
                    <Link href="/" className='hover:text-yellow-400'>市场</Link>
                    <LinkSelect title="合约交易" listItem={contractListItems} />
                    <Link href="/" className='hover:text-yellow-400'>现货交易</Link>
                    <Link href="/" className='hover:text-yellow-400'>跟单</Link>
                    <Link href="/" className='hover:text-yellow-400'>
                        <div className='w-[140px] flex flex-row items-center gap-2'>
                            <span><Image src="/fire.svg" alt="fire" width={25} height={25} /></span>
                            <span>WE-Launch</span>
                        </div>
                    </Link>
                    <FuliSelect listItem={fuliListItems} title="福利中心" />
                    <div className='flex flex-row items-center gap-2 text-[12px] font-bold bg-gray-800 rounded-4xl px-2 py-1 hover:bg-white hover:text-black'>
                        <Image src="/kuanghuanji.png" alt="user" width={28} height={28} />
                        <div>WTX狂欢季</div>
                    </div>
                </div>
            </div>
            <div className='flex flex-row items-center gap-7 p-3 pr-6 font-bold'>
                <FiSearch className='text-[25px] hover:cursor-pointer' />
                <div className='hover:cursor-pointer hover:text-yellow-600'>登录</div>
                <div className='bg-white text-black py-2 px-6 rounded-3xl cursor-pointer'>注册</div>
                <FiDownload className='text-[25px] hover:cursor-pointer' />
                <FiGlobe className='text-[25px] hover:cursor-pointer' />
                <FiSun className='text-[25px] hover:cursor-pointer' />
                <FiSliders className='text-[25px] hover:cursor-pointer' />
            </div>
        </div>
    )
}
