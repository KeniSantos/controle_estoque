import { LinhaCabecalho, TituloTabela } from "./styles";


export default function CabecalhoTabelaVenda() {
  return (
    <LinhaCabecalho>
      <TituloTabela>Nome</TituloTabela>
      <TituloTabela>Preço</TituloTabela>
      <TituloTabela>Quantidade</TituloTabela>
      <TituloTabela>Data da Venda</TituloTabela>
    </LinhaCabecalho>
  )
}