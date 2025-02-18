const routes = {
    home: {
        name: "Home",
        id: 1,
        route: "/",
        getRoute() {
            return this.route
        }
    },
    about: {
        name: "About",
        id: 2,
        route: "/about",
        getRoute() {
            return this.route
        }
    },
    contact: {
        name: "Contact",
        id: 3,
        route: "/contact",
        getRoute() {
            return this.route
        }
    },
    login: {
        name: "Login",
        id: 4,
        route: "/login",
        getRoute() {
            return this.route
        }
    },
    catalog: {
        name: "Catalog",
        id: 5,
        route: "/catalog",
        getRoute() {
            return this.route
        }
    },
    documents: {
        name: "Documents",
        id: 6,
        route: "/documents",
        getRoute() {
            return this.route
        }
    },
    news: {
        name: "News",
        id: 7,
        route: "/news",
        getRoute() {
            return this.route
        }
    },
    product: {
        name: "News",
        id: 7,
        route: "/product/:id",
        getRoute() {
            return this.route
        }
    }
}
export default routes