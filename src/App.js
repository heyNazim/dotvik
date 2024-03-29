import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Pages/Home';
import PageNotFound from './Pages/PageNotFound';

function App() {
  return (
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='*' element={<PageNotFound/>}/>
  </Routes>
  </BrowserRouter>
  );
}

export default App;
