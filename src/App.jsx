
import './App.css'
import { Outlet } from 'react-router-dom'
import Footer from './Component/Home/Footer'
import Navbar from './Component/Home/Navbar'


function App() {


  return (
    <main className=' '>
      <Navbar></Navbar>
     

      <Outlet></Outlet>

      <Footer></Footer>


    </main>
  )
}

export default App
