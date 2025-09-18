const HeroBanner = ()=>{
    return(
        <div className="w-full px-[16px] md:px-0">
            <img className="w-full h-auto hidden lg:block" src="/images/home/hero/desktop.png"/>
            <img className="w-full h-auto lg:hidden" src="/images/home/hero/mobile.png"/>
        </div>
    )
}

export default HeroBanner