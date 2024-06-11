import { getProduto, postProduto, putProduto, deleteProduto} from "./ingrediente.js";

function criarTabela(produto) {
    const linha = document.createElement('tr')
    const nome = document.createElement('td')
    const preco = document.createElement('td')
    const divIcones = document.createElement('div')

    nome.textContent = produto.nomeProduto
    preco.textContent = "R$" + produto.precoProduto
   


    nome.classList.add('border', 'border-slate-400', 'pl-10')
    preco.classList.add('border', 'border-slate-400', 'flex', 'h-16', 'gap-10', 'pl-10', 'items-center')
    

    divIcones.classList.add('divIcones', 'flex')
    const iconeDeletar = document.createElement('img')
    iconeDeletar.classList.add('w-12', 'h-12', 'cursor-pointer')
    iconeDeletar.src = '../img/excluir.png'

    const iconeAtualizar = document.createElement('img')
    iconeAtualizar.classList.add('w-8', 'h-10',  'cursor-pointer')
    iconeAtualizar.src = '../img/editar produto.png'

    const iconeAdicionar = document.getElementById('adicionar')

    iconeAdicionar.addEventListener('click', ()=>{
        window.location.href = '../pages/adicionarProduto.html'
    })

    divIcones.replaceChildren(iconeDeletar,iconeAtualizar)

    iconeDeletar.addEventListener('click',()=>{
        deleteProduto(produto.idProduto)
        window.location.reload()
    })

    iconeAtualizar.addEventListener('click',()=>{
        window.location.href='../pages/atualizarProduto.html?idProduto='+produto.idProduto
    })

    preco.appendChild(divIcones)

    linha.append (nome, preco)
    return linha
}

const linhaProduto = document.getElementById('produtos')
    const produtos = await getProduto()
    const produtosObj = produtos.nomeProduto
    produtosObj.forEach(produto => {
        const linha = criarTabela(produto)
        linhaProduto.appendChild(linha)
    })