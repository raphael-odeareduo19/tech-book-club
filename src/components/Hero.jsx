import { HiArrowNarrowDown } from 'react-icons/hi'
import heroImage from '../assets/hero-img.png'
import Header from './Header'

const Hero = () => {
    return (
        <>
            <section className="hero-section px-5 md:px-7 bg-linear-to-br from-[#fff5ef] to-sky-100">
                <Header />
                <div className='container hero max-w-[1200px] flex flex-col gap-20 py-8 mb-24 md:mx-auto md:grid md:items-center md:grid-cols-2'>
                    <div className="hero-textbox flex flex-col gap-8">
                        <h1 className="text-6xl font-[Martian_Mono] font-semibold tracking-[-0.55rem]">Join the ultimate tech book club</h1>
                        <p className="text-2xl font-normal">Turn your reading time into learning time with fellow tech enthusiasts. Get curated recommendations, join vibrant discussion, and level up your skills one chapter at a time.</p>
                        <a 
                            className="uppercase font-[Martian_Mono] text-lg font-semibold tracking-tighter bg-[#fff5ef] border-3 rounded-md p-4 flex items-center justify-center gap-8 shadow-lg hover:-translate-y-[2px] hover:shadow-xl transition-all duration-250 active:translate-y-[2px] active:opacity-70 active:shadow-none whitespace-nowrap" 
                            href="#pricing"
                        >
                            <span>Review Membership Options</span>
                            <HiArrowNarrowDown />
                        </a>
                    </div>
                    <div className="hero-imagebox rounded-md overflow-hidden">
                        <img className="w-full hover:scale-110 transition-scale duration-2000" src={heroImage} alt="people-looking-at-a-book-together" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero