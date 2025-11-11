"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface CustomSliderProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "onChange"> {
  defaultValue?: number
  value?: number
  min?: number
  max?: number
  step?: number
  onChange?: (value: number) => void
  className?: string
}

const CustomSlider = React.forwardRef<HTMLDivElement, CustomSliderProps>(
  ({ 
    className, 
    defaultValue = 0, 
    value, 
    min = 0, 
    max = 100, 
    step = 1,
    onChange,
    ...props 
  }, ref) => {
    const [currentValue, setCurrentValue] = React.useState(value ?? defaultValue)
    const [isDragging, setIsDragging] = React.useState(false)
    const [isHovering, setIsHovering] = React.useState(false)
    const sliderRef = React.useRef<HTMLDivElement>(null)
    
    // 更新值的处理函数
    const updateValue = (newValue: number) => {
      // 根据步长调整值
      const steppedValue = Math.round(newValue / step) * step
      const clampedValue = Math.min(Math.max(steppedValue, min), max)
      setCurrentValue(clampedValue)
      onChange?.(clampedValue)
    }
    
    // 处理点击事件
    const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
      if (!sliderRef.current) return
      
      const rect = sliderRef.current.getBoundingClientRect()
      const percentage = (e.clientX - rect.left) / rect.width
      const newValue = min + percentage * (max - min)
      
      updateValue(newValue)
    }
    
    // 计算进度百分比
    const progress = ((currentValue - min) / (max - min)) * 100
    
    // 计算分段点位置（5个点，4段）
    const segmentPoints = Array.from({ length: 5 }, (_, i) => ({
      position: (i / 4) * 100,
      value: min + (i / 4) * (max - min)
    }))
    
    return (
      <div 
        ref={ref}
        className={cn("relative w-full h-6 flex items-center cursor-pointer", className)}
        {...props}
      >
        {/* 滑轨 */}
        <div 
          ref={sliderRef}
          className="relative w-full h-[2px] bg-[#292929] rounded-full"
          onClick={handleClick}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          {/* 已划过的部分 */}
          <div 
            className="absolute top-0 left-0 h-full bg-white rounded-full"
            style={{ width: `${progress}%` }}
          />
          
          {/* 分段点 */}
          {segmentPoints.map((point, index) => {
            const isPassed = point.value <= currentValue;
            return (
              <div
                key={index}
                className={`absolute top-1/2 transform -translate-y-1/2 -translate-x-1/2 w-2 h-2 rounded-full border ${
                  isPassed 
                    ? 'bg-black border-white border-2' 
                    : 'bg-black border-[#292929] border-2'
                }`}
                style={{ left: `${point.position}%` }}
              />
            );
          })}
          
          {/* Tooltip */}
          {(isHovering || isDragging) && (
            <div 
              className="absolute -top-3 transform -translate-y-full -translate-x-1/2 mb-2 py-[1px] px-[6px] text-xs text-black bg-white rounded shadow-lg whitespace-nowrap"
              style={{ left: `${progress}%` }}
            >
              {Math.round(progress)}%
            </div>
          )}
          
          {/* 滑块 */}
          <div
            className="absolute top-1/2 transform -translate-y-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-white border-white flex items-center justify-center cursor-grab"
            style={{ left: `${progress}%` }}
            onMouseDown={(e) => {
              e.preventDefault()
              setIsDragging(true)
              const handleMouseMove = (moveEvent: MouseEvent) => {
                if (!sliderRef.current) return
                
                const rect = sliderRef.current.getBoundingClientRect()
                const percentage = Math.min(Math.max((moveEvent.clientX - rect.left) / rect.width, 0), 1)
                const newValue = min + percentage * (max - min)
                
                updateValue(newValue)
              }
              
              const handleMouseUp = () => {
                setIsDragging(false)
                document.removeEventListener('mousemove', handleMouseMove)
                document.removeEventListener('mouseup', handleMouseUp)
              }
              
              document.addEventListener('mousemove', handleMouseMove)
              document.addEventListener('mouseup', handleMouseUp)
            }}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <div className="w-2.5 h-2.5 rounded-full bg-black" />
          </div>
        </div>
      </div>
    )
  }
)

CustomSlider.displayName = "CustomSlider"

export { CustomSlider }