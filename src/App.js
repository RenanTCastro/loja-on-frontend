import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import {
  Home,
  Produto,
  FinalizarCompra
} from "./pages/Cliente/index"

import {
  // SeusProdutos,
  // Login,
  // CadastroLoja,
  // CadastroUsuario,
  // Configuracoes,
  // GerenciarProduto
} from "./pages/Lojista/index"

function App() {
  return (
      <BrowserRouter>
        <Routes>
            <Route index element={<FinalizarCompra/>} />
            <Route path="Home" element={<Home />} />
            <Route path="produto" element={<Produto />} />
        </Routes>
      </BrowserRouter>  
  );
}

export default App;
