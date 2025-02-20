const ClubStep = ({step, stepDetail}) => {
    return (
        <div className="flex flex-col gap-4 font-semibold">
            <span className="py-2 px-4 border-3 rounded-md self-start text-lg">{step}</span>
            <span className="text-lg tracking-tighter">{stepDetail}</span>
        </div>
    )
}

export default ClubStep