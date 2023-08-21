import {BrowserRouter, Routes, Route} from "react-router-dom";
import Header from "./pages/Header";
import CadastroProdutos from "./pages/CadastroProdutos";
import Vendas from "./pages/Vendas";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<CadastroProdutos />}/>
          <Route path="/vendas" element={<Vendas />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;