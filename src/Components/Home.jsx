import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col text-center">
          {/* Home page with a redirection image to Dashboard page, where we can view the list of books */}
          <Link to="/dashboard">
            <h1
              className="text-xl font-bold underline"
              style={{ color: "skyblue" }}
            >
              Click here to view the Book store
            </h1>
            <img
              className="w-full max-w-sm md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto"
              src="https://png.pngtree.com/png-vector/20240320/ourmid/pngtree-taking-books-from-library-flat-png-image_12017697.png"
              alt="Library Management System"
              title="View Books"
              id="librarian_img"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
