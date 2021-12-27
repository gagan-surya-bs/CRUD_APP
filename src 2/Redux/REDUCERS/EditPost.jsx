import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import Axios from "../../Axios";

const EditPost = () => {
  let navigate = useNavigate();
  let { id } = useParams();
  let [state, setState] = useState({
    title: "",
    author: "",
    loading: false,
  });
  let { loading, title, author } = state;

  useEffect(() => {
    let fetchPost = async () => {
      let existsData = await Axios.get(`/posts/${id}`);
      console.log(existsData.data);
      setState(existsData.data);
    };
    fetchPost();
  }, [id]);
  let handleChange = e => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  let handleSubmit = async e => {
    e.preventDefault();
    try {
      setState({ loading: true });
      let payload = { title, author };
      console.log(payload);
      await Axios.put(`/posts/${id}`, payload);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
    // setState({ loading: false });
  };

  return (
    <section id="postBlock" className="col-md-4 mx-auto bg-white p-4 mt-4 ">
      <article>
        <form onSubmit={handleSubmit}>
          <h2 className="display-6 font-weight-bold text-success text-appercase border-bottom">
            Update Post
          </h2>
          <div className="mb-3">
            <label className="form-label" id="basic-addon1">
              title
            </label>
            <input
              type="text"
              name="title"
              id="title"
              className="form-control"
              placeholder="Enter Title"
              value={title}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label className="form-label" id="basic-addon1">
              Author
            </label>
            <input
              type="text"
              className="form-control"
              name="author"
              placeholder="Enter Author"
              value={author}
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="btn btn-success">
            {loading === true ? "Loading ...." : "Update"}
          </button>
        </form>
      </article>
    </section>
  );
};

export default EditPost;
