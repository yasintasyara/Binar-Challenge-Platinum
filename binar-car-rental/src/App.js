import logo from './logo.svg';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Home from './Pages/Home';
import NotFound from './Pages/NotFound';
import Car from './Pages/Car';
import CarDetail from './Pages/CarDetail';
import { BrowserRouter, Routes, Route, link} from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/car' element={<Car />} />
        <Route path='/car/:id' element={<CarDetail />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;