"use client";

import React, { useState } from "react";

function SimpleComponent() {
  const greeting = "Hallo, React! ";
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>{greeting}</h1>
      <button onClick={() => setCount(count + 1)}>Count: {count}</button>
    </>
  );
}
export default SimpleComponent;
