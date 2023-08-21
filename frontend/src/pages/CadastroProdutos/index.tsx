import {Container, FormCadastro, Titulo, DivTitulo, BotaoCustomizado} from "./styles";
import CabecalhoTabela from "../../Components/CabecalhoTabela";
import InputPesquisas from "../../Components/InputPesquisas";
import ListarLinhas from "../../Components/ListarLinhas/input";
import { useState, useEffect } from "react";
import usePost from "../../usePost";
import axios from "axios";
import ModalConfirmacao from '../ModalConfirmacao';
import ModalAlterar from '../ModalAlterar';

interface ProdutoProps {
  id: string,
  produto: string,
  preco: number,
  precoVenda: number,
  quantidade: number,
  dataVencimento: string
}

export default function CadastroProdutos() {
  const [nome, setNome] = useState('');
  const [preco, setPreco] = useState(0);
  const [precoVenda, setPrecoVenda] = useState(0);
  const [quantidade, setQuantidade] = useState(0);
  const [data, setData] = useState('');
  const [pesquisa, setPesquisa] = useState('');
  const [list, setList] = useState<Array<ProdutoProps>>([]);
  const {cadastrarDados} = usePost();
  const [visibleModalConfirmacao, setVisibleModalConfirmacao] = useState(false);
  const [visibleModalAlterar, setVisibleModalAlterar] = useState(false);
  const [idDel, setIdDel] = useState('');
  const [item, setItem] = useState<ProdutoProps>({id: '', produto: '', preco: 0, precoVenda: 0, quantidade: 0, dataVencimento: ''});

  function handleRendezirar(){
    const dados = {
      produto: nome,
      preco: preco,
      precovenda: precoVenda,
      quantidade: quantidade,
      datavencimento: data
    }
    cadastrarDados({ url: "produto", dados: dados});
    setNome('')
    setPreco(0)
    setPrecoVenda(0)
    setQuantidade(0)
    setData('')
    handleList()
  }

  function handleDeletar(id: string) {
    setIdDel(id);
    setVisibleModalConfirmacao(true)
  }

  function handleAlterar( itemAlterar: ProdutoProps ){
    setItem(itemAlterar);
    setVisibleModalAlterar(true);
  }

  function handleCancelarAlt(){
    setVisibleModalAlterar(false);
  }

  function handleCancelarDel(){
    setVisibleModalConfirmacao(false);
  }

  function handleConfirmarDel() {
    setVisibleModalConfirmacao(false)
    axios.delete(`http://localhost:8080/produto/${idDel}`).then(resp => {
      handleList()
    }).catch(erro => {
      alert('Ocorreu um erro')
    });
  }

  function handleConfirmarAlt(){
    setVisibleModalAlterar(false);
    axios.put(`http://localhost:8080/produto`, item).then(resp => {
      handleList()
    }).catch(erro => alert('Ocorreu um erro'))
  }

  function handleList() {
    axios.get(`http://localhost:8080/produto`).then(response => setList(response.data.content));
  }

  function handleListar(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    axios.get(`http://localhost:8080/produto/${pesquisa}`).then(response => setList([response.data])).catch(erro => {
      handleList()
      alert('Não foi encontrado')
    });
  }

  useEffect(() => {
    handleList()
  }, []);

  return (
    <>
      <ModalAlterar itemAlterar={item} visible={visibleModalAlterar} cancelar={handleCancelarAlt} alterar={setItem} confirmar={handleConfirmarAlt} />
      <ModalConfirmacao visible={visibleModalConfirmacao} cancelar={handleCancelarDel} confirmar={handleConfirmarDel} />
      <Container>
        <DivTitulo>
          <Titulo>Cadastro de Produtos</Titulo>
          <BotaoCustomizado onClick={() => handleRendezirar()}>Cadastrar</BotaoCustomizado>
        </DivTitulo>
        <FormCadastro>
          <InputPesquisas conteudo="Nome do produto" tipo="text" placeholder="Nome do produto" valor={nome} onChange={setNome} />
          <InputPesquisas conteudo="Preço" tipo="number" placeholder="Preço" valor={preco} onChange={setPreco} />
          <InputPesquisas conteudo="Preço de venda" tipo="number" placeholder="Preço de venda" valor={precoVenda} onChange={setPrecoVenda} />
          <InputPesquisas conteudo="Quantidade" tipo="number" placeholder="Quantidade" valor={quantidade} onChange={setQuantidade} />
          <InputPesquisas conteudo="Data de vencimento" tipo="date" placeholder="Data de vencimento" valor={data} onChange={setData} />
        </FormCadastro>
        <DivTitulo>
          <Titulo>Pesquisar Produto</Titulo>
        </DivTitulo>
        <FormCadastro onSubmit={(event) => handleListar(event)}>
          <InputPesquisas conteudo="Nome do produto" tipo="text" placeholder="Nome do produto" valor={pesquisa} onChange={setPesquisa} />
          <BotaoCustomizado>Pesquisar</BotaoCustomizado>
        </FormCadastro>
        <table>
          <thead>
            <CabecalhoTabela requireAcao={true} />
          </thead>
          <ListarLinhas items={list} handleDel={handleDeletar} handleAlt={handleAlterar} />
        </table>
      </Container>
    </>
  )
}