import React from "react";

const PostItem = (props) => {
    console.log(props);
    
  return (
    <>
      {/* ! POST */}
      <div className="post">
        <div className="post__content">
          <strong>1. JavaScript and React: Why You Need Both</strong>
          <div>
            JavaScript is the core language of the web—it lets you add logic,
            handle user actions, work with data, and control what happens in the
            browser. React is a library built on top of JavaScript that helps
            you build user interfaces faster by organizing your app into
            reusable components and keeping the screen in sync with your data.
            You need both because React doesn’t replace JavaScript—it uses it.
            The better your JavaScript fundamentals variables, functions,
            arrays, objects, async code, the easier it is to understand React
            concepts like components, props, state, hooks, and API requests. In
            short: JavaScript gives you the foundation, and React gives you a
            powerful, structured way to build modern interfaces on top of it.
          </div>
        </div>
        <div className="post__btns">
          <button>Delete </button>
        </div>
      </div>
    </>
  );
};

export default PostItem;