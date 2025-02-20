const benefits = [
    'Monthly curated tech reads selected by industry experts',
    'Virtual and in-person meetups for deep-dive discussions',
    'Early-access to new tech book releases',
    'Author Q&A sessions with tech thought leaders'
]

const ClubBenefits = () => {
    return (
        <section className="px-5 py-12 grid md:items-center md:grid-cols-2 md:gap-y-24 md:gap-x-12">
            {/* TODO: Fix grid content order on larger screens */}
            <div className="benefit1-textbox">
                <h2 className="text-4xl font-[Martian_Mono] font-semibold tracking-tighter mb-6 ">Read together, grow together</h2>
                <ul>
                    {benefits.map((benefit, i) => {
                        return (
                            <li className="text-xl" key={i}>{benefit}</li>
                        )
                    })}
                </ul>
            </div>
            <div className="benefit-imagebox rounded-lg overflow-hidden shadow-lg">
                <img className="w-full hover:scale-110 transition-scale duration-2000" src="src/assets/benefit1.png" alt="people-sitting-down-and-reading-together" />
            </div>
            <div className="benefit2-textbox">
                <h2 className="text-4xl font-[Martian_Mono] font-semibold tracking-tighter mb-6">Not your average book club</h2>
                <p className="text-xl">Connect with a community that speaks your language - from <span className="font-bold">Python</span> to <span className="font-bold">TypeScript</span> and everything in between. Our discussions blend technical depth with practical applications.</p>
            </div>
            <div className="benefit-imagebox rounded-lg overflow-hidden shadow-lg">
                <img className="w-full hover:scale-110 transition-scale duration-2000" src="src/assets/benefit2.png" alt="people-having-a-conversation-about-books" />
            </div>
        </section>
    )
}

export default ClubBenefits