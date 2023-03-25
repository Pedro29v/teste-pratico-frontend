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

  return (
    <div className="w-[90%] bg-secondary m-auto grid grid-cols-2 gap-4 ">
      {state?.map((e, i) => (
        <Posts key={i} id={e.id} title={e.title} body={e.body} />
      ))}
    </div>
  );
}

export default Home;
