import Layout from "@/layouts/admin/Layout";
import { Http } from "@/services/Http";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useFormik } from "formik";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import * as Yup from "yup";

const CreatePost = () => {
  const queryClient = useQueryClient();
  const router = useRouter();

  const { data: categories } = useQuery({
    queryKey: ["categories"],
    queryFn: () =>
      Http.get("/v1/category", {
        headers: {
          Authorization: `Bearer ${Cookies.get("auth_token")}`,
        },
      }).then((res) => res.data),
  });

  const form = useFormik({
    initialValues: {
      title: "",
      image: null,
      category_id: "",
      body: "",
    },
    onSubmit: (values) => createPost(values),
    validationSchema: Yup.object({
      title: Yup.string().required().min(1),
      category_id: Yup.string().required(),
      body: Yup.string().required(),
    }),
  });

  const { mutate: createPost } = useMutation({
    mutationFn: (data) =>
      Http.post("/v1/post", data, {
        headers: {
          Authorization: `Bearer ${Cookies.get("auth_token")}`,
          "Content-Type": "multipart/form-data",
        },
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
      router.push("/admin/post");
    },
  });

  return (
    <Layout>
      <form onSubmit={form.handleSubmit}>
        <section className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            className="form-control"
            id="title"
            placeholder="title ..."
            {...form.getFieldProps("title")}
          />
          {form.errors.title && form.touched.title && (
            <span className="text-danger">{form.errors.title}</span>
          )}
        </section>
        <section className="form-group">
          <label htmlFor="image">Image</label>
          <input
            type="file"
            className="form-control"
            onChange={(event) =>
              form.setFieldValue("image", event.target.files[0])
            }
            id="image"
          />
          {form.errors.image && form.touched.image && (
            <span className="text-danger">{form.errors.image}</span>
          )}
        </section>
        <section className="form-group">
          <label htmlFor="cat_id">Category</label>
          <select
            className="form-control"
            {...form.getFieldProps("category_id")}
            id="cat_id"
          >
            {categories?.data?.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
          {form.errors.category_id && form.touched.category_id && (
            <span className="text-danger">{form.errors.category_id}</span>
          )}
        </section>
        <section className="form-group">
          <label htmlFor="body">Body</label>
          <textarea
            className="form-control"
            {...form.getFieldProps("body")}
            id="body"
            rows="5"
            placeholder="body ..."
          ></textarea>
          {form.errors.body && form.touched.body && (
            <span className="text-danger">{form.errors.body}</span>
          )}
        </section>
        <section className="form-group">
          <button type="submit" className="btn btn-primary">
            Create
          </button>
        </section>
      </form>
    </Layout>
  );
};

export default CreatePost;
