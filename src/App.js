import './App.css';
import Cookies from 'js-cookie';

import { CartContextProvider } from "./hooks/CartContext";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import { ThemeProvider } from 'styled-components';

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
  const isAuthenticated = Cookies.get("token") ? true : false;
  const color = {color: !isAuthenticated ? '#659BEE' : Cookies.get("color")}
  
  return (
    <ThemeProvider theme={color}>
      <BrowserRouter>
        <CartContextProvider>
          <Routes>
              {/* Lojista routes */}
              <Route path="/login" element={<Login />}/>
              <Route path="/cadastro" element={<CadastroUsuario />}/>
              <Route path="/cadastrarloja" element={<CadastroLoja />}/>
              <Route path="/produtos" element={<SeusProdutos/>}/>
              <Route path="/adicionarproduto" element={<AdicionarProduto/>}/>
              <Route path="/gerenciarproduto" element={<GerenciarProduto/>}/>
              <Route path="/editarperfil" element={<Configuracoes/>}/>
              
              {/* Cliente routes */}
              <Route index element={<Home/>} />
              <Route path="/produto" element={<Produto/>}/>
          </Routes>
        </CartContextProvider>
      </BrowserRouter>  
    </ThemeProvider>
  );
}

export default App;
