import React from "react";
import { useFilter } from "../../context";
import "./Chips.css";

function Chips({ title }) {
  const { filter, setFilter } = useFilter();
  return (
    <div
      onClick={() => setFilter(title)}
      className={`chip border-l center-div ${
        filter.toLowerCase() === title.toLowerCase() && "active"
      }`}
    >
      {title}
    </div>
  );
}

export default Chips;
