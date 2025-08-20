import Layout from "@/layouts/app/Layout";
import { Http } from "@/services/Http";
import Link from "next/link";

const Post = ({ post }) => {
    return (
        <Layout>
            <section class="row">
                <section class="col-md-12">
                    <h1>{post?.title}</h1>
                    <h5 class="d-flex justify-content-between align-items-center">
                        <Link href={`/category/${post?.category?.id}`}>{post?.category?.name}</Link>
                        <span class="date-time">{post?.created_at}</span>
                    </h5>
                    <article class="bg-article p-3">
                        <img class="float-right mb-2 ml-2" style={{ "width": "18rem" }} src={post?.image} alt={post?.title} />
                        {post?.body}
                    </article>
                </section>
            </section>
        </Layout>
    )
}

export async function getStaticPaths() {
    const { data } = await Http.get('/v1/posts')

    return {
        paths: data?.data?.map(post => ({ params: { id: String(post.id) } })),
        fallback: true, // false or "blocking"
    }
}

export async function getStaticProps(ctx) {
    const { data: post } = await Http.get(`/v1/posts/${ctx.params.id}`)
    return {
        props: {
            post: post.data,
        },
        revalidate: 20

    }
}

export default Post;