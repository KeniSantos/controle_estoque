import LinhaTabelaVenda from '../LinhaTabelaVenda';

interface ItemsProps {
  id: string,
  produto: string,
  preco: number,
  quantidade: number,
  datavenda: string,
}

interface ListarProps {
  items: Array<ItemsProps>
}

export default function ListarLinhaVenda({items}: ListarProps){

  function handleListar(){
    const list = items ?? []
    return list.map(item => (
      <LinhaTabelaVenda produto={item.produto} preco={item.preco} quantidade={item.quantidade} dataVenda={item.datavenda} />
    ))
  }

  return (
    <tbody>
      {handleListar()}
    </tbody>
  )
}