import CabecalhoTabelaVenda from "../../Components/CabecalhoTabelaVenda";
import {Container, DivConteudo, Titulo, Input, BotaoCustomizado, DivAdicionar} from "./styles";
import { useEffect, useState } from "react";
import Modal from "../Modal";
import axios from "axios";
import ListarLinhaVenda from "../../Components/ListarLinhaVenda/input";

interface ItemProps {
  produto: string,
  vencimento: string,
  quantidade: number,
  precoVenda: number
}

interface VendaItems {
  id: string,
  produto: string,
  preco: number,
  quantidade: number,
  datavenda: string
}

export default function Vendas() {
  const [nome, setNome] = useState('');
  const [visible, setVisible] = useState(false);
  const [produtoCompleto, setProdutoCompleto] = useState<ItemProps>({produto: '', vencimento: '', quantidade: 0, precoVenda: 0});
  const [list, setList] = useState<Array<VendaItems>>([]);

  function handleList() {
    axios.get(`http://localhost:8080/venda`).then(response => setList(response.data.content));
  }

  function teste() {
    try {
      axios.get(`http://localhost:8080/produto/${nome}`).then(resp => {
        setProdutoCompleto({produto: resp.data.produto, vencimento: resp.data.vencimento, quantidade: resp.data.quantidade, precoVenda: resp.data.precoVenda})
      }).catch(erro => '');
    } catch(erro) {
      return ''
    }
  }

  useEffect(() => {
    handleList()
  }, [])

  function handleConfirmar(quantidadeItem: number, dataVendaItem: string) {
    const dados = {
      produto: produtoCompleto.produto, 
      preco: produtoCompleto.precoVenda, 
      quantidade: quantidadeItem,
      datavenda: dataVendaItem
    }
    axios.post(`http://localhost:8080/venda`, dados).then(resp => {
      setProdutoCompleto({produto: '', vencimento: '', quantidade: 0, precoVenda: 0})
      handleList()
    });
    setVisible(false);
  }
  
  function handleCancelar() {
    setVisible(false);
    setProdutoCompleto({produto: '', vencimento: '', quantidade: 0, precoVenda: 0});
  }

  return (
    <>
      <Container>
        <Modal produto={produtoCompleto.produto} precoVenda={produtoCompleto.precoVenda} vencimento={produtoCompleto.vencimento} quantidadeMaxima={produtoCompleto.quantidade} visible={visible} onClickConfirmar={handleConfirmar} onClickCancelar={handleCancelar} />
        <Titulo>Pesquisar produto</Titulo>
        <DivConteudo>
          <Input type="text" placeholder="Nome do produto" value={nome} onChange={(e) => setNome(e.target.value)}  />
          <BotaoCustomizado onClick={() => teste()}>Pesquisar</BotaoCustomizado>
        </DivConteudo>
        {produtoCompleto.produto !== '' ? (    
          <DivAdicionar>
            <p>{produtoCompleto.produto}</p>
            <p>{produtoCompleto.quantidade}</p>
            <BotaoCustomizado onClick={() => setVisible(true)}>Adicionar</BotaoCustomizado>
          </DivAdicionar>
        ) : (null)}
        <Titulo>Vendas</Titulo>
        <table>
          <thead>
            <CabecalhoTabelaVenda />
          </thead>
          <ListarLinhaVenda items={list} />
        </table>
      </Container>
    </>
  )
}