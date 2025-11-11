"use client"
import React, { useState } from 'react'
import LeftData from '../LeftData/page'
import LeftChart from '../LeftChart/page'
import RightModel from '../RightModel/page'
import LeftNumber from '../LeftNumber/page'
import LeftModel from '../LeftModel/page'
import Floor from '../Floor/page'

export default function Moni() {
  const [leftChartHeight, setLeftChartHeight] = useState(686)
  const [leftDataHeight, setLeftDataHeight] = useState(60)
  return (
    <div className='relative flex flex-col w-full'>
      <div className='relative flex w-full h-[1250px] mb-[30px]'>
        <LeftData className={`w-[78%] flex h-[${leftDataHeight}] absolute m-1 box-border`} />
        <LeftChart className={`w-[57.8%] h-[685] absolute top-[60] m-1 box-border`} />
        <LeftNumber className={`w-[20%] h-[${leftChartHeight}] absolute top-[60px] left-[58%] m-1 box-border`} />
        <LeftModel className={`w-[78%] top-[750px] h-[500] m-1 absolute box-border flex-1`} />
        <RightModel className='w-[22%] absolute top-0 left-[78%] m-1 box-border ml-2 h-auto' style={{ height: '100%' }} />
      </div>
      <Floor />
    </div>
  )
}
