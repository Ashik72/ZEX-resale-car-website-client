import React from "react";
import { Link } from "react-router-dom";
import slider1 from "../../assets/slider1.jpg";
import slider2 from "../../assets/slider2.jpg";
import slider3 from "../../assets/slider3.jpeg";

const Banner = () => {
  return (
    <div className="carousel w-full h-screen">
      <div id="slide1" className="carousel-item relative w-full">
        <img alt="" src={slider1} className="w-full" />

        <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-1/4">
          <h1 className="text-6xl font-bold text-white">
            Find your next car
            <br />
            With us
          </h1>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 w-2/5 left-24 top-1/2">
          <p className="text-xl text-white">
            We're your one-stop shop for buying and selling your car. Get
            matched to your perfect car, or sell one swiftly.
          </p>
        </div>
        <div className="absolute flex justify-start transform -translate-y-1/2 w-2/5 left-24 top-3/4">
          <button className="btn btn-success mr-5">
            <Link to="/services">Explore Now</Link>
          </button>
          <button className="btn btn-outline btn-success">
            <Link to="/login">Login</Link>
          </button>
        </div>
        {/* ----- */}
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <Link href="#slide3" className="btn btn-circle">
            ❮
          </Link>
          <Link href="#slide2" className="btn btn-circle">
            ❯
          </Link>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img alt="" src={slider2} className="w-full" />
        {/* -------- */}
        <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-1/4">
          <h1 className="text-6xl font-bold text-white">
            Find your next car
            <br />
            With us
          </h1>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 w-2/5 left-24 top-1/2">
          <p className="text-xl text-white">
            We're your one-stop shop for buying and selling your car. Get
            matched to your perfect car, or sell one swiftly.
          </p>
        </div>
        <div className="absolute flex justify-start transform -translate-y-1/2 w-2/5 left-24 top-3/4">
          <button className="btn btn-success mr-5">
            <Link to="/services">Explore Now</Link>
          </button>
          <button className="btn btn-outline btn-success">
            <Link to="/login">Login</Link>
          </button>
        </div>
        {/* ----- */}
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <Link href="#slide1" className="btn btn-circle">
            ❮
          </Link>
          <Link href="#slide3" className="btn btn-circle">
            ❯
          </Link>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img alt="" src={slider3} className="w-full" />
        {/* -------- */}
        <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-1/4">
          <h1 className="text-6xl font-bold text-white">
            Find your next car
            <br />
            With us
          </h1>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 w-2/5 left-24 top-1/2">
          <p className="text-xl text-white">
            We're your one-stop shop for buying and selling your car. Get
            matched to your perfect car, or sell one swiftly.
          </p>
        </div>
        <div className="absolute flex justify-start transform -translate-y-1/2 w-2/5 left-24 top-3/4">
          <button className="btn btn-success mr-5">
            <Link to="/services">Explore Now</Link>
          </button>
          <button className="btn btn-outline btn-success">
            <Link to="/login">Login</Link>
          </button>
        </div>
        {/* ----- */}
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <Link href="#slide2" className="btn btn-circle">
            ❮
          </Link>
          <Link href="#slide1" className="btn btn-circle">
            ❯
          </Link>
        </div>
      </div>
      {/* <div id="slide4" className="carousel-item relative w-full">
        <img
          alt=""
          src="https://placeimg.com/800/200/arch"
          className="w-full"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <Link href="#slide3" className="btn btn-circle">
            ❮
          </Link>
          <Link href="#slide1" className="btn btn-circle">
            ❯
          </Link>
        </div>
      </div> */}
    </div>
  );
};

export default Banner;
