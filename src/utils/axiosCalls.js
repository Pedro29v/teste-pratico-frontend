import axios from "axios";

const postAPI = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

export const getPosts = async () => {
  const response = await postAPI.get("/posts");

  return response.data;
};
