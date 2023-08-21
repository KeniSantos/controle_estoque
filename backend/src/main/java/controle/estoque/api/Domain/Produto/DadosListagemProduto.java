package controle.estoque.api.Domain.Produto;

import java.math.BigInteger;
import java.time.LocalDate;
import java.util.UUID;

public record DadosListagemProduto(UUID id, String produto, BigInteger preco, BigInteger precoVenda, Integer quantidade, LocalDate dataVencimento) {
    public DadosListagemProduto(Produto dados){
        this(dados.getId(), dados.getProduto(), dados.getPreco(), dados.getPrecovenda(), dados.getQuantidade(), dados.getDatavencimento());
    }
}
