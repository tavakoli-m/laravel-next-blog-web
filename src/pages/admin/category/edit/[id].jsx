import Layout from "@/layouts/admin/Layout";

const EditCategory = () => {
    return (
        <Layout>
            <form>
                <section class="form-group">
                    <label for="name">Name</label>
                    <input type="text" class="form-control" name="name" id="name" placeholder="name ..." value="" />
                </section>
                <section class="form-group">
                    <button type="submit" class="btn btn-primary">Update</button>
                </section>
            </form>
        </Layout>
    )
}

export default EditCategory;