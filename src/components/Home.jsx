import Posts from "./Posts.jsx";
import { useStore } from "../store/postStore";

function Home() {
  const statePost = useStore((state) => state.posts);

  return (
    <div className="w-[90%]  m-auto grid grid-cols-2 gap-4 ">
      {statePost?.map((e, i) => (
        <Posts key={i} id={e.id} title={e.title} body={e.body} />
      ))}
    </div>
  );
}

export default Home;
