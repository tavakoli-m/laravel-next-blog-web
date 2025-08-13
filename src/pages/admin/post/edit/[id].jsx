import Layout from "@/layouts/admin/Layout";

const EditPost = () => {
    return (
        <Layout>
            <form>
                <section class="form-group">
                    <label for="title">Title</label>
                    <input type="text" class="form-control" name="title" id="title" placeholder="title ..." value="w" />
                </section>
                <section class="form-group">
                    <label for="image">Image</label>
                    <input type="file" class="form-control" name="image" id="image" />
                </section>
                <section class="form-group">
                    <label for="cat_id">Category</label>
                    <select class="form-control" name="cat_id" id="cat_id">
                    </select>
                </section>
                <section class="form-group">
                    <label for="body">Body</label>
                    <textarea class="form-control" name="body" id="body" rows="5" placeholder="body ...">sss</textarea>
                </section>
                <section class="form-group">
                    <button type="submit" class="btn btn-primary">Update</button>
                </section>
            </form>

        </Layout>
    )
}

export default EditPost;