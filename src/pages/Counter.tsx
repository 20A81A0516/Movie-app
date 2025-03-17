// import React, { useState, useEffect } from "react";

// const Counter = () => {
//   const [count, setCount] = useState(0);

//   // Effect to update document title
//   useEffect(() => {
//     document.title = Counter: ${count};
//     console.log(Counter updated: ${count});
//   }, [count]);

//   // Increment counter (max 10)
//   const increment = () => {
//     if (count < 10) {
//       setCount(count + 1);
//     }
//   };

//   // Decrement counter (min 0)
//   const decrement = () => {
//     if (count > 0) {
//       setCount(count - 1);
//     }
//   };

//   // Reset counter to 0
//   const reset = () => {
//     setCount(0);
//   };

//   return (
//     <div style={{ textAlign: "center", marginTop: "50px" }}>
//       <h1>Counter App</h1>
//       <h2>{count}</h2>
//       <button onClick={decrement} disabled={count === 0}>-</button>
//       <button onClick={increment} disabled={count === 10}>+</button>
//       <button onClick={reset}>Reset</button>
//     </div>
//   );
// };

// export default Counter;