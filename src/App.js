import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {Home} from "./pages/Cliente/Home/index"
import {Produto} from "./pages/Cliente/Produto/index"
// import {Login} from "./pages/Lojista/Login/index"
// import {CadastroUsuario} from "./pages/Lojista/CadastroUsuario/index"
import {CadastroLoja} from "./pages/Lojista/CadastroLoja/index";

function App() {
  return (
      <BrowserRouter>
        <Routes>
            <Route index element={<CadastroLoja/>} />
            <Route path="Home" element={<Home />} />
            <Route path="produto" element={<Produto />} />
        </Routes>
      </BrowserRouter>  
  );
}

export default App;
