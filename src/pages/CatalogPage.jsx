import { useState, useEffect } from "react";
import catalog from '../utils/catalog'
import NavCatalogComponent from "../components/NavCatalogComponent/NavCatalogComponent";
import ItemsCatalogComponent from "../components/ItemsCatalogComponent/ItemsCatalogComponent";
export default function CatalogPage() {
    const [nameProduct, setNameProduct] = useState('');

    useEffect(() => {
        setNameProduct('Профнастил')
    }, [])

    return (
        <section className="catalog-page">
            <div className="catalog-page__content">
                <div className="catalog">
                    <NavCatalogComponent nameProduct={nameProduct} catalog={catalog} setNameProduct={setNameProduct} />
                    <ItemsCatalogComponent nameProduct={nameProduct} catalog={catalog} />
                </div>
            </div>
        </section>
    )
}
