import React from "react";
import { Link } from "react-router-dom";
import { useFilter } from "../../context";
import "./CategoryCard.css";

function CategoryCard({ imgSrc, category }) {
  const { setFilter } = useFilter();

  return (
    <div className="card category-card m-1" onClick={() => setFilter(category)}>
      <Link to="/explore" className="btn-link">
        <div className="card-section">
          <img
            className="card-img img-responsive"
            src={imgSrc}
            alt={category}
          />
          <div className="card-header card-text-overlay p-1">
            <h3 className="card-heading">{category}</h3>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default CategoryCard;
