import React, { useRef, useState } from "react";
// import Counter from './components/Counter2';
import Counter from "./components/Counter";
import "./styles/App.css";
import PostItem from "./components/PostItem";
import PostList from "./components/PoslList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";

function App() {
  const [likes, setLikes] = useState(1);
  const [value, setValue] = useState("text in input");

  function increment() {
    setLikes(likes + 1);
  }

  function decrement() {
    setLikes(likes - 1);
  }

  const [posts, setPosts] = useState([
    { id: 8, title: "JS", body: "Descriotion" },
    { id: 9, title: "JS1", body: "Descriotion" },
    { id: 10, title: "JS2", body: "Descriotion" },
  ]);

  const [posts2, setPosts2] = useState([
    { id: 8, title: "JSX________", body: "Descriotion" },
    { id: 9, title: "JSX1_______", body: "Descriotion" },
    { id: 10, title: "JSX2______", body: "Descriotion" },
  ]);

  // Функция работы сортировки выпадающего списка
  const [selectedSort, setSelectedSort] = useState("");
  const sortPosts = (sort) => {
    setSelectedSort(sort);
  };
  //Функция поиска поста
  const [searchQuary, setSearchQuary] = useState("");

  function getSourtedPosts() {
    if (selectedSort) {
      return [...posts].sort((a, b) =>
        a[selectedSort].localeCompare(b[selectedSort])
      );
    }
    return posts;
  }

  const sortedPosts = getSourtedPosts();

  // Функции создания нового поста
  // const [title, setTitle] = useState('');
  // const [body, setBody] = useState('');
  // const [post, setPost] = useState({title: '', body: ''});

  // const addNewPost = (e) => {
  //   e.preventDefault();

  // setPosts([...posts, {...post, id: Date.now()}]);
  //  setPost({title: '', body: ''})
  // };
  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };
  // получаем post из дочернего компонента
  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  return (
    <>
      <div>
        <Counter />
      </div>
      <div className="App">
        <Counter />
        <h1>{likes}</h1>
        <h1>{value}</h1>
        <input
          type="text"
          value={value}
          onChange={(event) => setValue(event.target.value)}
        />
        <button onClick={increment}>increment</button>
        <button onClick={decrement}>decrement</button>
      </div>
      <PostItem post={{ id: 1, title: "JS", body: "Descriotion" }} />
      <PostItem post={{ id: 2, title: "JS1", body: "Descriotion" }} />
      <PostItem post={{ id: 3, title: "JS2", body: "Descriotion" }} />
      <PostItem post={{ id: 4, title: "JS3", body: "Descriotion" }} />
      <PostItem post={{ id: 5, title: "JS4", body: "Descriotion" }} />

      <div>
        <MyInput
          placeholder="Поиск"
          value={searchQuary}
          onChange={(e) => setSearchQuary(e.target.value)}
        />
        <MySelect
          value={selectedSort}
          onChange={sortPosts}
          defaultValue="Сортировка"
          options={[
            { value: "title", name: "По названию" },
            { value: "body", name: "По описанию" },
          ]}
        />
      </div>
      <PostForm create={createPost} />
      {posts.length !== 0 ? (
        <PostList
          remove={removePost}
          posts={sortedPosts}
          title="List of posts №1"
        />
      ) : (
        <h1 style={{ textAlign: "center" }}>Posts is not find</h1>
      )}
    </>
  );
}

export default App;

////
