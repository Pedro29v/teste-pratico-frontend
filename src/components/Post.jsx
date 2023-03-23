import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getPosts } from "../utils/axiosCalls.js";

function Post() {
  const { isLoading, data, isError, error } = useQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
  });

  if (isLoading) return <div>Cargando...</div>;
  else if (isError) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h3>Hello World</h3>
      {data.map((e) => (
        <div key={e.id} className="bg-red-700 mb-8 w-[62rem]">
          <p>{e.title}</p>
          <p>{e.body}</p>
          {console.log(e)}
        </div>
      ))}
    </div>
  );
}

export default Post;
