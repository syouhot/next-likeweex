import React from 'react'

export default function SvgBox({ className }: { className?: string }) {
  return (
    <div className={className}>
      <svg width="24" height="24" fill="#fff" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="3" width="8.2" height="8.2" rx="1"></rect><rect x="3" y="12.8" width="8.2" height="8.2" rx="1"></rect><rect x="12.8" y="12.8" width="8.2" height="8.2" rx="1"></rect></svg>
      <div className='bg-text-primary absolute right-2.5 top-0.5 rotate-45 w-[7px] h-[7px] rounded-[1px] transition-transform duration-300 ease-in-out group-data-[state=open]:rotate-0 group-data-[state=open]:w-[8.2px] group-data-[state=open]:h-[8.2px] group-data-[state=open]:top-[3px] group-data-[state=open]:right-[3px] group-data-[state=open]:bg-text-active bg-white'></div>
    </div>
  )
}
