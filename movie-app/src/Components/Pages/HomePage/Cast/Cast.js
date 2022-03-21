import React, { useEffect, useState } from "react";

import axios from "axios";

export default function Cast({ movieId }) {
  const [cast, setCast] = useState({});

  useEffect(() => {
    fetchDetail();
  }, []);

  let api = `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=e106aa77a18cc7d63d4606b561bdda34&language=en-US&append_to_response=images&include_image_language=en,null`;

  const fetchDetail = async () => {
    await axios.get(api).then((res) => {
      setCast(res.data.cast);
    });
  };
  console.log(cast);
  return <div>Cast{movieId}</div>;
}
