import { useAuth } from "@/context/AuthContext";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { useEffect } from "react";
import { useRouter } from "next/router";

const Layout = ({ children }) => {
    const { data, isLoading } = useAuth()
    const router = useRouter()

    useEffect(() => {
        if (data === undefined && isLoading === false) {
            router.push('/')
        }
    }, [data, isLoading])

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