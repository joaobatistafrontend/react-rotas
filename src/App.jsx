import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './componentes/Home'
import ProdutoDetalhado from './componentes/ProdutoDetalhado'

function App() {

  return (
    <BrowserRouter>
      <Routes>

        <Route path='/' element={<Home/>}/>
        {/* rota dinamica☻ */}
        <Route path='/produto/:id' element={<ProdutoDetalhado/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
