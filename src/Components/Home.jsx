import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPosts, DeletePost } from "./../redux/Action/action";
import { Link } from "react-router-dom";

import { toast } from "react-toastify";
const Home = () => {
  let POSTS = useSelector(state => state.PostReducers.items);
  let STATE = useSelector(state => state.PostReducers.DeletedItem);

  let dispatch = useDispatch();
  // let [state, setState] = useState(null);
  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  let handleDelete = id => {
    dispatch(DeletePost(id));
    toast.success("successfully post deleted");
    window.location.assign("/");
  };

  return (
    <div className="container jumbotron my-4">
      {POSTS.length > 0 &&
        POSTS.map(x => {
          return (
            <div className="col-md-4" key={x.id}>
              <p className="list-item border-bottom p-2">{x.title}</p>
              <p>
                <Link
                  to={`/update-post/${x.id}`}
                  className="btn btn-primary btn-sm"
                >
                  Edit
                </Link>
              </p>
              <p>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => handleDelete(x.id)}
                >
                  Delete
                </button>
              </p>
            </div>
          );
        })}
    </div>
  );
};

export default Home;
