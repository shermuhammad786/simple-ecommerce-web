import './App.css'
import Header from './Containers/Header'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ProductDetails from './Containers/ProductDetails'
import ProductsList from './Containers/ProductsList'
function App() {

  return (
    <div className='App'>
      <Router>
        <Header />
        <Routes>
          <Route exact path='/' Component={ProductsList}></Route>
          <Route path='/product/:productId' exact Component={ProductDetails}></Route>
          <Route>404 not found!</Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App


// https://fakestoreapi.com/products/1