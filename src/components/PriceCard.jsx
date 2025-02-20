const PriceCard = (props) => {
    return (
        <div className="p-6 font-[Martian_Mono] border-2 border-slate-300 rounded-md shadow-md flex flex-col gap-8">
            <div>
                <h3 className="price-category mb-4 text-3xl font-semibold tracking-tight">{props.priceCategory}</h3>
                <p className="price-amount">
                    <span className="price-number text-4xl font-bold">{props.price}</span>
                    <span className="pl-2 text-slate-500 font-[Inter]">{props.pricingFrequency ? '/' : null}{props.pricingFrequency}</span>
                </p>
            </div>
            <hr />
            <ul>
                {/* TODO: Include check icons */}
                {props.benefits.map((benefit, i) => {
                    return (
                        <li 
                            className="text-slate-500 font-[Inter]" 
                            key={i}>
                                {benefit}
                        </li>
                    )
                })}
            </ul>
            <button className="uppercase font-[Martian_Mono] text-lg font-semibold tracking-tighter bg-[#fff5ef] border-3 rounded-md p-4 flex items-center justify-center gap-8 shadow-lg hover:-translate-y-[2px] hover:shadow-xl transition-all duration-250 active:translate-y-[2px] active:opacity-70 active:shadow-none cursor-pointer whitespace-nowrap">{props.btnText}</button>
        </div>
    )
}

export default PriceCard