import { Link } from "react-router-dom"

export const Footer = () => {
    return (
        <footer className="pg-footer">
            <div className="app-container pg-footer__container">
                <div className="pg-footer__bottom">
                    <div className="pg-footer__brand">
                        Apex Sofware
                    </div>

                    <div className="text-sm">
                        <span className=" policy-seprator">
                            <Link className="link" to={"/"} />Privacy Policy</span> &copy; 2025, Apex Softwares
                    </div>

                </div>
            </div>
        </footer>
    )
}
