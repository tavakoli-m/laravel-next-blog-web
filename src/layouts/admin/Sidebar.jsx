import Link from "next/link";

const Sidebar = () => {
    return (
        <>
            <section className="sidebar">
                <section className="sidebar-link">
                    <Link href="/admin">panel</Link>
                </section>
                <section className="sidebar-link">
                    <Link href="/admin/category">category</Link>
                </section>
                <section className="sidebar-link">
                    <Link href="/admin/post">post</Link>
                </section>
            </section>
        </>
    )
}

export default Sidebar;