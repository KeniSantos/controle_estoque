package controle.estoque.api.Domain.Produto;

import jakarta.validation.constraints.NotNull;

import java.math.BigInteger;
import java.time.LocalDate;
import java.util.UUID;

public record DadosAlterarProduto(@NotNull UUID id, String produto, BigInteger preco, BigInteger precovenda, Integer quantidade, LocalDate datavencimento) {

}
