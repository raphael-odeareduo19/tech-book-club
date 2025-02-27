import ClubStep from "./ClubStep"

const onboardingSteps = [
    {
        stepNumber: 1,
        stepDescription: 'Choose your membership tier'
    },
    {
        stepNumber: 2,
        stepDescription: 'Get your monthly book selection'
    },
    {
        stepNumber: 3,
        stepDescription: 'Join our discussion forums'
    },
    {
        stepNumber: 4,
        stepDescription: 'Attend exclusive meetups'
    }
]

const ClubOnboarding = () => {
    return (
        // TODO: Fix bg image and gradient rendering
        <section className="px-5 mb-28 font-[Martian_Mono] md:px-7">
            <div className="onboarding px-6 py-12 rounded-lg shadow-md overflow-hidden bg-linear-to-r from-[#fff5ef] to-sky-100">
                <h2 className="text-4xl font-semibold tracking-tight mb-8 md:text-center">Your tech reading journey</h2>
                <div className="flex flex-col gap-12 md:flex-row md:justify-center">
                    {
                        onboardingSteps.map((step, i) => {
                            return (
                                <ClubStep 
                                    key={i}
                                    step={step.stepNumber}
                                    stepDetail={step.stepDescription}
                                />
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default ClubOnboarding