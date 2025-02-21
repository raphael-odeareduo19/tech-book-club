import PriceCard from "./PriceCard"

const pricing = [
    {
        priceCategory: 'Starter',
        price: '$19',
        pricingFrequency: 'month',
        benefits: ['1 book/month', 'Online forums'],
        btnText: 'Subscribe Now'
    },
    {
        priceCategory: 'Pro',
        price: '$29',
        pricingFrequency: 'month',
        benefits: ['2 books/month', 'Virtual meetups'],
        btnText: 'Subscribe Now'
    },
    {
        priceCategory: 'Enterprise',
        price: 'Custom',
        benefits: ['Team access', 'Private sessions'],
        btnText: 'Talk to Us'
    }
]

const Pricing = () => {
    return (
        <section className="px-5 mb-20" id="pricing">
            <div>
                <h2 className="mb-10 text-5xl font-[Martian_Mono] font-semibold tracking-tight">Membership options</h2>
                <div className="flex flex-col gap-8">
                    {pricing.map((price, i) => {
                        return (
                            <PriceCard 
                                key={i}
                                {...price}
                            />
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Pricing