import React, { useState } from "react";

function Counter() {
  const [like, setLike] = useState(0);

  function increment() {
    setLike(like + 1);
  }

  function decremant() {
    setLike(like - 1);
  }
  return (
    <div>
      <h1>{like}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decremant}>Decremant</button>
    </div>
  );
}

export default Counter;
