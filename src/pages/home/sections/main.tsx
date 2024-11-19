import React from "react";
import { motion } from "framer-motion";
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
                                        Accelerate your business growth with world-class                                             software development.
                                    </h1>
                                    <div className="text-lg font-semibold mt-4">
                                        We are your trusted development partner with just one goal in focus to build products that generate a lasting, profitable impact.
                                    </div>
                                </motion.div>
                            </div>

                            {/* <div className="home-cover-image">
                                <motion.div
                                    variants={{
                                        hide: {
                                            scale: 0.5,
                                            translateY: "-50%",
                                            opacity: 0
                                        },
                                        show: {
                                            scale: 1,
                                            opacity: 1,
                                            translateY: 0,
                                            transition: {
                                                bounce: .25
                                            }
                                        },
                                    }}
                                    initial="hide"
                                    whileInView="show"
                                // animate="show"
                                >
                                    <img src="Server-amico.png" alt="" />
                                </motion.div>
                            </div> */}

                        </main>

                    </div>
                </div>
            </div>
        </section>
    )
}