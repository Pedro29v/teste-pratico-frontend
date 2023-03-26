import React, { useState } from "react";
import { getComments } from "../utils/axiosCalls.js";
import Comments from "./Comments.jsx";
import ReactModal from "react-modal";

function Posts({ id, title, body }) {
  const [comments, setComments] = useState();

  const [isOpen, setIsOpen] = useState(false);

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const handleClick = (id) => {
    setIsOpen(true);

    const call = async () => {
      const resp = await getComments(id);

      setComments(resp);
    };

    call();
  };

  return (
    <>
      <div
        className=" text-black p-2 mb-6 md:mb-8 md:w-[30rem] md:h-[12rem] md:col-span-1 md:m-auto md:p-4 md:border-2 rounded-sm cursor-pointer "
        onClick={() => handleClick(id)}
      >
        <p className="mb-2">
          <span className="font-bold text-[1em] lg:text-[1.2em] ">{title}</span>
        </p>
        <span className="text-[0.8em] md:text-[1em]">{body}</span>
      </div>

      <ReactModal
        isOpen={isOpen}
        onRequestClose={handleCloseModal}
        contentLabel="Ejemplo de ventana modal"
        className="flex flex-col overflow-auto items-center bg-dark opacity-80 
        w-[90%] h-[35rem] md:h-[30rem] m-auto mt-[5rem] text-white "
      >
        <button
          class="self-end ml-auto mr-4 mt-2 hover:text-secondary font-bold "
          onClick={handleCloseModal}
        >
          Close
        </button>

        <div className="font-bold text-[1em] md:text-[1.5em]  text-center mt-4  ">
          {title}
        </div>

        {comments &&
          comments.map((e, i) => (
            <Comments
              key={i}
              email={e.email}
              name={e.name}
              body={e.body}
              title={title}
            />
          ))}
      </ReactModal>
    </>
  );
}

export default Posts;
