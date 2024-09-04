import { PageHeader } from "../../layouts";
import { AppWindow, ArrowRight, Server as ServerIcon, LayoutTemplate } from 'lucide-react';

const index = () => {
    const cardsData = [
        {
            title: "Custom Software Development",
            content: "Build software tailored to your business.",
            icon: <AppWindow strokeWidth={1} className="icon-lg" />
        },
        {
            title: "Web Development",
            content: "Create responsive and dynamic websites for your business.",
            icon: <LayoutTemplate strokeWidth={1} className="icon-lg" />
        },
        {
            title: "Backend Development",
            content: "Develop robust and scalable backend systems.",
            icon: <ServerIcon strokeWidth={1} className="icon-lg" />
        }
    ]

    return (
        <>
            <PageHeader />
            <main className="home-page">
                <section className="home-page__upper-sec">
                    <h1 className="fm-poppins text-5xl font-bold">Empower your business
                        with top-class software development
                    </h1>
                </section>
                <section className="home-page__upper-sec">
                    <div className="home-page__card-grid">
                        {cardsData.map((val, idx) => (

                            <div key={idx} className="home-page__card fm-poppins">
                                <div className="mt-4">
                                    <div>
                                        <h2 className="text-xl font-semibold">{val.title}</h2>
                                    </div>
                                    <div className="mt-2 mb-6">
                                        <p className="text-sm">{val.content}</p>
                                    </div>
                                </div>

                                <div className="flex justify-content-between align-items-center">
                                    <div>
                                        {val.icon}
                                    </div>
                                    <div className="arrow-btn">
                                        <ArrowRight className="icon-sm" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </section>

                <section className="home-page__sec">
                    <div>
                        <h2 className="text-center fm-poppins font-semibold text-xxl">How Diffco helps you <br />
                            deliver the best results</h2>

                    </div>

                    <div className="home-helpus__grid">
                        <div className="fm-poppins">
                            <div className="font-bold fm-poppins">Clear<br />
                                communication</div>
                            <div className="text-sm fm-poppins">
                                We build relationships based on integrity and trust, deliver on our promises, and always maintain clear communication.
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default index;

