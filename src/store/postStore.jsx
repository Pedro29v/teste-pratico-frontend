import { create } from "zustand";
import { getPosts } from "../utils/axiosCalls.js";

const response = await getPosts();

export const useStore = create(() => ({
  posts: response,
}));
