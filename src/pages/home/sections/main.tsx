import React from "react";
import { color, motion } from "framer-motion";
export const LandingSection: React.FC = () => {
    return (
        <section>
            <div className="pg--home-page">
                <div className="app-container">
                    <div className="pg-section ">
                        <main className="home-main">

                            <div className="home-content">
                                <motion.div
                                    variants={{
                                        hide: {
                                            opacity: 0,
                                            translateY: "-20%",
                                        },
                                        show: {
                                            opacity: 1,

                                            translateY: 0,
                                            transition: {
                                                bounce: .2
                                            }
                                        }
                                    }}
                                    initial="hide"
                                    whileInView="show"
                                >
                                    <h1 className="pg-home__heading">
                                        Boost your <span style={{ color: "#b20000" }}>business</span> growth with top-notch <span style={{ color: "#b20000" }}>software development</span> solutions.
                                    </h1>
                                    <div className="pg-home__contex text-lg  mt-4">
                                        We are your trusted development partner with just one goal in focus to build products that generate a lasting, profitable impact.
                                    </div>
                                    <div className="mt-6">

                                        <button className="btn btn-primary btn-lg font-bold text-xl">
                                            Let's Discuss Your Idea
                                        </button>
                                    </div>
                                </motion.div>
                            </div>

                        </main>

                    </div>
                </div>
            </div>
        </section>
    )
}