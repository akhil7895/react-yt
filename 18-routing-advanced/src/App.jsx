import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Product from './pages/Product'
import {Route,Routes} from 'react-router-dom'
import Men from './pages/Men'
import Women from './pages/Women'
import Kids from './pages/Kids'
import Courses from './pages/Courses'
import CourseDetail from './pages/CourseDetail'

const App = () => {
  return (
   <div className='h-screen bg-black text-white '>
    <Navbar />
    <Routes >
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      {/* <Route path="/product" element={<Product />} />
      <Route path="/product/men" element={<Men />} />
      <Route path="/product/women" element={<Women />} /> */}
// Nested Routing
        <Route path="/product" element={<Product />}>
 
          <Route path="men" element={<Men />} />/
          <Route path = "women" element={<Women />} />
          <Route path = "kids" element = {<Kids />} />

        </Route>
        <Route path='/courses' element={<Courses />} />
        <Route element={<CourseDetail  />} path='/courses/:kuchbhilikhdooo' />

      <Route path="*" element={<h2>404 Not Found</h2>} />
    </Routes>
    <Footer />

   </div>
  )
}

export default App
