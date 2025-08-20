import Header from "./Header";

const Layout = ({ children }) => {
    return (
        <>
            <section id="app">
                <Header />
                <section className="container my-5">
                    {children}
                </section>
            </section>
        </>
    )
}

export default Layout;