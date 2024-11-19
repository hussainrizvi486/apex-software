import { ServiceCard } from "../../../components/website";
import { TypeService } from "../../../components/website/main";
import { motion } from "framer-motion";

export const ServiceSection: React.FC = () => {
    const services: Array<TypeService> = [

        {
            "title": "Frontend Development",
            "description": "We specialize in creating modular, high-performance web applications for both corporate clients and startups, leveraging modern and reliable technology stacks.",
            "image": "https://cdn-icons-png.flaticon.com/512/1055/1055666.png",
            "badges": [
                "React JS",
                "JavaScript",
                "TypeScript",
                "CSS",
                "HTML"
            ]
        },
        {
            "title": "Backend Development",
            "description": "We have expertise in developing high-load, complex backend infrastructure for mobile and web applications, as well as enterprise services.",
            "image": "https://cdn-icons-png.flaticon.com/512/6213/6213731.png",
            "badges": [
                "Python",
                "Django",
                "PostgreSQL",
                "Flask"
            ]
        },
        {
            "title": "Web Development",
            "description": "Our developers craft custom web solutions tailored to your specific needs, designed for seamless integration with popular frameworks like Next.js and Django, and easily adaptable to your existing internal systems.",
            "image": "https://cdn-icons-png.flaticon.com/512/7991/7991055.png",
            "badges": [
                "Next JS",
                "Django",
                "Firebase",
                "Appwrite"
            ]
        },
        {
            "title": "ERP Development",
            "description": "Our team develops tailored ERP solutions to meet your unique requirements, ensuring seamless integration with leading frameworks like Next.js and Django and smooth compatibility with your existing internal systems.",
            "image": "https://cdn-icons-png.flaticon.com/512/11891/11891097.png",
            "badges": [
                "ERPNext",
                "Python",
                "JavaScript",
                "Frappe"
            ]
        }
    ]

    const serviceChildVariants = {
        hidden: { opacity: 0, scale: 0.75 },
        show: { opacity: 1, scale: 1 }
    }
    return (

        <section>
            <div className="pg--services-page">
                <div className="app-container">
                    <div className="pg-section">
                        <div className="pg-heading text-center">What We Offer</div>
                        <motion.div

                            variants={{
                                hidden: {
                                    opacity: 0
                                },
                                show: {
                                    opacity: 1,
                                    transition: {
                                        staggerChildren: .2
                                    }
                                },

                            }}
                            initial="hidden"
                            // animate="show"
                            whileInView="show"
                        >
                            <div style={{
                                display: "grid",
                                gridTemplateColumns: "repeat(2, 1fr)"
                            }}
                                className="gap-1"
                            >

                                {services.map((val, i) => (
                                    <motion.div key={i} variants={serviceChildVariants}>
                                        <ServiceCard service={val} />
                                    </motion.div>
                                ))}
                            </div>

                        </motion.div>
                    </div>



                </div>
            </div>

        </section >
    )
}