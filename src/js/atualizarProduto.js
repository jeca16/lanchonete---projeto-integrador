import { getProdutos, putProduto } from "./ingrediente.js";
const idProduto = new URLSearchParams(window.location.search).get('idProduto');

const infoProduto = await getProdutos(idProduto)

const imagemCampo = document.getElementById('img')
const nomeCampo = document.getElementById('nome')
const descricaoCampo = document.getElementById('descricao')
// const ingredienteCampo = document.getElementById('ingredientes')
const precoCampo = document.getElementById('preco')


imagemCampo.value = infoProduto.produtos[0].fotoProduto
nomeCampo.value = infoProduto.produtos[0].nomeProduto
descricaoCampo.value = infoProduto.produtos[0].descricaoProduto
// ingredienteCampo.value = infoProduto.categoria
precoCampo.value = infoProduto.produtos[0].precoProduto


const button = document.querySelector('button')
button.addEventListener('click',async ()=>{
    const json = {
        nomeProduto: nomeCampo.value,
        descricaoProduto: descricaoCampo.value,
        precoProduto: precoCampo.value,
        fotoProduto: imagemCampo.value,
    }
    const result = await putProduto(idProduto,json, idProduto)
    if(result){
        window.location.href='../pages/produtos.html'
    } else {
        alert("Deu erro aí, fi")
    }
})