import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/departamentos' element={<p>listagem</p>} />
        <Route path='/departamentos/new' element={<p>new</p>} />
        <Route path='/departamentos/edit/:id' element={<p>id</p>} />
        <Route path='*' element={<p>notFound</p>} />


      </Routes>
    </BrowserRouter>
  )
}

export default App