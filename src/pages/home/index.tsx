import { ServiceSection } from "./sections/services";
import { LandingSection } from "./sections/main";
import { TechnologiesSection } from "./sections/technologies";

const Page = () => {
    return (
        <main>
            <LandingSection />
            <ServiceSection />
            <TechnologiesSection />
        </main>
    )
}

export default Page;