import {Container, Cabecalho, TextoLink, Lista} from "./styles";
import {Outlet} from "react-router-dom";

export default function Header() {
  return (
    <Container>
      <Cabecalho>
        <h2>Estoque</h2>
        <Lista>
          <li><TextoLink to="/">Cadastrar</TextoLink></li>
          <li><TextoLink to="/vendas">Vendas</TextoLink></li>
        </Lista>
      </Cabecalho>
      <Outlet />
    </Container>
  )
}