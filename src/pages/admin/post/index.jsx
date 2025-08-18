import Layout from "@/layouts/admin/Layout";
import { Http } from "@/services/Http";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import Cookies from "js-cookie";
import Link from "next/link";

const PostList = () => {
  const queryClient = useQueryClient();

  const { data: posts } = useQuery({
    queryKey: ["posts"],
    queryFn: () =>
      Http.get("/v1/post", {
        headers: {
          Authorization: `Bearer ${Cookies.get("auth_token")}`,
        },
      }).then((res) => res.data),
  });

  const { mutate: deletePost } = useMutation({
    mutationFn: (id) =>
      Http.delete(`/v1/post/${id}`, {
        headers: {
          Authorization: `Bearer ${Cookies.get("auth_token")}`,
        },
      }).then((res) => res.data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
  });

  return (
    <Layout>
      <section className="mb-2 d-flex justify-content-between align-items-center">
        <h2 className="h4">Articles</h2>
        <Link href="/admin/post/create" className="btn btn-sm btn-success">
          Create
        </Link>
      </section>
      <section className="table-responsive">
        <table className="table table-striped table-">
          <thead>
            <tr>
              <th>#</th>
              <th>image</th>
              <th>title</th>
              <th>cat_id</th>
              <th>body</th>
              <th>status</th>
            </tr>
          </thead>
          <tbody>
            {posts?.data?.map((post) => (
              <tr key={post.id}>
                <td>{post.id}</td>
                <td>
                  {/* <img style={{ width: "90px" }} src="" /> */}
                  {post.image}
                </td>
                <td>{post.title}</td>
                <td>{post.category.name}</td>
                <td>{post.body.substr(0,20)}</td>
                <td>
                  <Link href={`/admin/post/edit/${post.id}`} className="btn btn-info btn-sm">
                    Edit
                  </Link>
                  <button onClick={() => deletePost(post.id)} className="btn btn-danger btn-sm">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </Layout>
  );
};

export default PostList;
