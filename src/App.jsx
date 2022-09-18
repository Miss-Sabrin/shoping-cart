import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Home from './pages/Home.jsx';

import 'bootstrap/dist/css/bootstrap.min.css';
import Cart from './components/cart';
import { CartProvider } from 'react-use-cart';
function App() {
  const [count, setCount] = useState(0)

  return (
   <div className="App">
   <CartProvider>

   <Home/>
 <Cart/>
   </CartProvider>
  
   </div>
  )
}

export default App
