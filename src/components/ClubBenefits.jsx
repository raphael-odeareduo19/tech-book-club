import { RxCheckbox } from "react-icons/rx";
import Benefit1Img from '../assets/benefit1.png'
import Benefit2Img from '../assets/benefit2.png'

const benefits = [
    'Monthly curated tech reads selected by industry experts',
    'Virtual and in-person meetups for deep-dive discussions',
    'Early-access to new tech book releases',
    'Author Q&A sessions with tech thought leaders'
]

const ClubBenefits = () => {
    return (
        <section className="px-5 py-12 grid md:items-center md:grid-cols-2 md:gap-y-24 md:gap-x-12">
            <div className="benefit1-textbox order-1 md:order-2">
                <h2 className="text-4xl font-[Martian_Mono] font-semibold tracking-tighter mb-6 ">Read together, grow together</h2>
                <ul className='flex flex-col gap-4 mb-6 md:mb-0'>
                    {benefits.map((benefit, i) => {
                        return (
                            <li className="flex gap-2" key={i}>
                                {/* TODO: Fix check icons */}
                                <RxCheckbox size={24}/>
                                <span className="text-xl">{benefit}</span>
                            </li>
                        )
                    })}
                </ul>
            </div>
            <div className="benefit-imagebox mb-20 rounded-lg overflow-hidden shadow-lg order-2 md:order-1 md:mb-0">
                <img className="w-full hover:scale-110 transition-scale duration-2000" src={Benefit1Img} alt="people-sitting-down-and-reading-together" />
            </div>
            <div className="benefit2-textbox order-3">
                <h2 className="text-4xl font-[Martian_Mono] font-semibold tracking-tighter mb-6">Not your average book club</h2>
                <p className="mb-6 text-xl md:mb-0">Connect with a community that speaks your language - from <span className="font-bold">Python</span> to <span className="font-bold">TypeScript</span> and everything in between. Our discussions blend technical depth with practical applications.</p>
            </div>
            <div className="benefit-imagebox rounded-lg overflow-hidden shadow-lg order-4">
                <img className="w-full hover:scale-110 transition-scale duration-2000" src={Benefit2Img} alt="people-having-a-conversation-about-books" />
            </div>
        </section>
    )
}

export default ClubBenefits