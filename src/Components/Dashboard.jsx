import React, { useEffect, useState } from "react";
import Card from "./Card";
import { axiosService } from "../Utilities/Apiservices";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState([]);

  const getData = async () => {
    try {
      const res = await axiosService.get("/books");
      if (res.status === 200) {
        setUser(res.data);
        setLoading(false);
        console.log(user);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="row py-4 mx-2 justify-center">
      {loading ? (
        <>
          {/* loading image/gif */}
          <img
            className="w-52 justify-center flex"
            src="https://media.tenor.com/On7kvXhzml4AAAAj/loading-gif.gif"
          />
          <h1 className="justify-center flex font-bold text-lg">
            Loading ...!
          </h1>
        </>
      ) : user.length === 0 ? (
        <>
          <h1
            className="justify-center mt-5 flex font-medium"
            style={{ fontSize: "30px" }}
          >
            Nothing to show
          </h1>
          <div className="tg">
            <button className="btn btn-primary m-3">
              <Link to={`/create`}>Create</Link>
            </button>
          </div>
        </>
      ) : (
        user.map((data) => <Card key={data.id} data={data} getData={getData} />)
      )}
    </div>
  );
};

export default Dashboard;
