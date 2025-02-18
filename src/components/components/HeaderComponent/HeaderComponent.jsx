
import "./HeaderComponent.scss";
import NavComponent from "../NavComponent/NavComponent.jsx";
import LogoComponent from "../LogoComponent/LogoComponent.jsx";

export default function HeaderComponent() {
    return (
        <header className="header">
            <div className="header__content">
                <LogoComponent />
                <NavComponent />
            </div>
        </header>
    )
}
