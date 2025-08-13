import Link from "next/link";

const Register = () => {
    return (
        <>
            <section id="app">

                <section style={{ "height": "100vh", backgroundColor: "#138496" }} class="d-flex justify-content-center align-items-center">
                    <section style={{ "width": "20rem" }}>
                        <h1 class="bg-warning rounded-top px-2 mb-0 py-3 h5">Laravel + Next Blog Register</h1>
                        <section class="bg-light my-0 px-2"><small class="text-danger"></small></section>
                        <form class="pt-3 pb-1 px-2 bg-light rounded-bottom" action="" method="post">
                            <section class="form-group">
                                <label for="email">Email</label>
                                <input type="email" class="form-control" name="email" id="email" placeholder="email ..." />
                            </section>
                            <section class="form-group">
                                <label for="first_name">First Name</label>
                                <input type="text" class="form-control" name="first_name" id="first_name" placeholder="first_name ..." />
                            </section>
                            <section class="form-group">
                                <label for="last_name">Last Name</label>
                                <input type="text" class="form-control" name="last_name" id="last_name" placeholder="last_name ..." />
                            </section>
                            <section class="form-group">
                                <label for="password">Password</label>
                                <input type="password" class="form-control" name="password" id="password" placeholder="password ..." />
                            </section>
                            <section class="form-group">
                                <label for="confirm">Confirm</label>
                                <input type="password" class="form-control" name="confirm" id="confirm" placeholder="confirm ..." />
                            </section>
                            <section class="mt-4 mb-2 d-flex justify-content-between">
                                <input type="submit" class="btn btn-success btn-sm" value="register" />
                                <Link class="" href="/auth/login">login</Link>
                            </section>
                        </form>
                    </section>
                </section>

            </section>
        </>
    )
}

export default Register;