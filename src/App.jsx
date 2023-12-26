import React from 'react';
import TextInput from './components/TextInput';
import { ThemeProvider } from './components/ThemeProvider';
import Header from './components/Header';
import Content from './components/Content';


// import React from 'react';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link,
// } from 'react-router-dom';
// import Home from './components/Home';
// import About from './components/About';
// import Contact from './components/Contact';

// const NotFound = () => {
//   return <h2>404 Not Found</h2>;
// };

// const App = () => {
//   return (
//     <Router>
//       <div>
//         <nav>
//           <ul>
//             <li>
//               <Link to="/">Home</Link>
//             </li>
//             <li>
//               <Link to="/about">About</Link>
//             </li>
//             <li>
//               <Link to="/contact">Contact</Link>
//             </li>
//           </ul>
//         </nav>

//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/contact" element={<Contact />} />
//           <Route path="*" element={<NotFound />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// };

// export default App;






function App() {
  return (
    <div className="App">
      <TextInput />
      <ThemeProvider>
        <Header />
        <Content />
      
      </ThemeProvider>
    </div>
  );
}

export default App;
