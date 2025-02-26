
import { Link } from "react-router"

export default function ItemsCatalogComponent({ nameProduct, catalog }) {
    const selectedCategory = catalog.find(item => item.name === nameProduct)
    return (
        <div className="items-catalog">
            <ul className="items-catalog__list">
                {selectedCategory?.data.map(item => {
                    return (
                        <Link to={`/product/${item.id}`} key={item.id} className="items-catalog__item">{item.name}</Link>
                    )
                })}

            </ul>
        </div>
    )
}
