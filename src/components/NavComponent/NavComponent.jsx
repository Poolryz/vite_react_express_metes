
import { Link } from "react-router-dom";
import routes from '../../utils/routes';
import './NavComponent.scss'
export default function NavComponent() {
    return (
        <nav className='nav'>
            <Link className="nav__item" to={routes.contact.getRoute()}>Контакты</Link>
            <Link className="nav__item" to={routes.login.getRoute()}>Войти</Link>
            <Link className="nav__item" to={routes.catalog.getRoute()}>Каталог</Link>
            <Link className="nav__item" to={routes.documents.getRoute()}>Документы</Link>
            <Link className="nav__item" to={routes.news.getRoute()}>Новости</Link>
            <Link className="nav__item" to={routes.about.getRoute()}>О компании</Link>
        </nav>
    )
}
