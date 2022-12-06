import React from "react";
import { Link } from "react-router-dom";

const CategoriesCard = ({ categorie }) => {
  const { _id, title } = categorie;

  const handleCategory = () => {};

  return (
    <>
      <div onClick={handleCategory} className="card bg-base-100 shadow-xl">
        <Link to={`/categorie/${_id}`}>
          <div className="card-body items-center text-center">
            <h2 className="card-title">{title}</h2>
          </div>
        </Link>
      </div>
    </>
  );
};

export default CategoriesCard;
