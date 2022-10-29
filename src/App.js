import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import {
  Home,
  Produto,
  // FinalizarCompra
} from "./pages/Cliente/index"

import {
  SeusProdutos,
  Login,
  CadastroUsuario,
  CadastroLoja,
  Configuracoes,
  AdicionarProduto,
  GerenciarProduto
} from "./pages/Lojista/index"

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
            {/* Lojista routes */}
            <Route path="login" element={<Login />}/>
            <Route path="cadastro" element={<CadastroUsuario />}/>
            <Route path="cadastrarloja" element={<CadastroLoja />}/>
            <Route path="produtos" element={<SeusProdutos/>}/>
            <Route path="adicionarproduto" element={<AdicionarProduto/>}/>
            <Route path="gerenciarproduto" element={<GerenciarProduto/>}/>
            <Route path="editarperfil" element={<Configuracoes/>}/>

            {/* Cliente routes */}
            <Route index element={<Home/>} />
            <Route path="produto" element={<Produto/>}/>

        </Routes>
      </BrowserRouter>  
    </div>
  );
}

export default App;
