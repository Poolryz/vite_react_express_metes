import { useParams } from "react-router-dom"
import catalog from '../utils/catalog'

export default function ProductPage() {
    const { id } = useParams()
    const product = catalog.flatMap((category) => category.data).find((item) => item.id === parseInt(id))
    if (!product) {
        return (
            <h1>Товар не найден</h1>
        )
    }
    return (
        <div className="product-page">
            <h1>{product.name}</h1>
            <div className="product-characteristics">
                <h2>Характеристики:</h2>
                <ul>
                    {Object.entries(product.characteristics).map(([key, value]) => (
                        <li key={key}>
                            <strong>{key}:</strong> {value}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
