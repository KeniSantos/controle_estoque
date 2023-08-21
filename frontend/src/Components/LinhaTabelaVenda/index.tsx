import {ColunaTabela, LinhaConteudo} from './styles';

interface LinhaProps {
  produto: string,
  preco: number,
  quantidade: number,
  dataVenda: string
}

export default function LinhaTabelaVenda({produto, preco, quantidade, dataVenda}: LinhaProps) {
  return (
    <LinhaConteudo>
      <ColunaTabela>{produto}</ColunaTabela>
      <ColunaTabela>R$ {preco}</ColunaTabela>
      <ColunaTabela>{quantidade}</ColunaTabela>
      <ColunaTabela>{dataVenda}</ColunaTabela>
    </LinhaConteudo>
  )
}