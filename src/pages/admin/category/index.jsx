import Layout from "@/layouts/admin/Layout";
import Link from "next/link";

const CategoryList = () => {
    return (
        <Layout>
            <section className="mb-2 d-flex justify-content-between align-items-center">
                <h2 className="h4">Categories</h2>
                <Link href="/admin/category/create" className="btn btn-sm btn-success">Create</Link>
            </section>
            <section className="table-responsive">
                <table className="table table-striped table-">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>name</th>
                            <th>setting</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>2</td>
                            <td>name</td>
                            <td>
                                <Link href="/admin/category/edit/4" className="btn btn-info btn-sm">Edit</Link>
                                <a href="" className="btn btn-danger btn-sm">Delete</a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </section>
        </Layout>
    )
}

export default CategoryList;