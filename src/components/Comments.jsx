import React from "react";

function Comments({ body, email, name, postId }) {
  console.log(postId);
  return (
    <div className="bg-blue-500 mb-4 p-4 ">
      <p>ID: {postId}</p>
      <p>Email: {email}</p>
      <p>Name: {name}</p>
      <p>Comments: {body}</p>
    </div>
  );
}

export default Comments;
