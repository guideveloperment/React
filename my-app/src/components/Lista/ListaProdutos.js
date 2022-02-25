import produtos from "./produtos"

function ListaProdutos(props) {
  
    function exibirLista(){
        return produtos.map(p => {
            return (
               
                              
               <h3>
                {p.id} {p.id} {p.nome} tem preço R$ {p.preco} 
                </h3>
            )
        })
    }

 return (
 <> 
    <h2>Lista de Produtos</h2>
    {exibirLista()}
</>
 )
}

export default ListaProdutos