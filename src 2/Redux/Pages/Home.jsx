import React, { Fragment, useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
// import { ContextPostApi } from "../APIs/ContextPostApi";
import Axios from "../../Axios"

const Home = () => {
  let [state, setState] = useState([]);
  let [loading, setLoading] = useState(false);
  let [searchTerm, setsearchterm] = useState("");

  useEffect(() => {
    let fetchData = async () => {
      let payload = await Axios.get("/posts");
      setState(payload.data);
    };
    fetchData();
  }, []);
  let mapdata = state
    .filter(val => {
      if (searchTerm === "") {
        return val;
      } else if (val.title.toLowerCase().includes(searchTerm.toLowerCase())) {
        return val;
      }
    })
    .map(x => {
      return (
        <Fragment key={x.id}>
          <tr>
            <td>{x.id}</td>
            <td>{x.title}</td>
            <td>{x.author}</td>
            <td className="btn-group w-100">
              <div className="btn-group w-100">
                <Link
                  to={`/edit-post/${x.id}`}
                  className="btn btn-outline-primary table-dark"
                >
                  edit
                </Link>
                <Link
                  to={`/delete-post/${x.id}`}
                  className="btn btn-outline-primary table-dark"
                >
                  Delete
                </Link>
              </div>
            </td>
          </tr>
        </Fragment>
      );
    });
  return (
    <div>
      {loading ? (
        "loading...."
      ) : (
        <Fragment>
          <div className="container my-4 btn-lite">
            <input
              type="search"
              name="searchTerm"
              placeholder="search..."
              className="form-control"
              value={searchTerm}
              onChange={e => setsearchterm(e.target.value)}
            />
          </div>
          <div className="container my-4 btn-lite">
            <table className="table table-bordered table-hover table-light">
              <thead className="table-dark">
                <tr>
                  <th>ID</th>
                  <th>Title</th>
                  <th>Author</th>
                </tr>
              </thead>
              <tbody>{mapdata}</tbody>
            </table>
          </div>
        </Fragment>
      )}
    </div>
  );
};

export default Home;
