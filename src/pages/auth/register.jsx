import { Http } from "@/services/Http";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import Link from "next/link";
import Cookies from 'js-cookie';
import { useRouter } from "next/router";
import { useFormik } from "formik";
import * as Yup from 'yup'

const Register = () => {
    const router = useRouter()
    const queryClient = useQueryClient()
    const { mutate: registerApi } = useMutation({
        mutationFn: (values) => Http.post('/v1/register', values),
        onSuccess: ({ data: { data } }) => {
            Cookies.set('auth_token', data.token, { expires: 30, path: '/' })
            queryClient.invalidateQueries({ queryKey: ['user'] })
            router.push('/')
        }
    })
    const form = useFormik({
        initialValues: {
            email: "",
            username: "",
            password: "",
            confirm: ""
        },
        onSubmit: (data) => registerApi(data),
        validationSchema: Yup.object({
            email: Yup.string().required().email().max(255),
            username: Yup.string().required().max(255),
            password: Yup.string().required().min(8),
            confirm: Yup.string().required().oneOf([Yup.ref('password')], 'Confirm Password Not Acceptable')
        })
    })

    return (
        <section id="app">
            <section style={{ "height": "100vh", backgroundColor: "#138496" }} className="d-flex justify-content-center align-items-center">
                <section style={{ "width": "20rem" }}>
                    <h1 className="bg-warning rounded-top px-2 mb-0 py-3 h5">Laravel + Next Blog Register</h1>
                    <form className="pt-3 pb-1 px-2 bg-light rounded-bottom" onSubmit={form.handleSubmit}>
                        <section className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" className="form-control" id="email" {...form.getFieldProps('email')} placeholder="email ..." />
                            {form.errors.email && form.touched.email && (
                                <span className="text-danger">{form.errors.email}</span>
                            )}
                        </section>
                        <section className="form-group">
                            <label htmlFor="username">User Name</label>
                            <input type="text" className="form-control" id="username" {...form.getFieldProps('username')} placeholder="username ..." />
                            {form.errors.username && form.touched.username && (
                                <span className="text-danger">{form.errors.username}</span>
                            )}
                        </section>
                        <section className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" className="form-control" id="password" {...form.getFieldProps('password')} placeholder="password ..." />
                            {form.errors.password && form.touched.password && (
                                <span className="text-danger">{form.errors.password}</span>
                            )}
                        </section>
                        <section className="form-group">
                            <label htmlFor="confirm">Confirm</label>
                            <input type="password" className="form-control" id="confirm" {...form.getFieldProps('confirm')} placeholder="confirm ..." />
                            {form.errors.confirm && form.touched.confirm && (
                                <span className="text-danger">{form.errors.confirm}</span>
                            )}
                        </section>
                        <section className="mt-4 mb-2 d-flex justify-content-between">
                            <input type="submit" className="btn btn-success btn-sm" value="register" />
                            <Link className="" href="/auth/login">login</Link>
                        </section>
                    </form>
                </section>
            </section>
        </section>
    )
}

export default Register;