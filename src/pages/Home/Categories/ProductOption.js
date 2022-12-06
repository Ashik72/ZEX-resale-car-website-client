import React, { useContext } from "react";
import { GoVerified } from "react-icons/go";
import { FaUserCircle } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { FcOvertime } from "react-icons/fc";
import toast from "react-hot-toast";
import { AuthContext } from "../../../contexts/AuthProvider";

const ProductOption = ({ product, data, setModelProduct }) => {
  const { user } = useContext(AuthContext);

  const {
    img,
    location,
    originalPrice,
    title,
    resalePrice,
    used,
    date,
    author,
  } = product;

  const handleWishlist = () => {
    const wishlist = {
      img,
      title,
      email: user?.email,
      author,
      resalePrice,
    };

    fetch("https://resale-2rjgsfjco-ashik72.vercel.app/wishlist", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(wishlist),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          toast.success(`${title} Added Dashboard Wishlist`);
        } else {
          toast.error(data.message);
        }
      });

    console.log(wishlist);
  };

  return (
    // <div className="card card-compact bg-base-100 shadow-xl m-10">
    <div className="card card-compact lg:card-side bg-base-100 shadow-xl">
      <figure className="flex-1 w-96 ">
        <img className="w-96 h-60 rounded-lg" src={img} alt="Shoes" />
      </figure>
      <div className="card-body flex-3">
        <h2 className="card-title">{title}</h2>
        <p className="font-bold">
          <MdLocationOn className="inline-block text-pink-600"></MdLocationOn>{" "}
          {location}
        </p>

        <hr></hr>
        <div className="">
          <span className="text-base font-semibold">Resale Price: </span>{" "}
          <span className="text-base italic">{resalePrice}</span>
          <div className="ml-5 badge badge-lg">
            <span className="text-sm ">Original Price: </span>{" "}
            <span className="text-sm italic ml-1">{originalPrice}</span>
          </div>
        </div>
        <div className="flex justify-between">
          <p>Used : {used}</p>
          <p>
            <FcOvertime className="text-blue-600 inline-block"></FcOvertime>{" "}
            {date.slice(0, 10)}
          </p>
        </div>
        <div className="card-actions justify-end">
          <label
            onClick={handleWishlist}
            htmlFor="booking-modal"
            className="btn btn-outline btn-error"
          >
            WishList
          </label>
          <label
            onClick={() => setModelProduct(product)}
            htmlFor="booking-modal"
            className="btn btn-primary"
          >
            Book Now
          </label>
        </div>
        <hr></hr>
        <div className="flex justify-between my-1">
          <p>
            <FaUserCircle className="inline-block"></FaUserCircle> {author.name}
          </p>
          {author.varify && (
            <p>
              <GoVerified className="inline-block text-blue-600"></GoVerified>{" "}
              {author.varify}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductOption;
