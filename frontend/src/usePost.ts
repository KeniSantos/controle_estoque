import axios from "axios";

export default function usePost() {

  async function cadastrarDados<T>({url, dados}: {url: String, dados: T}){
    axios.post(`http://localhost:8080/${url}`, dados).catch(erro => alert('Ocorreu um erro'));
  }

  return {cadastrarDados};
}