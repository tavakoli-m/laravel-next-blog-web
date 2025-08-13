import Layout from "@/layouts/admin/Layout";
import Link from "next/link";

const PostList = () => {
    return (
        <Layout>
            <section class="mb-2 d-flex justify-content-between align-items-center">
                <h2 class="h4">Articles</h2>
                <Link href="/admin/post/create" class="btn btn-sm btn-success">Create</Link>
            </section>
            <section class="table-responsive">
                <table class="table table-striped table-">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>image</th>
                            <th>title</th>
                            <th>cat_id</th>
                            <th>body</th>
                            <th>status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>2</td>
                            <td><img style={{ "width": "90px" }} src="" /></td>
                            <td>title</td>
                            <td>cat name</td>
                            <td>body</td>
                            <td>
                                <a href="" class="btn btn-info btn-sm">Edit</a>
                                <a href="" class="btn btn-danger btn-sm">Delete</a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </section>
        </Layout>
    )
}

export default PostList;