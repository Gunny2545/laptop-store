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
          src="https://img.advice.co.th/images_nas/advice_activity/202302159659395554.jpg"
          alt="architecture"
        />
        <img
          src="https://cdn0.tnwcdn.com/wp-content/blogs.dir/1/files/2020/09/Snag_1abffcd6.png"
          alt="architecture"
        />
        <img
          src="https://www.nvidia.com/content/dam/en-zz/Solutions/ces-2023/40-series-laptops/geforce-rtx-40-series-laptops-og-1200x630.jpg"
          alt="architecture"
        />
        <img
          src="https://img.advice.co.th/images_nas/advice_activity/202211083378947624.jpg"
          alt="architecture"
        />
        <img
          src="https://www.appdisqus.com/wp-content/uploads/2022/09/2022-08-29-image-18-1600x1025.jpg.webp"
          alt="architecture"
        />
      </div>
      <ShowProduct />
    </MainLayout>
  );
};

export default Home;
