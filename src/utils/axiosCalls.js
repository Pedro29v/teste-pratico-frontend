import axios from "axios";

const postAPI = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

export const getPosts = async () => {
  const response = await postAPI.get("/posts");

  console.log(response.data);

  return response.data;
};

export const getComments = async (id) => {
  console.log(`estoy en la funcion ${id}`);
  const res = await postAPI.get(`/posts/${id}/comments`);

  return res.data;
};
