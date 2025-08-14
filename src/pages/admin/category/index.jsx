import Layout from "@/layouts/admin/Layout";
import { Http } from "@/services/Http";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import Cookies from "js-cookie";
import Link from "next/link";

const CategoryList = () => {
    const queryClient = useQueryClient();

    const { data: categories } = useQuery({
        queryKey: ['categories'],
        queryFn: () => Http.get('/v1/category', {
            headers: {
                'Authorization': `Bearer ${Cookies.get('auth_token')}`
            }
        }).then(res => res.data)
    })

    const { mutate: deleteCategory } = useMutation({
        mutationFn: (id) => Http.delete(`/v1/category/${id}`, {
            headers: {
                'Authorization': `Bearer ${Cookies.get('auth_token')}`
            }
        }).then(res => res.data),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['categories'] })
        }
    })

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
                        {categories?.data?.map((category) => (
                            <tr key={category.id}>
                                <td>{category.id}</td>
                                <td>{category.name}</td>
                                <td>
                                    <Link href={`/admin/category/edit/${category.id}`} className="btn btn-info btn-sm">Edit</Link>
                                    <button onClick={() => deleteCategory(category.id)} className="btn btn-danger btn-sm">Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>
        </Layout>
    )
}

export default CategoryList;