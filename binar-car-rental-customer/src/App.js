import logo from './logo.svg';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Home from './Pages/Home';
import NotFound from './Pages/NotFound';
import Car from './Pages/Car';
import CarDetail from './Pages/CarDetail';
import Payment from './Pages/Payment';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Search from './Pages/Search'
import Login from './Pages/Login';
import Signup from './Pages/Signup';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'>
          <Route index element={<Home />} />
          <Route path='car'>
            <Route index element={<Car />} />
            <Route path=':id' element={<CarDetail />} />
            <Route path='payment' element={<Payment/>}/>
          </Route>
          <Route path='search' element={<Search />} />
          <Route path='payment' element={<Payment/>}/>
          <Route path='login' element={<Login />} />
          <Route path='signup' element={<Signup />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;