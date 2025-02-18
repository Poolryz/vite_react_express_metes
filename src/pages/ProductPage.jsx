import { useParams } from "react-router-dom"

export default function ProductPage() {
    const params = useParams()
    const productId = params.id
    return (
        <div>ProductPage {productId}</div>
    )
}
