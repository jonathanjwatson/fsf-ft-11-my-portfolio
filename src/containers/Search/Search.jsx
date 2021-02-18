import React, { useContext, useEffect, useRef, useState } from "react";
import axios from "axios";
import Image from "../../components/Image/Image";
import AlertContext from "../../contexts/alertContext";
import Alert from "../../components/Alert/Alert";

const Search = () => {
  const [search, setSearch] = useState("");
  const [gifs, setGifs] = useState([]);
  const { setError } = useContext(AlertContext);

  const inputEl = useRef(null);

  useEffect(() => {
    inputEl.current.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (search) {
      setError("");
      axios
        .get(
          `https://api.giphy.com/v1/gifs/search?q=${search}&api_key=b29g54U81w1GbkyNxo6Osae29OsTEwso&rating=g&limit=10`
        )
        .then((response) => {
          console.log(response.data.data);
          setGifs(response.data.data);
          setSearch("");
          inputEl.current.focus(); 
        }).catch(err => {
            console.log(err);
            setError("An error occurred retrieving your GIFs. Please try again.")
        })
    } else {
      //TODO: Change this to alert context
      //   alert("Please enter a valid search term.");
      setError("Please enter a valid search term.");
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1 className="text-center">Search for a GIF!</h1>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <Alert />
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
                placeholder="Search Term"
                ref={inputEl}
              />
            </div>
            <div className="mb-3">
              <button className="btn btn-info">Search for GIFs!</button>
            </div>
          </form>
        </div>
      </div>
      <div className="row">
        <div className="col">
          {gifs.map((gif) => (
            <Image imageURL={gif?.images?.original?.url} key={gif.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Search;
