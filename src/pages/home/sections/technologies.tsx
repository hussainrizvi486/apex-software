import { useState } from "react"

export const TechnologiesSection: React.FC = () => {
    const data = {
        "Frontend": [
            {
                "label": "React JS",
                "image": "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"
            },
            {
                "label": "NEXT.JS",
                "image": "https://static-00.iconduck.com/assets.00/nextjs-icon-1024x1024-5et230l7.png"
            },
            {
                "label": "TypeScript",
                "image": "https://cdn-icons-png.flaticon.com/512/5968/5968381.png"
            },
            {
                "label": "JavaScript",
                "image": "https://cdn-icons-png.flaticon.com/512/5968/5968292.png"
            },
            {
                "label": "Rest API",
                "image": "https://cdn-icons-png.flaticon.com/512/10404/10404458.png"
            },
            {
                "label": "HTML",
                "image": "https://cdn-icons-png.flaticon.com/512/174/174854.png"
            },
            {
                "label": "CSS",
                "image": "https://cdn-icons-png.flaticon.com/512/732/732190.png"
            },
        ],
        "Backend": [
            { "label": "Python", "image": "https://cdn-icons-png.flaticon.com/512/5968/5968350.png" },
            { "label": "Express JS", "image": "https://img.icons8.com/color/512/express-js.png" },
            { "label": "Django", "image": "https://w7.pngwing.com/pngs/10/113/png-transparent-django-web-development-web-framework-python-software-framework-django-text-trademark-logo-thumbnail.png" },
            {
                "label": "JavaScript",
                "image": "https://cdn-icons-png.flaticon.com/512/5968/5968292.png"
            },
            { "label": "Node JS", "image": "https://cdn-icons-png.flaticon.com/512/919/919825.png" },
        ],
        "Databases": [
            { "label": "PostgreSQL", "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZSOIj7rDvRcVKV8OcU_CAlJesGK_cxk9FSw&s" },
            { "label": "MySQL", "image": "https://cdn-icons-png.flaticon.com/512/919/919836.png" },
            { "label": "mongoDB", "image": "https://www.svgrepo.com/show/331488/mongodb.svg" }
        ],
        "Cloud & DevOps": [

            { "label": "Nginx", "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw5-AR8zEFdITxwcsvta1oOd5jZifM4Ryjlw&s" },
            { "label": "Firebase", "image": "https://cdn4.iconfinder.com/data/icons/google-i-o-2016/512/google_firebase-2-512.png" },
            { "label": "Digital Ocean", "image": "https://static-00.iconduck.com/assets.00/digitalocean-icon-2048x2048-4col409s.png" },
            { "label": "AWS", "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVj0jisdcvxnjyylo9HUKwS1p89RniwBu9Ew&s" },
        ],
    }

    const keys = Object.keys(data)
    const [activeTab, setActiveTab] = useState("Frontend");

    return (
        <div className="app-container">
            <div className="pg-section">
                <div className="mb-5">
                    <div className="pg-heading ">
                        Technologies we use.
                    </div>
                    <div className="sub-para">
                        At Apex Softwares, we utilize cutting-edge technologies like Django, React, and MariaDB to build robust, scalable solutions. Our tools enable seamless performance and adaptability across diverse applications.
                    </div>

                </div>
                <div className="technology-container">
                    <div className="technology-labels">
                        {keys.map((val, i) => (
                            <div key={i} className={`technology-label ${val === activeTab ? "active" : ""}`} onClick={() => setActiveTab(val)}>
                                <div className="text-xl">{val}</div>
                            </div>
                        ))}
                    </div>


                    <div className="technology-grid">
                        {activeTab ?
                            data[activeTab]?.map(row => (
                                <div className="technology-card">
                                    <div className="technology-card__image">
                                        <img src={row.image} alt="" />
                                    </div>
                                    <div className="text-sm font-bold">{row.label}</div>

                                </div>

                            ))
                            : <></>}

                    </div>
                </div>
            </div>

        </div>
    )
}