import React, { useState } from "react";
import { getComments } from "../utils/axiosCalls.js";
import Comments from "./Comments.jsx";

function Posts({ id, title, body }) {
  const [comments, setComments] = useState();

  const handleClick = (id) => {
    console.log(`Hola ${id}`);

    const call = async () => {
      const resp = await getComments(id);

      setComments(resp);
    };

    call();
  };

  console.log(comments);

  return (
    <>
      <div
        className=" text-black mb-8 w-[30rem] h-[12rem] col-span-1 m-auto p-4 border-2 rounded-sm "
        onClick={() => handleClick(id)}
      >
        <p className="mb-2">
          <span className="font-bold text-[1.2em] ">{title}</span>
        </p>
        <span>{body}</span>
      </div>

      {comments &&
        comments.map((e, i) => (
          <Comments
            key={i}
            email={e.email}
            name={e.name}
            body={e.body}
            postId={e.postId}
          />
        ))}
    </>
  );
}

export default Posts;
