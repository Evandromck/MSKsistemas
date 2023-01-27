import { Routes, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import { Store } from './pages/Store'
import { Navbar } from './components/Navbar'
import { ShoppingCartProvider } from './context/ShoppingCartContext'

function App() {
  return (
    <ShoppingCartProvider>
      <Navbar />
      <Container className='mb-4'>
        <Routes>
          <Route path='/Store' element={<Store />} />
          {/* <Route path='/Home' element={<Home />} /> */}          
          {/* <Route path='/about' element={<About />} /> */}
        </Routes>
      </Container>
    </ShoppingCartProvider>
  )
}

export default App