import React, { useState } from "react";
import "./styles/App.css";
// import Counter from "./components/Counter";
// import ClassCounter from "./components/ClassCounter";
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";

function App() {
  const [post, setPosts] = useState([
    {
      id: 1,
      title: "JavaScript and React: Why You Need Both 1",
      body: "JavaScript is the core language of the web—it lets you add logic, handle user actions, work with data, and control what happens in the browser. React is a library built on top of JavaScript that helps you build user interfaces faster by organizing your app into reusable components and keeping the screen in sync with your data. You need both because React doesn’t replace JavaScript—it uses it. The better your JavaScript fundamentals variables, functions, arrays, objects, async code, the easier it is to understand React concepts like components, props, state, hooks, and API requests. In short: JavaScript gives you the foundation, and React gives you a powerful, structured way to build modern interfaces on top of it.",
    },
    {
      id: 2,
      title: "JavaScript and React: Why You Need Both 2",
      body: "JavaScript is the core language of the web—it lets you add logic, handle user actions, work with data, and control what happens in the browser. React is a library built on top of JavaScript that helps you build user interfaces faster by organizing your app into reusable components and keeping the screen in sync with your data. You need both because React doesn’t replace JavaScript—it uses it. The better your JavaScript fundamentals variables, functions, arrays, objects, async code, the easier it is to understand React concepts like components, props, state, hooks, and API requests. In short: JavaScript gives you the foundation, and React gives you a powerful, structured way to build modern interfaces on top of it.",
    },
    {
      id: 3,
      title: "JavaScript and React: Why You Need Both 3",
      body: "JavaScript is the core language of the web—it lets you add logic, handle user actions, work with data, and control what happens in the browser. React is a library built on top of JavaScript that helps you build user interfaces faster by organizing your app into reusable components and keeping the screen in sync with your data. You need both because React doesn’t replace JavaScript—it uses it. The better your JavaScript fundamentals variables, functions, arrays, objects, async code, the easier it is to understand React concepts like components, props, state, hooks, and API requests. In short: JavaScript gives you the foundation, and React gives you a powerful, structured way to build modern interfaces on top of it.",
    },
    {
      id: 4,
      title: "JavaScript and React: Why You Need Both 4",
      body: "JavaScript is the core language of the web—it lets you add logic, handle user actions, work with data, and control what happens in the browser. React is a library built on top of JavaScript that helps you build user interfaces faster by organizing your app into reusable components and keeping the screen in sync with your data. You need both because React doesn’t replace JavaScript—it uses it. The better your JavaScript fundamentals variables, functions, arrays, objects, async code, the easier it is to understand React concepts like components, props, state, hooks, and API requests. In short: JavaScript gives you the foundation, and React gives you a powerful, structured way to build modern interfaces on top of it.",
    },
  ]);
  return (
    <div className="App">
      <form>
        <input type="" placeholder="Name of Post"/>
        <input type="" placeholder="Description of Post"/>
        <MyButton>Create a post</MyButton>
      </form>
      <PostList post={post} title="List of the posts for Frontend"/>
    </div>
  );
}

export default App;
