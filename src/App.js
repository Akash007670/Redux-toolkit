import "./App.css";
import AddPostForm from "./features/posts/AddPostForm";
// import Counter from "./features/counter/Counter";
import Posts from "./features/posts/Posts";

function App() {
  return (
    <div className="App">
      <AddPostForm />
      <Posts />
    </div>
  );
}

export default App;
