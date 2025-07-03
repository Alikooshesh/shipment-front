const Button = ({children , icon , ...props})=>{
    return(
        <button {...props} className={`w-full h-[48px] flex items-center justify-center rounded-[8px] bg-[#2996E8] disabled:bg-[#DCD8E0] cursor-pointer ${props.className}`}>
            <div className={`flex items-center justify-center gap-[8px] ${props.disabled ? 'text-[#A4A0A7]' : 'text-white'}`}>
                <span className="text-[20px]">{children}</span>
                {icon && <span>{icon}</span>}
            </div>
        </button>
    )
}

export default Button