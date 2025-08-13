import { Http } from "@/services/Http";
import { useMutation } from "@tanstack/react-query";
import Cookies from "js-cookie";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

const Login = () => {

    const [inputs, setInputs] = useState({})
    const router = useRouter()

    const handleChnage = (event) => {
        setInputs({ ...inputs, [event.target.name]: event.target.value })
    }

    const { mutate } = useMutation({
        mutationFn: (values) => Http.post('/v1/login', values),
        onSuccess: ({ data: { data } }) => {
            Cookies.set('auth_token', data.token, { expires: 30, path: '/' })
            router.push('/')
        }
    })

    const handleSubmit = (event) => {
        event.preventDefault();
        mutate(inputs)
    }

    return (
        <>
            <section id="app">

                <section style={{ "height": "100vh", backgroundColor: "#138496" }}
                    className="d-flex justify-content-center align-items-center">
                    <section style={{ "width": "20rem" }}>
                        <h1 className="bg-warning rounded-top px-2 mb-0 py-3 h5">Laravel + Next Blog login</h1>
                        <section className="bg-light my-0 px-2"><small className="text-danger"></small></section>
                        <form className="pt-3 pb-1 px-2 bg-light rounded-bottom" onSubmit={handleSubmit}>
                            <section className="form-group">
                                <label htmlFor="email">Email</label>
                                <input type="email" className="form-control" onChange={handleChnage} name="email" id="email" placeholder="email ..." />
                            </section>
                            <section className="form-group">
                                <label htmlFor="password">Password</label>
                                <input type="password" className="form-control" onChange={handleChnage} name="password" id="password"
                                    placeholder="password ..." />
                            </section>
                            <section className="mt-4 mb-2 d-flex justify-content-between">
                                <input type="submit" className="btn btn-success btn-sm" value="login" />
                                <Link className="" href="/auth/register">register</Link>
                            </section>
                        </form>
                    </section>
                </section>
            </section>
        </>
    )
}

export default Login;