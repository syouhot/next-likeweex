import { useRef } from "react";

type itemType = {
    id: number,
    value: string,

}
interface SelectItemProps {
    list: itemType[],
    setIsHovered: React.Dispatch<React.SetStateAction<boolean>>,
    className?: string
}

export default function SelectItem({ list, setIsHovered, className }: SelectItemProps) {
    const closeTimer = useRef<NodeJS.Timeout | null>(null);
    // 清除关闭定时器
    const clearCloseTimer = () => {
        if (closeTimer.current) {
            clearTimeout(closeTimer.current as NodeJS.Timeout);
            closeTimer.current = null;
        }
    };

    // 处理鼠标进入组件区域
    const handleMouseEnter = () => {
        clearCloseTimer();
        setIsHovered(true);
    };


    // 处理鼠标离开组件区域
    const handleMouseLeave = () => {
        // 设置一个延迟关闭，以便检查鼠标是否移动到了下拉菜单上
        closeTimer.current = setTimeout(() => {
            setIsHovered(false);
        }, 150);
    };
    return (
        <div
            className="absolute bg-[#151515] text-white rounded-[7px] shadow-lg z-10 p-3 w-30 mt-1 left-[-50]"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {list.map((item, index) => (
                <div key={item.id} className={`${className} flex flex-row justify-end items-center mb-2 hover:cursor-pointer bg-primary text-gray-400 rounded-[6px] p-2 `}>
                    <div className="font-bold text-[13px] flex flex-row items-center">
                        {item.value}
                    </div>
                </div>
            ))}
        </div>

    )
}
