import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Axios from "../../Axios"

const Createpost = () => {
  let navigate = useNavigate();
  let [state, setstate] = useState({
    title: "",
    author: "",
    loading: false,
  });
  let { title, author, loading } = state;

  let handleChange = e => {
    let { name, value } = e.target;
    setstate({ ...state, [name]: value });
  };
  let handleSubmit = async e => {
    e.preventDefault();
    try {
      setstate({ loading: true });
      let payload = { title, author };
      console.log(payload);
      await Axios.post("/posts", payload);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
    setstate({ loading: false });
  };

  return (
    <section id="postBlock" className="col-md-4 mx-auto bg-white p-4 mt-4 ">
      <article>
        <form>
          <h2 className="display-6 font-weight-bold text-success text-appercase border-bottom">
            Create Post
          </h2>
          <div className="mb-3">
            <label className="form-label" id="basic-addon1">
              title
            </label>
            <input
              type="text"
              name="title"
              id="title"
              placeholder="Enter Title"
              aria-label="Username"
              aria-describedby="basic-addon1"
              onChange={handleChange}
              className="form-control"
              value={title}
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
              aria-label="Username"
              aria-describedby="basic-addon1"
              onChange={handleChange}
              value={author}
            />
          </div>
          <button
            type="button"
            className="btn btn-primary"
            onClick={handleSubmit}
          >
            {loading === true ? "Loading ...." : "Submit"}
          </button>
        </form>
      </article>
    </section>
  );
};

export default Createpost;
