import Header from "./Header";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
    return (
        <>
            <section id="app">
                <Header />
                <section className="container-fluid">
                    <section className="row">
                        <section className="col-md-2 p-0">
                            <Sidebar />
                        </section>
                        <section className="col-md-10 pt-3">
                            {children}
                        </section>
                    </section>
                </section>
            </section>
        </>
    )
}

export default Layout;