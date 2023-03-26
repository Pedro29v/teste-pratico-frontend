import axios from "axios";

const postAPI = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

export const getPosts = async () => {
  const response = await postAPI.get("/posts");

  return response.data;
};

export const getComments = async (id) => {
  const res = await postAPI.get(`/posts/${id}/comments`);

  return res.data;
};

export const getUser = async (id) => {
  const res = await postAPI.get(`/users/${id}`);

  return res.data;
};

export const handleClick = (
  id,
  isOpen,
  setIsOpen,
  setComments,
  setuser,
  userId
) => {
  setIsOpen(!isOpen);

  if (id) {
    const call = async () => {
      const resp = await getComments(id);
      const user = await getUser(userId);

      setComments(resp);
      setuser(user);
    };

    call();
  }
};
