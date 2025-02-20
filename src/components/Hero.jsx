const Hero = () => {
    return (
        <div className="px-5 bg-[url(src/assets/pattern-light-bg.svg)] bg-pattern bg-cover bg-no-repeat">
            <header className="py-10 header mb-6">
                <img className="logo cursor-pointer" src="src/assets/logo.svg" alt="company-logo" />
            </header>
            <section className="hero flex flex-col gap-20 pb-16 md:grid md:items-center md:grid-cols-2">
                <div className="hero-textbox flex flex-col gap-8">
                    <h1 className="text-6xl font-[Martian_Mono] font-semibold tracking-[-0.55rem]">Join the ultimate tech book club</h1>
                    <p className="text-2xl font-normal">Turn your reading time into learning time with fellow tech enthusiasts. Get curated recommendations, join vibrant discussion, and level up your skills one chapter at a time.</p>
                    <a 
                        className="uppercase font-[Martian_Mono] text-lg font-semibold tracking-tighter bg-[#fff5ef] border-3 rounded-md p-4 flex items-center justify-center gap-8  
                        hover:-translate-y-[2px] transition-all duration-250 active:translate-y-[2px]" 
                        href="#"
                    >
                        <span>Review Membership Options</span>
                        <img src="src/assets/icon-arrow-down.svg" alt="arrow-down-icon"/>
                    </a>
                </div>
                <div className="hero-imagebox rounded-md overflow-hidden">
                    <img className="w-full hover:scale-110 transition-scale duration-2000" src="src/assets/hero-img.png" alt="people-looking-at-a-book-together" />
                </div>
            </section>
        </div>
    )
}

export default Hero