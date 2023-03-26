import React from "react";

function Comments({ body, email, name, title }) {
  return (
    <>
      <div className=" mb-4 p-4 w-[100%] text-[0.9em] md:text-[1em] md:w-[50rem]  ">
        <p>
          <span className="font-bold">Email:</span> {email}
        </p>
        <p>
          <span className="font-bold">Name:</span> {name}
        </p>
        <p> {body}</p>
      </div>
    </>
  );
}

export default Comments;
