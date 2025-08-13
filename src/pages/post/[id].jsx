import Layout from "@/layouts/app/Layout";

const Post = () => {
    return (
        <Layout>
            <section class="row">
                <section class="col-md-12">
                    <h1>title</h1>
                    <h5 class="d-flex justify-content-between align-items-center">
                        <a href="">name</a>
                        <span class="date-time">22/22/33</span>
                    </h5>
                    <article class="bg-article p-3"><img class="float-right mb-2 ml-2" style={{ "width": "18rem" }} src="" alt="" />body</article>
                </section>
            </section>
        </Layout>
    )
}

export default Post;