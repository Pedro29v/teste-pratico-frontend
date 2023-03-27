import { create } from "zustand";
import { getPosts } from "../utils/axiosCalls.js";

export const useStore = create((set) => ({
  posts: [],
  async fetchPosts() {
    const response = await getPosts();

    set({ posts: response });
  },
}));
