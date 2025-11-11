import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Checkbox } from '@/components/ui/checkbox';
export default function LeftModel({ className }: { className?: string }) {
    return (
        <div className={`${className} text-white bg-black`}>
            <div className={`text-white bg-black`}>
                <Tabs defaultValue="1" className='w-full font-bold'>
                    <div className='border-b border-[#333333] w-full' style={{ lineHeight: '40px' }}>
                        <TabsList>
                            <TabsTrigger value="1" className='bg-transparent text-[14px]'>仓位(0)</TabsTrigger>
                            <TabsTrigger value="2" className='bg-transparent text-[14px]'>当前委托(0)</TabsTrigger>
                            <TabsTrigger value="3" className='bg-transparent text-[14px]'>历史委托</TabsTrigger>
                            <TabsTrigger value="4" className='bg-transparent text-[14px]'>历史仓位</TabsTrigger>
                            <TabsTrigger value="5" className='bg-transparent text-[14px]'>成交明细</TabsTrigger>
                            <TabsTrigger value="6" className='bg-transparent text-[14px]'>财务记录</TabsTrigger>
                        </TabsList>
                    </div>
                    <TabsContent value="1" className="w-full h-full">
                    </TabsContent>
                    <TabsContent value="2" className="w-full">在这里更改你的密码。</TabsContent>
                    <TabsContent value="3" className="w-full">在这里更改你的密码。</TabsContent>
                </Tabs>
            </div>
            <div className=' h-[38px] w-[220px] right-0 top-0 z-10 flex flex-row items-center gap-4 absolute'>
                <div className='group cursor-pointer flex flex-row gap-4'>
                    <Checkbox className='border border-gray-600 data-[state=checked]:text-black data-[state=checked]:bg-gray-200 group-hover:border-white' />
                    <div className='text-[12px] text-gray-500'>隐藏其他合约</div>
                </div>
                <div className='p-2 bg-[#1f1f1f] cursor-pointer rounded-[8px] text-[12px] hover:opacity-90'>一键平仓</div>
            </div>

        </div>
    )
}
