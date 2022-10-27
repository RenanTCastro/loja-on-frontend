import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import {Menu} from "./components/Menu/index"

import {
  Home,
  Produto,
  FinalizarCompra
} from "./pages/Cliente/index"

import {
  // SeusProdutos,
  Login,
  // CadastroLoja,
  // CadastroUsuario,
  // Configuracoes,
  // GerenciarProduto
} from "./pages/Lojista/index"

function App() {
  return (
    <div>
      <Menu/>
      <BrowserRouter>
        <Routes>
            <Route index element={<Home/>} />
            <Route path="login" element={<Login />} />
            <Route path="produto" element={<Produto />} />
        </Routes>
      </BrowserRouter>  
    </div>
  );
}

export default App;
