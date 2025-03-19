// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.tsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App


// function App() {
//   return <h1>hello React</h1>
// }
// export default App

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

// import React, { useState, useEffect } from 'react';

// const Counter: React.FC = () => {
//   // Initialize the counter state with a number type
//   const [counter, setCounter] = useState<number>(0);

//   // useEffect to log the counter value when it updates
//   useEffect(() => {
//     console.log(`Counter updated: ${counter}`);
//   }, [counter]); // Only run the effect when the counter value changes

//   // useEffect to update the document title with the counter value
//   useEffect(() => {
//     document.title = `Counter: ${counter}`;
//   }, [counter]); // Update the title whenever counter changes

//   // Increment counter, with boundary checks
//   const increment = () => {
//     if (counter < 10) {
//       setCounter(counter + 1);
//     }
//   };

//   // Decrement counter, with boundary checks
//   const decrement = () => {
//     if (counter > 0) {
//       setCounter(counter - 1);
//     }
//   };

//   // Reset counter to 0
//   const reset = () => {
//     setCounter(0);
//   };

//   return (
//     <div>
//       <h1>Counter: {counter}</h1>
//       <button onClick={increment}>Increment</button>
//       <button onClick={decrement}>Decrement</button>
//       <button onClick={reset}>Reset</button>
//     </div>
//   );
// };

// export default Counter;

// import MovieList from './pages/Home';
// import Home from './pages/Home';

// function App = () => {
//   return (
//     <Provider store={store}>
//       <ThemeProvider theme={theme}>
//         <CssBaseline />
//         <Box>
//           <NavBar />

//         </Box>
//         <Box>
//           <MovieList />
//         </Box>
//         </ThemeProvider>
//     </Provider>
//   )
// }

// export default App;
//import React from 'react';
// import { ThemeProvider, CssBaseline, Box } from '@mui/material';
// import { Provider } from 'react-redux';
// import theme from './styles/theme';
// import Navbar from './components/Navbar';
// import { store } from './redux/store';

// // Pages
// //import Home from './pages/Home';
// //import { Movie } from '@mui/icons-material';
// import MovieList from './pages/Home';

// function App() {
//   return (
//     <Provider store={store}>
//       <ThemeProvider theme={theme}>
//         <CssBaseline />
//           <Navbar />
//           <Box sx={{ mt: 8 }}>
//             <MovieList/>
//           </Box>
//       </ThemeProvider>
//     </Provider>
//   );
// }

// export default App;

// import React from "react";
// import { Provider } from "react-redux";
// import store from "./redux/store";
// import MovieList from "./components/MovieList";

// const App: React.FC = () => {
//   return (
//     <Provider store={store}>
//       <div>
//         <h1>Movie App</h1>
//         <MovieList />
//       </div>
//     </Provider>
//   );
// };

// export default App;




//import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { ThemeProvider, CssBaseline, Box } from '@mui/material';
// import { Provider } from 'react-redux';
// import theme from './styles/theme';
// import Navbar from './components/Navbar';
// import store from './redux/store';
// import Home from './pages/Home';
// import Search from './pages/Search.tsx';

// function App() {
//   return (
//     <Provider store={store}>
//       <ThemeProvider theme={theme}>
//         <CssBaseline />
//         <Router>
//           <Navbar />
//           <Box sx={{ mt: 8 }}>
//             <Routes>
//               <Route path="/" element={<Home />} />
//               <Route path="/search" element={<Search />} />
//             </Routes>
//           </Box>
//         </Router>
//       </ThemeProvider>
//     </Provider>
//   );
// }

// export default App;



// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { Provider } from "react-redux";
// import store from "./redux/store";
// import Navbar from "./components/Navbar";
// import Home from "./pages/Home";
// import Search from "./pages/Search";

// const App: React.FC = () => {
//   return (
//     <Provider store={store}>
//       <Router>
//         <Navbar />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/search" element={<Search />} />
//         </Routes>
//       </Router>
//     </Provider>
//   );
// };

// export default App;




import { ThemeProvider, CssBaseline, Box } from '@mui/material';
import theme from './styles/theme';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import { Provider } from 'react-redux';
import  store  from './redux/store';
import { Route, Routes } from 'react-router-dom';
import Search from './pages/Search';
import { BrowserRouter } from 'react-router-dom'; 
import Watchlist from './pages/WatchList';

function App() {
  return (
    <Provider store={store}>   
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>  {/* Wrap with BrowserRouter */}
          <Navbar />
          <Box sx={{ mt: 2 }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/search" element={<Search />} />
              <Route path="/watchlist" element={<Watchlist />} />
            </Routes>
          </Box>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
