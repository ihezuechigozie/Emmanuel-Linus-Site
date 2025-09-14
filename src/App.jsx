
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Contact from './Components/Contact'
import Blog from './Pages/Blog'
import NotFound from './NotFound'
import Ventures from './Components/Ventures'


function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='*' element={<NotFound />} />
        <Route path='/ventures' element={<Ventures />} />
      </Routes>
    </>
  )
}

export default App
