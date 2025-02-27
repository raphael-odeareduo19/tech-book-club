import Star from "./Star"

const testimonialInfo = {
    review: 'This book club transformed my technical reading from a solitary activity into an enriching community experience. The discussions are gold!',
    reviewer: 'Sarah Chen, Software Architect'
}

const Testimonial = () => {
    return (
        <section className="px-5 mb-24 md:text-center md:px-7">
            <div className="flex flex-col gap-6 md:items-center">
                <div className="flex gap-2">
                    <Star fill="goldenrod"/>
                    <Star fill="goldenrod"/>
                    <Star fill="goldenrod"/>
                    <Star fill="goldenrod"/>
                    <Star fill="goldenrod"/>
                </div>
                <p className="text-3xl font-semibold font-[Martian_Mono]">"{testimonialInfo.review}"</p>
                <p className="text-xl text-slate-500 font-[Inter]">{testimonialInfo.reviewer}</p>
            </div>
        </section>
    )
}

export default Testimonial