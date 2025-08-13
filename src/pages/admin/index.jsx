import Layout from "@/layouts/admin/Layout";

const Admin = () => {
    return (
        <Layout>
            <section style={{ " minHeight": "80vh" }} className="d-flex justify-content-center align-items-center">
                <section>
                    <h1>Laravel + Next Blog Project</h1>
                    <ul className="mt-2 li">
                        <li><h3>Rest Api</h3></li>
                        <li><h3>File upload</h3></li>
                        <li><h3>React Query</h3></li>
                    </ul>
                </section>
            </section>
        </Layout>
    )
}

export default Admin;