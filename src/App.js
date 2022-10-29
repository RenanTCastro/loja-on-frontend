import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import {
  Home,
  // Produto,
  // FinalizarCompra
} from "./pages/Cliente/index"

import {
  SeusProdutos,
  Login,
  CadastroUsuario,
  // CadastroLoja,
  Configuracoes,
  AdicionarProduto,
  GerenciarProduto
} from "./pages/Lojista/index"

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
            <Route index element={<Home/>} />
            <Route path="login" element={<Login />}/>
            <Route path="cadastro" element={<CadastroUsuario />} />
            <Route path="produtos" element={<SeusProdutos />} />
            <Route path="gerenciarproduto" element={<GerenciarProduto />} />
            <Route path="adicionarproduto" element={<AdicionarProduto />} />
            <Route path="editarperfil" element={<Configuracoes />} />
        </Routes>
      </BrowserRouter>  
    </div>
  );
}

export default App;
