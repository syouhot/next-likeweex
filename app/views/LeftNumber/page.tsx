import Link from 'next/link'
import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import TabsOne from '@/app/components/TabsOne'

export default function LeftNumber({ className }: { className?: string }) {
  return (
    <div className={`${className} p-2 bg-black`}>
      <Tabs defaultValue="account">
        <div className='border-b-1 border-[#333333] w-full'>
          <TabsList >
            <TabsTrigger value="account" className='bg-transparent'>订单薄</TabsTrigger>
            <TabsTrigger value="password" className='bg-transparent'>最新成交</TabsTrigger>
          </TabsList>
        </div>
        <TabsContent value="account">
          <TabsOne />
        </TabsContent>
        <TabsContent value="password">尽请期待</TabsContent>
      </Tabs>
    </div>
  )
}
