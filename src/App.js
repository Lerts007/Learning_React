import axios from "axios";
import React, { useMemo, useState } from "react";
import { usePosts } from "./components/hooks/usePosts";
import PostFilter from "./components/PostFilter";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyModel from "./components/UI/MyModal/MyModal";
import "./style/App.css";

function App() {
  const [posts, setPosts] = useState([]);

  const [filter, setFilter] = useState({
    sort: "",
    query: "",
  });

  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

  async function fetchPosts() {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    setPosts(response.data);
  }

  const [modal, setModal] = useState(false);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  return (
    <div className="App">
      <button onClick={fetchPosts}>Function</button>
      <MyButton style={{ marginTop: 30 }} onClick={() => setModal(true)}>
        Создать пост.
      </MyButton>
      <MyModel visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </MyModel>
      <hr style={{ margin: "15px 0" }} />
      <PostFilter filter={filter} setFilter={setFilter} />
      <PostList
        remove={removePost}
        posts={sortedAndSearchedPosts}
        title="Список постов 1"
      />
    </div>
  );
}

export default App;
