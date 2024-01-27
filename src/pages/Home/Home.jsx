import React from "react";
import { Link } from "react-router-dom";
import { CategoryCard, Footer, Spinner } from "../../components";
import { useFetch, useTitle } from "../../hooks";
import "./Home.css";
import { useFilter } from "../../context";
import { getBaseUrl } from "../../utils";

function Home() {
  useTitle("Home");
  const { setFilter } = useFilter();
  const [{ data, isLoading }] = useFetch(`${getBaseUrl()}/api/categories`);

  return (
    <div className="home">
      <div className="home-hero-section center-div">
        <section className="hero-disc center-div">
          <h1 className="text-center">Music to puts you in better mood</h1>
          <Link
            to="/explore"
            className="btn btn-primary btn-link"
            onClick={() => setFilter("All")}
          >
            Explore Music
          </Link>
        </section>
      </div>
      <h3 className="p-2">Categories</h3>
      <div className="home-categories px-2">
        {isLoading ? (
          <Spinner />
        ) : (
          data?.categories?.map(({ _id, img, name }) => (
            <CategoryCard key={_id} imgSrc={img} category={name} />
          ))
        )}
      </div>
      <Footer />
    </div>
  );
}

export default Home;
