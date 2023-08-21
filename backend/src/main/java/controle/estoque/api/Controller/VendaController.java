package controle.estoque.api.Controller;

import controle.estoque.api.Domain.Produto.Produto;
import controle.estoque.api.Domain.Produto.ProdutoRepository;
import controle.estoque.api.Domain.Venda.CadastroVenda;
import controle.estoque.api.Domain.Venda.ListarVenda;
import controle.estoque.api.Domain.Venda.Venda;
import controle.estoque.api.Domain.Venda.VendaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("venda")
public class VendaController {

    @Autowired
    private VendaRepository repositoryvenda;

    @Autowired
    private ProdutoRepository repositoryproduto;

    @PostMapping
    public ResponseEntity realizarVenda(@RequestBody CadastroVenda dados){
        var produto = repositoryproduto.findByProduto(dados.produto());
        if(dados.quantidade() <= produto.getQuantidade()){
            repositoryvenda.save(new Venda(dados));
            produto.alterarQuantidade(dados.quantidade());
            repositoryproduto.save(produto);

            return ResponseEntity.ok().build();
        }

        return ResponseEntity.ok("Erro");
    }

    @GetMapping
    public ResponseEntity<Page<ListarVenda>> listar(@PageableDefault(size = 10, sort = {"datavenda"}) Pageable pageable){
        var vendas = repositoryvenda.findAll(pageable).map(ListarVenda::new);

        return ResponseEntity.ok().body(vendas);
    }
}
