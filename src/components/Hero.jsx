const Hero = () => {
    return (
        <div>
            <header className="header">
                <img className="logo" src="../assets/logo.svg" alt="company-logo" />
            </header>
            <section className="hero flex items-center">
                <div className="hero-textbox">
                    <h1>Join the ultimate tech book club</h1>
                    <p>Turn your reading time into learning time with fellow tech enthusiasts. Get curated recommendations, join vibrant discussion, and level up your skills one chapter at a time.</p>
                    <a href="#">Review Membership Options</a>
                </div>
                <div className="hero-imagebox">
                </div>
            </section>
        </div>
    )
}

export default Hero