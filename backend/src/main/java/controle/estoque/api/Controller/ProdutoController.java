package controle.estoque.api.Controller;

import controle.estoque.api.Domain.Produto.*;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@RestController
@RequestMapping("produto")
public class ProdutoController {

    @Autowired
    private ProdutoRepository repository;

    @PostMapping
    @Transactional
    public ResponseEntity<DadosCadastroProduto> cadastrar(@RequestBody @Valid DadosCadastroProduto dados) {
        var produto = new Produto(dados);
        repository.save(produto);
        return ResponseEntity.status(HttpStatus.OK).body(dados);
    }

    @GetMapping
    public ResponseEntity<Page<DadosListagemProduto>> listar(@PageableDefault(size = 10, sort = {"datavencimento"}) Pageable pageable) {
        var page = repository.findAll(pageable).map(DadosListagemProduto::new);
        return ResponseEntity.ok(page);
    }

    @GetMapping("/{id}")
    public ResponseEntity<DadosListagemProduto> buscar(@PathVariable String id) {
        var produto = repository.getReferenceByProduto(id);
        return ResponseEntity.ok(new DadosListagemProduto(produto));
    }

    @PutMapping
    @Transactional
    public ResponseEntity<DadosListagemProduto> alterar(@RequestBody @Valid DadosAlterarProduto dados){
        var produto = repository.getReferenceById(dados.id());
        produto.alterar(dados);
        repository.save(produto);
        return ResponseEntity.ok(new DadosListagemProduto(produto));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity delete(@PathVariable UUID id){
        repository.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}
