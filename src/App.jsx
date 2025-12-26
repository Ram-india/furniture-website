
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/common/Navbar'
import TopBar from './components/common/TopBar'
import Home from './pages/Home'
import Testimonials from './components/sliders/Testimonials'
import Footer from './components/common/Footer'
import About from './pages/About'
import Privacypolicy from './pages/Privacypolicy'
import Terms from './pages/Terms'
import Blogs from './pages/Blogs'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'
import BlogDetails from './pages/BlogDetail'




function App() {


  return (
  <>
  <TopBar/>
  <Navbar/>
  <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/blog' element={<Blogs/>}/>
      <Route path='/blog/:slug' element={<BlogDetails/>}/>
      <Route path='/gallery' element={<Gallery/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/privacy-policy' element={<Privacypolicy/>}/>
      <Route path='/terms' element={ <Terms/>}/>
  </Routes>
  <Testimonials/>
   <Footer/>
  </>
  )
}

export default App
