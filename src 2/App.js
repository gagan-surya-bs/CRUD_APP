import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import Createpost from "./Components/Createpost";
// import EditPost from "./Components/EditPost";
// import Home from "./Pages/Home";
// import Navbar from "./Pages/Navbar";
import Createpost from "./Redux/REDUCERS/CreatePost";
import EditPost from "./Redux/REDUCERS/EditPost";
import Deletepost from "./Redux/REDUCERS/DeletePost";
import Home from "./Redux/Pages/Home";
import Navbar from "./Redux/Pages/Navbar";

const App = () => {
  return (
    <Router>
      <section>
        <header>
          <Navbar />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create-post" element={<Createpost />} />
            <Route path="/edit-post/:id" element={<EditPost/>} />
              <Route path="/delete-post/:id" element={<Deletepost />} />
          </Routes>
        </main>
        <footer></footer>
      </section>
    </Router>
  );
};

export default App;
