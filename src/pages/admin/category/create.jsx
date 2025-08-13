import Layout from "@/layouts/admin/Layout";

const CreateCategory = () => {
    return (
        <Layout>
            <form>
                <section className="form-group">
                    <label for="name">Name</label>
                    <input type="text" className="form-control" name="name" id="name" placeholder="name ..." />
                </section>
                <section className="form-group">
                    <button type="submit" className="btn btn-primary">Create</button>
                </section>
            </form>
        </Layout>
    )
}

export default CreateCategory;