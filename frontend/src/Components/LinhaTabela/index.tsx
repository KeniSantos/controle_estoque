import axios from "axios";
import { LinhaConteudo, ColunaTabela, Button, Img } from "./styles";
import trash from './trash.png';
import clipboard from './clipboard.png';

interface ItemsProps {
  id: string,
  produto: string,
  preco: number,
  precoVenda: number,
  quantidade: number,
  dataVencimento: string,
}

interface LinhaTabelaProps {
  item: ItemsProps,
  requireAcao: boolean,
  handleDeletar: (id: string) => void,
  handleAlterar: (item: ItemsProps) => void,
}

export default function LinhaTabela({item, requireAcao, handleDeletar, handleAlterar}: LinhaTabelaProps) {
  
  return (
    <LinhaConteudo>
        <ColunaTabela>{item.produto}</ColunaTabela>
        <ColunaTabela>R$ {item.preco}</ColunaTabela>
        <ColunaTabela>R$ {item.precoVenda}</ColunaTabela>
        <ColunaTabela>{item.quantidade}</ColunaTabela>
        <ColunaTabela>{item.dataVencimento}</ColunaTabela>
        {requireAcao ? (
          <ColunaTabela>
            <Button color="#ff0011" onClick={() => handleDeletar(item.id)}><Img src={trash} alt="deletar" /></Button>
            <Button color="#0022FF" onClick={() => handleAlterar(item)} ><Img src={clipboard} alt="alterar" /></Button>
          </ColunaTabela>
        ) : (null)}
    </LinhaConteudo>
  )
}