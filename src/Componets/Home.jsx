import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <>
      <Header />
      <Outlet />
      {/* <div className="home">
        <img src="https://images.pexels.com/photos/112460/pexels-photo-112460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
      </div> */}
    </>
  );
};

export default Home;
