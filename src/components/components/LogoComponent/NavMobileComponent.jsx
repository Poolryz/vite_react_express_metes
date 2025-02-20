
import { Link } from "react-router"
import routes from "../../../utils/routes"
import './NavMobileComponent.scss'
export default function NavMobileComponent({ activeNavMobile, setActiveNavMobile }) {

    return (
        <nav className={activeNavMobile ? 'nav-mobile nav-mobile_active' : 'nav-mobile'}>
            <Link className="nav-mobile__item" to={routes.contact.getRoute()}>Контакты</Link>
            <Link className="nav-mobile__item" to={routes.login.getRoute()}>Войти</Link>
            <Link className="nav-mobile__item" to={routes.catalog.getRoute()}>Каталог</Link>
            <Link className="nav-mobile__item" to={routes.documents.getRoute()}>Документы</Link>
            <Link className="nav-mobile__item" to={routes.news.getRoute()}>Новости</Link>
            <Link className="nav-mobile__item" to={routes.about.getRoute()}>О компании</Link>
            <button onClick={() => { setActiveNavMobile(prev => !prev) }}>Закрыть</button>
        </nav>
    )
}
