import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import Image from "../../components/Image/Image";
import Alert from "../../components/Alert/Alert";
import AlertContext from "../../contexts/alertContext";

const Trending = () => {
  const [trendingGIFs, setTrendingGIFs] = useState([]);
  const { setError } = useContext(AlertContext);

  useEffect(() => {
    axios
      .get(
        "http://api.giphy.com/v1/gifs/trending?api_key=b29g54U81w1GbkyNxo6Osae29OsTEwso&rating=g"
      )
      .then((response) => {
        setTrendingGIFs(response.data.data);
      })
      .catch((err) => {
        console.log(err);
        setError("An error occurred retrieving your GIFs.");
      });
  }, []);

  return (
    <div>
      <h1>This is a random GIF</h1>
      <Alert />
      {trendingGIFs.map((singleGIF) => (
        <Image imageURL={singleGIF?.images?.original?.url} key={singleGIF.id} />
      ))}
    </div>
  );
};

export default Trending;
