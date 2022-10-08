import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {Home} from "./pages/Cliente/Home/index"

function App() {
  return (
      <BrowserRouter>
        <Routes>
            <Route index element={<Home />} />
            {/* <Route path="lojaon" element={<Home />} /> */}
        </Routes>
      </BrowserRouter>  
  );
}

export default App;
