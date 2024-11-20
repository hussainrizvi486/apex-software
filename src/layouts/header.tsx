import { Link } from "react-router-dom";
import { Button } from "../components";

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

export const Header = () => {
    return (
        <div className="pg-header-container">

            <header className="pg-header app-container">
                <section className="pg-header__brand">
                    <h1><span
                        style={{ color: "#b20000" }}
                    >Apex</span> Sofware</h1>
                </section>

                <section>
                    <nav className="pg-header__navbar">
                        {navLinks.map((val, i) =>
                            <div key={i}>
                                <Link to={val.url} className="nav-item text-md font-medium">{val.name}</Link>
                            </div>)}
                    </nav>
                </section>
                <section className="pg-header__left">
                    <button className="btn  btn-primary">Let's Chat</button>
                </section>



                <section className="pg-header__sm-menu">
                    <Button varaint="outline">
                        Let&lsquo;s chat
                    </Button>
                    <div className="menu-icon-container">
                        <HeaderMenu />
                    </div>
                </section>
            </header>
        </div>
    )
}

const HeaderMenu = () => {
    return (
        <div className="menu-icon">
            <div className="menu-icon__line"></div>
            <div className="menu-icon__line"></div>
            <div className="menu-icon__line"></div>
        </div>
    )
}