import "./App.css";
import { getPosts } from "./utils/axiosCalls.js";

function App() {
  const call = async () => {
    let resp = await getPosts();
    console.log(resp);
  };

  call();

  return (
    <div className="App">
      <h1 className="text-3xl font-bold underline text-red-500">
        Hello world!
      </h1>
    </div>
  );
}

export default App;
