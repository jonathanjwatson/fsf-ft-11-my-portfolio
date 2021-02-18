import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import Image from "../../components/Image/Image";
import Alert from "../../components/Alert/Alert";
import AlertContext from "../../contexts/alertContext";

const Random = () => {
  const [random, setRandom] = useState({});
  const { setError } = useContext(AlertContext);

  useEffect(() => {
    axios
      .get(
        "https://api.giphy.com/v1/gifs/random?api_key=b29g54U81w1GbkyNxo6Osae29OsTEwso&rating=g"
      )
      .then((response) => {
        console.log(response.data.data);
        setRandom(response.data.data);
      })
      .catch((err) => {
        console.log(err);
        setError("An error occurred retrieving your GIF.");
      });
  }, []);

  return (
    <div>
      <h1>This is a random GIF</h1>
      <Alert />
      <Image imageURL={random?.images?.original?.url} key={random.id} />
    </div>
  );
};

export default Random;
