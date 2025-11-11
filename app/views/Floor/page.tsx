import Image from "next/image";
import { FaCaretDown, FaCaretUp } from 'react-icons/fa'
import { IoMdSwitch } from "react-icons/io";
export default function Floor() {
    return (
        <div className='h-[30px] w-full fixed bottom-0 flex flex-row justify-between items-end px-5 bg-[#0f1115] border-t border-[#262626] box-border'>
            <div className='flex flex-row items-center w-[50%] gap-2'>
                <Image src="/wifi.svg" alt="wifi" width={10} height={10} />
                <div className="text-[12px] text-green-600">系统连接稳定</div>
                <div className="text-white mx-2 text-[14px]">线路-1</div>
                <div className="text-green-600 text-[14px] flex flex-row items-center gap-1 cursor-pointer" >
                    <div>103ms</div>
                    <FaCaretDown className='text-[12px] text-gray-500' />
                </div>
                <IoMdSwitch className="text-white text-[18px]"/>

            </div>
            <div className='flex flex-row gap-3 text-white text-[12px] relative'>
                <div>公告中心</div>
                <div>客户服务</div>
                <div className="bg-yellow-600 w-2 h-2 rounded-full absolute left-11"></div>
            </div>
        </div>
    )
}