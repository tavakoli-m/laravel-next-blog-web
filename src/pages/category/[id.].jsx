import Layout from "@/layouts/app/Layout";

const CategoryPosts = () => {
    return (
        <Layout>
            <section className="row">
                <section className="col-12">
                    <h1>name</h1>
                    <hr />
                </section>
            </section>
            <section className="row">

                <section className="col-md-4">
                    <section className="mb-2 overflow-hidden" style={{ "maxHeight": "15rem" }}><img className="img-fluid" src="" alt="" /></section>
                    <h2 className="h5 text-truncate">title</h2>
                    <p>body</p>
                    <p><a className="btn btn-primary" href="" role="button">View details »</a></p>
                </section>

            </section>
        </Layout>
    )
}

export default CategoryPosts;