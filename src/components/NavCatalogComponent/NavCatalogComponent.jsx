import './NavCatalogComponent.scss'
export default function NavCatalogComponent({ nameProduct, catalog, setNameProduct }) {
    return (
        <nav className="nav-catalog">
            <ul className="nav-catalog__list">
                {catalog.map(item => {
                    return (
                        <li

                            key={item.name}
                            onClick={() => { setNameProduct(item.name) }}
                            className={
                                nameProduct === item.name
                                    ?
                                    'nav-catalog__item nav-catalog__item_active' : 'nav-catalog__item'
                            }
                            role="button"
                            tabIndex={0}
                            aria-label={`Выбрать категорию ${item.name}`}>
                            {item.name}
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}