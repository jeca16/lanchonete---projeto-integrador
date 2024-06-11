import { postProduto } from "./ingrediente.js";

const imagemCampo = document.getElementById('img')
const nomeCampo = document.getElementById('nome')
const descricaoCampo = document.getElementById('descricao')
const precoCampo = document.getElementById('preco')


const button = document.querySelector('button')
button.addEventListener('click',async ()=>{
    const json = {
        nomeProduto: nomeCampo.value,
        descricaoProduto: descricaoCampo.value,
        precoProduto: precoCampo.value,
        fotoProduto: imagemCampo.value,
    }
    const result = await postProduto(json)
    if(result){
        window.location.href='../pages/produtos.html'
    } else {
        alert("Deu erro aí, fi")
    }
})