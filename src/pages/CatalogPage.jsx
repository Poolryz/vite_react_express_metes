import { useState, useEffect } from "react";
import NavCatalogComponent from "../components/components/NavCatalogComponent/NavCatalogComponent";
import ItemsCatalogComponent from "../components/components/ItemsCatalogComponent/ItemsCatalogComponent";
export default function CatalogPage() {
    const [nameProduct, setNameProduct] = useState('');

    useEffect(() => {
        setNameProduct('Профнастил')
    }, [])


    const profnastil = [
        {
            name: 'Профнастил 21',
            id: 1
        },
        {
            name: 'Профнастил 10',
            id: 2
        },
        {
            name: 'Профнастил 42',
            id: 3
        }

    ]

    const metallocherepitca = [
        {
            name: 'Металлочерепица 21',
            id: 1
        },
        {
            name: 'Металлочерепица 10',
            id: 2
        },
        {
            name: 'Металлочерепица 42',
            id: 3
        }

    ]

    const bronilenta = [
        {
            name: 'Бронилента 21',
            id: 1
        },
        {
            name: 'Бронилента 10',
            id: 2
        },
        {
            name: 'Бронилента 42',
            id: 3
        }

    ]
    const catalog = [
        { name: 'Профнастил', data: profnastil },
        { name: 'Металлочерепица', data: metallocherepitca },
        { name: 'Бронилента', data: bronilenta }
    ]


    return (
        <section className="catalog-page">
            <div className="catalog-page__content">
                <div className="catalog">
                    <NavCatalogComponent catalog={catalog} setNameProduct={setNameProduct} />
                    <ItemsCatalogComponent nameProduct={nameProduct} catalog={catalog} />
                </div>
            </div>
        </section>
    )
}
