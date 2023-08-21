import LinhaTabela from '../LinhaTabela';

interface ItemsProps {
  id: string,
  produto: string,
  preco: number,
  precoVenda: number,
  quantidade: number,
  dataVencimento: string,
}

interface ListarProps {
  items: Array<ItemsProps>,
  handleDel: (id: string) => void,
  handleAlt: (item: ItemsProps) => void,
}

export default function ListarLinhas({items, handleDel, handleAlt}: ListarProps){

  function handleListar(){
    const list = items ?? []
    return list.map(item => (
      <LinhaTabela key={item.id} item={item} handleDeletar={handleDel} handleAlterar={handleAlt} requireAcao={true} />
    ))
  }

  return (
    <tbody>
      {handleListar()}
    </tbody>
  )
}