import {LinhaCabecalho, TituloTabela} from "./styles";

interface CabecalhoTabelaProps {
  requireAcao: boolean,
}

export default function CabecalhoTabela({requireAcao}: CabecalhoTabelaProps) {
  return (
    <LinhaCabecalho>
      <TituloTabela>Nome</TituloTabela>
      <TituloTabela>Preço</TituloTabela>
      <TituloTabela>Preço De Venda</TituloTabela>
      <TituloTabela>Quantidade</TituloTabela>
      <TituloTabela>Data de Vencimento</TituloTabela>
      {requireAcao ?  (
        <TituloTabela>Ações</TituloTabela>
      ) : (null) }
    </LinhaCabecalho>
  )
}