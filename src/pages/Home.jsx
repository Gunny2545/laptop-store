import React from "react";
import MainLayout from "../layouts/MainLayout";
import ShowProduct from "./ShowProduct";
import "../pages/pagecss/home.css";

const Home = () => {
  return (
    <MainLayout>
      <div className="image-grid">
        <img
          className="image-grid-col-2 image-grid-row-2"
          src="https://i.pinimg.com/564x/52/05/e4/5205e44a326c509a7e20b1baefbc7aed.jpg"
          alt="architecture"
        />
        <img
          src="https://i.pinimg.com/564x/52/05/e4/5205e44a326c509a7e20b1baefbc7aed.jpg"
          alt="architecture"
        />
        <img
          src="https://i.pinimg.com/564x/52/05/e4/5205e44a326c509a7e20b1baefbc7aed.jpg"
          alt="architecture"
        />
        <img
          src="https://i.pinimg.com/564x/52/05/e4/5205e44a326c509a7e20b1baefbc7aed.jpg"
          alt="architecture"
        />
        <img
          src="https://i.pinimg.com/564x/52/05/e4/5205e44a326c509a7e20b1baefbc7aed.jpg"
          alt="architecture"
        />
      </div>
      <ShowProduct />
    </MainLayout>
  );
};

export default Home;
