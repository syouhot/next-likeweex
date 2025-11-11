
interface LinkItemProps {
    icon: React.ReactNode,
    text: string,
    description: string,
    titleIcon?: React.ReactNode
}

export default function LinkItem({ icon, text, description, titleIcon }: LinkItemProps) {
    return (
        <div className="flex flex-row items-center gap-3  p-1 mb-5 hover:cursor-pointer">
            <div className="w-6 h-6">{icon}</div>
            <div className="flex flex-col gap-2">
                <div className="font-bold text-[13px] flex flex-row items-center gap-2">
                    {text}
                    {titleIcon && <div className="w-6 h-6">{titleIcon}</div>}
                </div>
                <div className=" w-[170px] text-sm text-gray-400 text-[12px]">{description}</div>
            </div>
        </div>
    )
}
