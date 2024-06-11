// import { getPedido, getPedidos, putPedido, postPedido, deletePedido } from "./ingrediente.js";

// function criarCard(pedido){
//     const listar = document.getElementById('pendente')
//     const card = document.createElement('div')
//     const titulo = document.createElement('p')
//     const nome = document.createElement('p')
//     const descricao = document.createElement('p')
//     const entrega = document.createElement('p')
//     const preco = document.createElement('p')
//     const status = document.createElement('p')
    

//     const divIcones = document.createElement('div')
//     divIcones.classList.add('divIcones')

//     const iconeDeletar = document.createElement('img')
//     iconeDeletar.style.height='100%'
//     iconeDeletar.src = '../img/excluir.png'

//     const iconeAtualizar = document.createElement('img')
//     iconeAtualizar.style.height='50%'
//     iconeAtualizar.src = '../img/editar produto.png'


//     titulo.textContent = pedido.titulo
//     nome.textContent = pedido.categoria
//     descricao.textContent = pedido.preco
//     entrega.textContent = pedido.desconto
//     preco.textContent =  pedido.descricao
//     status.textContent = pedido.quantidade
    

//     const iconeAdicionar = document.getElementById('adicionar')

//     iconeAdicionar.addEventListener('click', ()=>{
//         window.location.href = '../pages/adicionar.html'
//     })

    
//     divIcones.replaceChildren(iconeDeletar,iconeAtualizar)

//     iconeDeletar.addEventListener('click',()=>{
//         deleteProdutos(produto.id)
//         window.location.reload()
//     })

//     iconeAtualizar.addEventListener('click',()=>{
//         window.location.href='../pages/editar.html?idProduto='+produto.id
//     })

//     card.append(nome, categoria, preco, desconto, descricao, quantidade, ingredientes, img, divIcones)
//     return card
// }

//     const containerProduto = document.getElementById('produtos')
//     const produtos = await getProdutos()
//     produtos.forEach(produto => {
//         const card = criarCard(produto)
//         containerProduto.appendChild(card)
//     })