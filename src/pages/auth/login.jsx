import { Http } from "@/services/Http";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useFormik } from "formik";
import Cookies from "js-cookie";
import Link from "next/link";
import { useRouter } from "next/router";
import * as Yup from 'yup'

const Login = () => {
    const router = useRouter()
    const queryClient = useQueryClient()
    const { mutate: loginApi } = useMutation({
        mutationFn: (values) => Http.post('/v1/login', values),
        onSuccess: ({ data: { data } }) => {
            Cookies.set('auth_token', data.token, { expires: 30, path: '/' })
            queryClient.invalidateQueries({ queryKey : ['user'] })
            router.push('/')
        }
    })
    const form = useFormik({
        initialValues: {
            email: "",
            password: ""
        },
        onSubmit: (data) => loginApi(data),
        validationSchema: Yup.object({
            email: Yup.string().required().email().max(255),
            password: Yup.string().required().min(8),
        })
    })

    return (
            <section id="app">
                <section style={{ "height": "100vh", backgroundColor: "#138496" }}
                    className="d-flex justify-content-center align-items-center">
                    <section style={{ "width": "20rem" }}>
                        <h1 className="bg-warning rounded-top px-2 mb-0 py-3 h5">Laravel + Next Blog login</h1>
                        <form className="pt-3 pb-1 px-2 bg-light rounded-bottom" onSubmit={form.handleSubmit}>
                            <section className="form-group">
                                <label htmlFor="email">Email</label>
                                <input type="email" className="form-control"{...form.getFieldProps('email')} id="email" placeholder="email ..." />
                                {form.errors.email && form.touched.email && (
                                    <span className="text-danger">{form.errors.email}</span>
                                )}
                            </section>
                            <section className="form-group">
                                <label htmlFor="password">Password</label>
                                <input type="password" className="form-control" {...form.getFieldProps('password')} id="password"
                                    placeholder="password ..." />
                                {form.errors.email && form.touched.email && (
                                    <span className="text-danger">{form.errors.email}</span>
                                )}
                            </section>
                            <section className="mt-4 mb-2 d-flex justify-content-between">
                                <input type="submit" className="btn btn-success btn-sm" value="login" />
                                <Link className="" href="/auth/register">register</Link>
                            </section>
                        </form>
                    </section>
                </section>
            </section>
    )
}

export default Login;