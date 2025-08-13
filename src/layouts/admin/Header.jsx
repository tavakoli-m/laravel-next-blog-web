const Header = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-red">
                <a className="navbar-brand" href="">Laravel + Next Blog Project</a>
                <section className="collapse navbar-collapse" id="navbarSupportedContent"></section>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <a className="text-decoration-none text-white" href="">logout</a>
            </nav>
        </>
    )
}

export default Header;