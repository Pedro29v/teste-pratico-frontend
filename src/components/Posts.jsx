import React from "react";

function Posts({ id, title, body }) {
  console.log("Pedro");
  console.log(title);

  return (
    <div className="bg-orange-500 mb-8 ">
      <p>{title}</p>
      <p>{body}</p>
    </div>
  );
}

export default Posts;
