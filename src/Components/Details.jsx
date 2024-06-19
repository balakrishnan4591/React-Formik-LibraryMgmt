import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { axiosService } from "../Utilities/Apiservices";

const Details = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { data } = state;
  const { id, title, bookImg, authorImg, about, name, pub, isbn, birth, bio } =
    data;

  const defaultBookImgUrl =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiZV0WxURh4QRU50JJMkKrbIC2Enn77UUqOwKbRb8R-wopOA7Tm2M1jFuVthM3TDyvsWY&usqp=CAU";
  const defaultAuthorImgUrl =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiZV0WxURh4QRU50JJMkKrbIC2Enn77UUqOwKbRb8R-wopOA7Tm2M1jFuVthM3TDyvsWY&usqp=CAU";
  const handleDelete = async (id) => {
    // var result = confirm("Are you sure you want to delete?");
    var result = true;
    if (result) {
      let res = await axiosService.delete(`/books/${id}`);
      if (res.status == 200) {
        navigate("/dashboard");
      }
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8" id="details">
      <h1 className="text-3xl font-semibold text-white-1000">{title}</h1>

      <div
        className="grid grid-cols-1 md:grid-cols-2  md:grid-cols-3 gap-6 mt-6"
        id="grid_background"
      >
        <div className="flex flex-col space-y-4">
          <img
            src={bookImg || defaultBookImgUrl}
            id="img-details"
            className="img-fluid w-64 rounded-start"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = defaultBookImgUrl;
            }}
          ></img>
        </div>
        <div className="flex flex-col space-y-4" id="text_area">
          <div>
            <h4 className="text-large font-semibold text-white-900">
              About Book:
            </h4>
            <p
              className="text-white-500"
              style={{
                height: "100px",
                overflow: "auto",
                scrollbarColor: "gold black",
              }}
            >
              {about}
            </p>
          </div>
          <div>
            <h4 className="text-large font-semibold text-white-900">ISBN:</h4>
            <p className="text-white-500">{isbn}</p>
          </div>
          <div>
            <h4 className="text-large font-semibold text-white-900">
              Published:
            </h4>
            <p className="text-white-500">{pub}</p>
          </div>
        </div>
        <div className="flex flex-col space-y-4" id="text_area">
          <div>
            <h4 className="text-large font-semibold text-white-900">Author:</h4>
            <p className="text-white-500">{name}</p>
          </div>
          <div>
            <h4 className="text-large font-semibold text-white-900">
              Author Bio:
            </h4>
            <p className="text-white-500">{bio}</p>
          </div>
          <div>
            <h4 className="text-large font-semibold text-white-900">
              Author DOB:
            </h4>
            <p className="text-white-500">{birth}</p>
          </div>
        </div>
      </div>
      <div className="mt-6" id="button_action">
        <Link
          to={`/dashboard/${data.id}/edit`}
          className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600 mr-4 inline-block"
        >
          Edit
        </Link>
        <button
          to="/dashboard"
          className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 mr-4 inline-block"
          onClick={() => {
            // Implement delete functionality
            handleDelete(data.id);
            console.log("Delete button clicked");
          }}
        >
          Delete
        </button>
        <Link
          to="/dashboard"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 mt-6 inline-block"
        >
          Back
        </Link>
      </div>
    </div>
  );
};

export default Details;
