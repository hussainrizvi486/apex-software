import { useState } from "react"

export const TechnologiesSection: React.FC = () => {
    const data = {
        "Frontend": [
            {
                "label": "React JS",
                "image": "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"
            },
            {
                "label": "Tailwind CSS",
                "image": "https://cdn.discordapp.com/attachments/1019570480782524478/1308536106811392101/Tailwind.png?ex=673e4cb7&is=673cfb37&hm=2eb5a4c52a7f12dd9a05106f6412620a4342f70a288c8cce8e22f7f61e2c0458&"
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
                "image": "https://cdn.discordapp.com/attachments/1019570480782524478/1308536012271779840/pngegg.png?ex=673e4ca0&is=673cfb20&hm=e19b7827e90316415f2646db4b235b0687baf647f0aae84b3d951eea13b1fa45&"
            },
            {
                "label": "HTML",
                "image": "https://cdn.discordapp.com/attachments/1019570480782524478/1308536238860537969/pngegg_12.png?ex=673e4cd6&is=673cfb56&hm=9961ebe570654aa679524e1bbbc0c31ea6fe91dcd7fc8d12444cc6c612af4f02&"
            },
            {
                "label": "CSS",
                "image": "https://cdn-icons-png.flaticon.com/512/732/732190.png"
            },
            {
                "label": "Sass",
                "image": "https://cdn.discordapp.com/attachments/1019570480782524478/1308536176159752232/pngegg_5.png?ex=673e4cc7&is=673cfb47&hm=9ddb1a5466d635e7b72160a2ea7853c557b7da64893cb5e631049a31518b351c&"
            },
        ],
        "Backend": [
            { "label": "Python", "image": "https://cdn-icons-png.flaticon.com/512/5968/5968350.png" },
            { "label": "Express JS", "image": "https://cdn.discordapp.com/attachments/1019570480782524478/1308559520770953257/pngwing.com.png?ex=673e6285&is=673d1105&hm=dc94191d11e516a038c928b7afcc833dc26a09491deba5bd57deb72fdecfb4a7&" },
            { "label": "Django", "image": "https://cdn.discordapp.com/attachments/1019570480782524478/1308536011785109574/DJango.png?ex=673e4ca0&is=673cfb20&hm=6b785536d8bafddf2a2ac94fc863d4dd17416a7ae68494d65dc0e8fba73af3f9&" },
            {
                "label": "JavaScript",
                "image": "https://cdn-icons-png.flaticon.com/512/5968/5968292.png"
            },
            { "label": "Node JS", "image": "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/233_Node_Js_logo-256.png" },
        ],
        "Databases": [
            { "label": "PostgreSQL", "image": "https://cdn.discordapp.com/attachments/1019570480782524478/1308560516691525672/pngegg.png?ex=673e6373&is=673d11f3&hm=38a1bfc45551ee52daddf0cf170ad7f45a3d882be81ff003d825d346680605eb&" },
            { "label": "MySQL", "image": "https://cdn.discordapp.com/attachments/1019570480782524478/1308563297246642226/pngegg_1.png?ex=673e6609&is=673d1489&hm=f1d7712e5d599b90f679f826cb34b2be2385329fe7b5c37a0480f58a280959ec&" },
            { "label": "mongoDB", "image": "https://www.svgrepo.com/show/331488/mongodb.svg" }
        ],
        "Cloud & DevOps": [

            { "label": "Nginx", "image": "https://cdn.discordapp.com/attachments/1019570480782524478/1308563296567427082/pngegg.png?ex=673e6609&is=673d1489&hm=603dcf3193f9dd01459060e63cce7e0962523a6cef2303b1f5e8d33a0efa6ac0&" },
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