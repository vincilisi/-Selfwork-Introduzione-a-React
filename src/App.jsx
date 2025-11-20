import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Posts from './pages/Posts'
import Detail from './pages/Detail'
import Components from './pages/Components'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/posts/:id" element={<Detail />} />
        <Route path="/components" element={<Components />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
