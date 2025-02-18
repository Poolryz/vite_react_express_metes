/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Link } from "react-router"

export default function ItemsCatalogComponent({ nameProduct, catalog, ...props }) {
    return (
        <div className="items-catalog">
            <ul className="items-catalog__list">
                {nameProduct && catalog.map(item => {
                    if (item.name === nameProduct) {
                        return (
                            item.data.map(el => {
                                return (
                                    <Link to={`/product/${el.id}`} key={el.id} className="items-catalog__item">{el.name}</Link>
                                )
                            })
                        )
                    }
                })}
            </ul>
        </div>
    )
}
