import { Home } from './components/Home';
import { Read } from './components/Read';
import { Route,Routes } from 'react-router-dom';
import './App.css';
import { Create } from './components/Create';
function App() {
  return (
   <>
     <Home/>
      <Routes>
       <Route path='/form' element={<Create/>}></Route> 
    <Route path="/read" element={<Read/>}></Route>
        </Routes>
     </>
  );
}

export default App;

