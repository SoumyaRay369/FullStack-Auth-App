import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Home } from './components/Home'
import { Login } from './components/Login'
import { Signup } from './components/Signup'
import { Contribute } from './components/Contribute'
const App = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/Login' element={<Login></Login>}></Route>
        <Route path='/Signup' element={<Signup></Signup>}></Route>
        <Route path='/Contribute' element={<Contribute></Contribute>}></Route>
      </Routes>
    </BrowserRouter>
      
     
    </>
  )
}

export default App