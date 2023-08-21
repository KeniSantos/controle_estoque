package controle.estoque.api.Domain.Venda;

import java.math.BigInteger;
import java.time.LocalDate;
import java.util.UUID;

public record ListarVenda(UUID id, String produto, BigInteger preco, Integer quantidade, LocalDate datavenda) {

    public ListarVenda(Venda dados) {
        this(dados.getId(), dados.getProduto(), dados.getPreco(), dados.getQuantidade(), dados.getDatavenda());
    }
}
