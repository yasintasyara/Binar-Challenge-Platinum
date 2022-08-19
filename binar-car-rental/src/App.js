import logo from './logo.svg';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Home from './Pages/Home';
import NotFound from './Pages/NotFound';
import Car from './Pages/Car';
import CarDetail from './Pages/CarDetail';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Search from './Pages/Search'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'>
          <Route index element={<Home />} />
          <Route path='car'>
            <Route index element={<Car />} />
            <Route path='search' element={<Search />} />
            <Route path=':id' element={<CarDetail />} />
          </Route>
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;