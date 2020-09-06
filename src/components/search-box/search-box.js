import React, { useState } from "react";
import "./search-box.css";

export const SearchBox = ({ placeholder, handleChange }) => {
  const [glow, setGlow] = useState(false);

  return (
    <input
      className={`search ${glow && `search__enabled`}`}
      type="search"
      placeholder={placeholder}
      onChange={handleChange}
      onClick={() => setGlow(true)}
    />
  );
};
