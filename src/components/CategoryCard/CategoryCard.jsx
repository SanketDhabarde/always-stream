import React from "react";
import { Link } from "react-router-dom";
import "./CategoryCard.css";

function CategoryCard({ imgSrc, category }) {
  return (
    <Link to="#" className="card btn-link category-card m-1">
      <div className="card-section">
        <img className="card-img img-responsive" src={imgSrc} alt={category} />
        <div className="card-header card-text-overlay p-1">
          <h3 className="card-heading">{category}</h3>
        </div>
      </div>
    </Link>
  );
}

export default CategoryCard;
