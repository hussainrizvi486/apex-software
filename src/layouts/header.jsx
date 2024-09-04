import { Link } from "react-router-dom"
export const PageHeader = () => {
    const navLinks = [
        {
            "name": "About Us",
            "url": "/"
        },
        {
            "name": "Services",
            "url": "/"
        },
        {
            "name": "Contacts",
            "url": "/"
        },
        {
            "name": "Solutions",
            "url": "/"
        },

    ]
    return (
        <header className="pg-header">
            <section>

                <h1>DevInnovative</h1>
            </section>

            <section>
                <nav className="pg-header__navbar">
                    <ul>
                        {navLinks.map((val, i) =>
                            <li key={i}>
                                <Link to={val.url} className="text-sm font-medium">{val.name}</Link>
                            </li>)}
                    </ul>
                </nav>
            </section>

            <section>
                <button className="btn font-medium">Let&rsquo;s start</button>
            </section>
        </header>
    )

}