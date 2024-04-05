import React from "react";
import { BiShoppingBag } from "react-icons/bi";
import { Link } from "react-router-dom";
import "../../pages/Home/Featureproduct.css";
import "../../pages/Home/Home.css";
const Banner = () => {
  return (
    <>
      <div className="container">
        <div class="gallery">
          <div style={{ position: "relative", cursor: "pointer" }}>
            <Link to="/product/65df3fcbe6cd66058a7f232b">
              <img
                style={{ position: "absolute" }}
                src="/assets/banner/p1.jpg"
                alt=""
                height="100%"
                width="100%"
              />
            </Link>
          </div>
          <div style={{ position: "relative" }}>
            <Link to={`/product/65df3dace6cd66058a7f2304`}>
              <img
                style={{ position: "absolute" }}
                src="/assets/banner/p2.jpg"
                alt=""
                height="100%"
                width="100%"
              />
            </Link>
          </div>
          <div style={{ position: "relative" }}>
            <img
              style={{ position: "absolute" }}
              src="/assets/banner/HEROecom2.png"
              alt=""
              height="100%"
              width="100%"
            />
          </div>
          <div style={{ position: "relative" }}>
            <Link to="/product/65df3d7fe6cd66058a7f22fe">
              <img
                style={{ position: "absolute" }}
                src="/assets/banner/p3.jpg"
                alt=""
                height="100%"
                width="100%"
              />
            </Link>
          </div>
          <div style={{ position: "relative" }}>
            <Link to="/product/65df3ff0e6cd66058a7f2333">
              <img
                style={{ position: "absolute" }}
                src="/assets/banner/p4.jpg"
                alt=""
                height="100%"
                width="100%"
              />
            </Link>
          </div>
          <div style={{ position: "relative" }}>
            <Link to="/product/65df3ff0e6cd66058a7f2333">
              <img
                style={{ position: "absolute" }}
                src="/assets/banner/p4.jpg"
                alt=""
                height="100%"
                width="100%"
              />
            </Link>
          </div>
          <div style={{ position: "relative" }}>
            <img
              style={{ position: "absolute" }}
              src="/assets/banner/HEROecom.jpg"
              alt=""
              height="100%"
              width="100%"
            />
          </div>
          <div style={{ position: "relative" }}>
            <Link to="/product/65df3ff0e6cd66058a7f2333">
              <img
                style={{ position: "absolute" }}
                src="/assets/banner/p4.jpg"
                alt=""
                height="100%"
                width="100%"
              />
            </Link>
          </div>
          <div style={{ position: "relative" }}>
            <Link to="/product/63f1ed8901836094cedc6cc8">
              <img
                style={{ position: "absolute" }}
                src="/assets/banner/HEROecom7.png" // bat
                alt=""
                height="100%"
                width="100%"
              />
            </Link>
          </div>
        </div>
      </div>

    </>
  );
};

export default Banner;
