import { useAuth } from "@/context/AuthContext";
import { Http } from "@/services/Http";
import { useMutation, useQuery } from "@tanstack/react-query";
import Cookies from "js-cookie";
import Link from "next/link";
import { useRouter } from "next/router";

const Header = () => {
    const { data } = useAuth()
    const router = useRouter();

    const { mutate: logoutApi } = useMutation({
        mutationFn: () => Http.post('/v1/logout',
            {},
            {
                headers: {
                    'Authorization': `Bearer ${Cookies.get('auth_token')}`
                }
            }
        ),
        onSuccess: () => {
            Cookies.remove('auth_token')
            router.reload()
        }
    })

    const { data: categories } = useQuery({
        queryKey: ['categories'],
        queryFn: () => Http.get('/v1/categories').then(res => res.data)
    })

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-blue ">
                <Link className="navbar-brand " href="/">Laravel + Next Blog Project</Link>
                <div className="collapse navbar-collapse " id="navbarSupportedContent ">
                    <ul className="navbar-nav mr-auto ">
                        {categories?.data?.map((category) => (
                            <li className="nav-item" key={category.id}>
                                <Link className="nav-link " href={`/category/${category.id}`}>{category.name}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <section className="d-inline ">
                    {!data ? (
                        <>
                            <Link className="text-decoration-none text-white px-2 " href="/auth/register">register</Link>
                            <Link className="text-decoration-none text-white " href="/auth/login">login</Link>
                        </>
                    ) : (
                        <a className="text-decoration-none text-white px-2 " onClick={logoutApi}>logout</a>
                    )}

                </section>
            </nav>
        </>
    )
}

export default Header;