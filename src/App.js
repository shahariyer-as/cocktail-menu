import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import SingleProduct from './Pages/Products/SingleProducts/SingleProduct';


function App() {
  return (
    <div className="App">
     <BrowserRouter>
<Routes>
  <Route path="home" element={<Home/>}></Route>
  <Route path="sp/:spId" element={<SingleProduct/>}></Route>
</Routes>

</BrowserRouter>
    </div>
  );
}

export default App;
