import { BrowserRouter, Routes, Route } from "react-router"
import HomePage from '../../pages/HomePage.jsx'
import AboutPage from '../../pages/AboutPage.jsx'
import ContactPage from '../../pages/ContactPage.jsx'
import LoginPage from '../../pages/LoginPage.jsx'
import CatalogPage from '../../pages/CatalogPage.jsx'
import DocumentsPage from '../../pages/DocumentsPage.jsx'
import NewsPage from '../../pages/NewsPage.jsx'
import HeaderComponent from '../HeaderComponent/HeaderComponent.jsx'
import routes from '../../utils/routes.js'
import FooterComponent from '../FooterComponent/FooterComponent.jsx'
import ProductPage from "../../pages/ProductPage.jsx"

export default function App() {
    return (
        <BrowserRouter>
            <HeaderComponent />
            <main>
                <Routes>
                    <Route path={routes.home.getRoute()} element={<HomePage />} />
                    <Route path={routes.about.getRoute()} element={<AboutPage />} />
                    <Route path={routes.contact.getRoute()} element={<ContactPage />} />
                    <Route path={routes.login.getRoute()} element={<LoginPage />} />
                    <Route path={routes.catalog.getRoute()} element={<CatalogPage />} />
                    <Route path={routes.documents.getRoute()} element={<DocumentsPage />} />
                    <Route path={routes.news.getRoute()} element={<NewsPage />} />
                    <Route path={routes.product.getRoute()} element={<ProductPage />} />
                </Routes>
            </main>
            <FooterComponent />
        </BrowserRouter>
    )
}