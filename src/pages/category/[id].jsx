import Layout from "@/layouts/app/Layout";
import { Http } from "@/services/Http";
import Link from "next/link";

const CategoryPosts = ({ posts }) => {
    return (
        <Layout>
            <section className="row">
                {posts?.map(post => (
                    <section className="col-md-4" key={post.id}>
                        <section className="mb-2 overflow-hidden" style={{ "maxHeight": "15rem" }}><img className="img-fluid" src={post.image} alt={post.title} /></section>
                        <h2 className="h5 text-truncate">{post.title}</h2>
                        <p>{post.body.substr(0, 10)}</p>
                        <p><Link className="btn btn-primary" href={`/post/${post?.id}`} role="button">View details »</Link></p>
                    </section>
                ))}
            </section>
        </Layout>
    )
}

export const getServerSideProps = async (ctx) => {
    const { data: posts } = await Http.get(`/v1/categories/${ctx.query.id}/posts`)

    return {
        props: {
            posts: posts.data
        }
    }
}


export default CategoryPosts;