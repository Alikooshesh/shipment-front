const Button = ({children , icon , color = "blue" , leftIcon = false , ...props})=>{

    const bg = color === 'blue' ? 
        "bg-[#2996E8] disabled:bg-[#DCD8E0] hover:bg-[#227EC3]":
        "bg-[#38B000] disabled:bg-[#DCD8E0] hover:bg-[#2C8900]"

    return(
        <button {...props} className={`w-full h-[48px] flex items-center justify-center rounded-[8px] ${bg} ${!props.disabled ? "cursor-pointer" : ""} ${props.className}`}>
            <div className={`flex items-center justify-center gap-[8px] ${props.disabled ? 'text-[#A4A0A7]' : 'text-white'}`}>
                <span className="text-[20px]">{children}</span>
                {icon && <span className={leftIcon ? 'order-[-1]' : ''}>{icon}</span>}
            </div>
        </button>
    )
}

export default Button