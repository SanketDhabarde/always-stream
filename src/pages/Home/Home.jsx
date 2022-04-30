import React from "react";
import { Link } from "react-router-dom";
import { CategoryCard, Footer } from "../../components";
import { useTitle } from "../../hooks";
import { CATEGORIES } from "../../consts";
import "./Home.css";
import { useFilter } from "../../context";

function Home() {
  useTitle("Home");
  const { setFilter } = useFilter();
  return (
    <div className="home">
      <div className="home-hero-section center-div">
        <section className="hero-disc center-div">
          <h1 className="text-center">Music to puts you in better mood</h1>
          <Link to="/explore" className="btn btn-primary btn-link" onClick={() => setFilter("all")}>
            Explore Music
          </Link>
        </section>
      </div>
      <h3 className="p-2">Categories</h3>
      <div className="home-categories px-2">
        {CATEGORIES.map(({ _id, img, category }) => (
          <CategoryCard key={_id} imgSrc={img} category={category} />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Home;
