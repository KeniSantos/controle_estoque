package controle.estoque.api.Domain.Produto;

import jakarta.validation.constraints.NotNull;

import java.math.BigInteger;
import java.time.LocalDate;

public record DadosCadastroProduto(
        @NotNull
        String produto,

        @NotNull
        BigInteger preco,

        @NotNull
        BigInteger precovenda,

        @NotNull
        Integer quantidade,

        LocalDate datavencimento

) {
}