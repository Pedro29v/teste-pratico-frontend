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
      <div className="bg-orange-500 mb-8 " onClick={() => handleClick(id)}>
        <p>
          <h3>Title:</h3> {title}
        </p>
        <p>
          <h3>Post:</h3> {body}
        </p>
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
