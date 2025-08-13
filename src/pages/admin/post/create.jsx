import Layout from "@/layouts/admin/Layout";

const CreatePost = () => {
    return (
        <Layout>
                <form>
                    <section className="form-group">
                        <label for="title">Title</label>
                        <input type="text" className="form-control" name="title" id="title" placeholder="title ..." />
                    </section>
                    <section className="form-group">
                        <label for="image">Image</label>
                        <input type="file" className="form-control" name="image" id="image" />
                    </section>
                    <section className="form-group">
                        <label for="cat_id">Category</label>
                        <select className="form-control" name="cat_id" id="cat_id">
                        </select>
                    </section>
                    <section className="form-group">
                        <label for="body">Body</label>
                        <textarea className="form-control" name="body" id="body" rows="5" placeholder="body ..."></textarea>
                    </section>
                    <section className="form-group">
                        <button type="submit" className="btn btn-primary">Create</button>
                    </section>
                </form>
        </Layout>
    )
}

export default CreatePost;