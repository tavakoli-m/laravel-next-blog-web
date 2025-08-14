import Layout from "@/layouts/admin/Layout";
import { Http } from "@/services/Http";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useFormik } from "formik";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import * as Yup from 'yup';

const CreateCategory = () => {
    const router = useRouter()
    const queryClient = useQueryClient()

    const { mutate: createCategory } = useMutation({
        mutationFn: (data) => Http.post('/v1/category', data, {
            headers: {
                'Authorization': `Bearer ${Cookies.get('auth_token')}`
            }
        }),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['categories'] })
            router.push('/admin/category')
        }
    })

    const form = useFormik({
        initialValues: {
            name: ""
        },
        onSubmit: (data) => createCategory(data),
        validationSchema: Yup.object({
            name: Yup.string().required().min(1).max(255)
        })
    })

    return (
        <Layout>
            <form onSubmit={form.handleSubmit}>
                <section className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" className="form-control" {...form.getFieldProps('name')} id="name" placeholder="name ..." />
                    {form.errors.name && form.touched.name && (
                        <span className="text-danger">{form.errors.name}</span>
                    )}
                </section>
                <section className="form-group">
                    <button type="submit" className="btn btn-primary">Create</button>
                </section>
            </form>
        </Layout>
    )
}

export default CreateCategory;