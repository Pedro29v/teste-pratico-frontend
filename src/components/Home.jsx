import React, { useEffect, useState } from "react";
import { getPosts } from "../utils/axiosCalls.js";
import Posts from "./Posts.jsx";

function Home() {
  const [state, setState] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getPosts();
        setState(res);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return state?.map((e, i) => (
    <Posts key={i} id={e.id} title={e.title} body={e.body} />
  ));
}

export default Home;
