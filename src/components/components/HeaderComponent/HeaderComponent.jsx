
import { useState } from "react";
import "./HeaderComponent.scss";
import NavComponent from "../NavComponent/NavComponent.jsx";
import LogoComponent from "../LogoComponent/LogoComponent.jsx";
import BurgerComponent from "../LogoComponent/BurgerComponent.jsx";
import NavMobileComponent from "../LogoComponent/NavMobileComponent.jsx";


export default function HeaderComponent() {
    const [activeNavMobile, setActiveNavMobile] = useState(false);
    return (
        <>
            <header className="header">
                <div className="header__body">
                    <div className="header_container _container">
                        <div className="header__content">
                            <div className="header__top">
                                <a href="tel:+79999999999" className="header__tel-link tel-link">+7(999)999-99-99</a>
                                <a href="#" className="header__price-link price-link">Прайс-Лист</a>
                                <a href="#" className="header__soc-link soc-link">
                                    <img src="https://e7.pngegg.com/pngimages/746/1019/png-clipart-computer-icons-social-media-youtube-hashtag-font-awesome-social-media-logo-monochrome.png" style={{ width: '20px', height: 'auto' }} alt="" />
                                </a>
                                <a href="#" className="header__soc-link soc-link">
                                    <img src="https://pngset.com/images/footer-telegram-icons-download-free-and-vector-icons-gray-world-of-warcraft-transparent-png-2087162.png" style={{ width: '20px', height: 'auto' }} alt="" />
                                </a>
                                <a href="mailto:info@info.info" className="header__mail-link">info@info.info</a>
                            </div>
                            <div className="header__bottom">
                                <LogoComponent />
                                <NavComponent activeNavMobile={activeNavMobile} />
                                <BurgerComponent setActiveNavMobile={setActiveNavMobile} />
                                <input className="header__search search-input" type="text" placeholder="Поиск по сайту" />
                            </div>
                        </div>
                    </div>
                </div>
                <NavMobileComponent setActiveNavMobile={setActiveNavMobile} activeNavMobile={activeNavMobile} />
            </header>

        </>


    )
}
