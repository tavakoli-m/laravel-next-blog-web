import Layout from "@/layouts/admin/Layout";
import { Http } from "@/services/Http";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useFormik } from "formik";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { useEffect } from "react";
import * as Yup from 'yup';

const EditCategory = () => {
    const router = useRouter()
    const queryClient = useQueryClient();

    const form = useFormik({
        initialValues: {
            name: ""
        },
        onSubmit: (data) => updateCategory(data),
        validationSchema: Yup.object({
            name: Yup.string().required().min(1).max(255)
        })
    })

    const { data: category } = useQuery({
        queryKey: ['category', router.query.id],
        queryFn: () => Http.get(`/v1/category/${router.query.id}`, {
            headers: {
                'Authorization': `Bearer ${Cookies.get('auth_token')}`
            }
        }).then(res => res.data)
    })

    const { mutate: updateCategory } = useMutation({
        mutationFn: (data) => Http.put(`/v1/category/${router.query.id}`, data, {
            headers: {
                'Authorization': `Bearer ${Cookies.get('auth_token')}`
            }
        }),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['categories'] })
            queryClient.invalidateQueries({ queryKey: ['category',router.query.id] })

            router.push('/admin/category')
        }
    })

    useEffect(() => {
        if (category) {
            form.setFieldValue('name', category.data.name)
        }
    }, [category])


    return (
        <Layout>
            <form onSubmit={form.handleSubmit}>
                <section className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" className="form-control" {...form.getFieldProps('name')} id="name" placeholder="name ..." />
                </section>
                <section className="form-group">
                    <button type="submit" className="btn btn-primary">Update</button>
                </section>
            </form>
        </Layout>
    )
}

export default EditCategory;