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
        <section className="px-5 mb-12 font-[Martian_Mono]">
            {/* TODO: Include background image */}
            <div className="px-6 py-12 rounded-md">
                <h2 className="text-4xl font-semibold tracking-tight mb-8">Your tech reading journey</h2>
                <div className="flex flex-col gap-12">
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