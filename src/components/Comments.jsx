import React from "react";

function Comments({ body, email, name, title }) {
  return (
    <>
      <div>
        <div className=" mb-4 p-4 w-[50rem] ">
          <p>
            <span className="font-bold">Email:</span> {email}
          </p>
          <p>
            <span className="font-bold">Name:</span> {name}
          </p>
          <p> {body}</p>
        </div>
      </div>
    </>
  );
}

export default Comments;
