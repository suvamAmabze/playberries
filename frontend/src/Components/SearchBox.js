import React, { useState } from "react";

export default function SearchBox(props) {
  const [name, setName] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    props.history.push(`/search/name/${name}`);
  };

  return (
      <form onSubmit={submitHandler} className="searchBox">
        <div>
          <input
            type="text"
            name="q"
            id="q"
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter name"
          ></input>
          <button type="submit">
            <i className="fa fa-search"></i>
          </button>
        </div>
      </form>
  );
}
