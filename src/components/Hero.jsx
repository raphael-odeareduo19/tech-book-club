const Hero = () => {
    return (
        <div className="py-12 bg-pattern bg-no-repeat">
            <header className="header mb-6">
                <img className="logo cursor-pointer" src="src/assets/logo.svg" alt="company-logo" />
            </header>
            <section className="hero flex flex-col gap-20">
                <div className="hero-textbox flex flex-col gap-8">
                    <h1 className="text-6xl font-martian font-semibold">Join the ultimate tech book club</h1>
                    <p className="text-2xl font-normal">Turn your reading time into learning time with fellow tech enthusiasts. Get curated recommendations, join vibrant discussion, and level up your skills one chapter at a time.</p>
                    <a 
                        className="uppercase font-martian text-lg font-medium tracking-tighter border-3 rounded-md p-4 flex items-center justify-between" 
                        href="#"
                    >
                        <span>Review Membership Options</span>
                        <img src="src/assets/icon-arrow-down.svg" alt="arrow-down-icon"/>
                    </a>
                </div>
                <div className="hero-imagebox rounded-md overflow-hidden">
                    {/* TODO: Fix link content alignment */}
                    <img className="w-full" src="src/assets/hero-img.png" alt="people-looking-at-a-book-together" />
                </div>
            </section>
        </div>
    )
}

export default Hero