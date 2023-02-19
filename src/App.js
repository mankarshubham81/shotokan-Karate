import React from 'react';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Home from './components/Home/Home';
import Header from './components/Home/Layout/Header/Header';

// import {
//   ChakraProvider,
//   Box,
//   Text,
//   Link,
//   VStack,
//   Code,
//   Grid,
//   theme,
// } from '@chakra-ui/react';
// import { ColorModeSwitcher } from './ColorModeSwitcher';

function App() {
  return (
      <Router>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
        </Routes>

      </Router>
  );
}

export default App;
