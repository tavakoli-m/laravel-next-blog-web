import Link from "next/link";

const Header = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-blue ">
                <Link className="navbar-brand " href="/">Laravel + Next Blog Project</Link>
                <div className="collapse navbar-collapse " id="navbarSupportedContent ">
                    <ul className="navbar-nav mr-auto ">
                        <li className="nav-item ">
                            <Link className="nav-link " href="/category/4">Sport</Link>
                        </li>
                    </ul>
                </div>
                <section className="d-inline ">
                    <Link className="text-decoration-none text-white px-2 " href="/auth/register">register</Link>
                    <Link className="text-decoration-none text-white " href="/auth/login">login</Link>
                    {/* <a className="text-decoration-none text-white px-2 " href=" ">logout</a> */}
                </section>
            </nav>
        </>
    )
}

export default Header;