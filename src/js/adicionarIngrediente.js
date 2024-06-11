import { postIngrediente } from "./ingrediente.js";

const imagemCampo = document.getElementById('img')
const nomeCampo = document.getElementById('nome')
const marcaCampo = document.getElementById('marca')
const validadeCampo = document.getElementById('validade')
const quantidadeCampo = document.getElementById('quantidade')


const button = document.querySelector('button')
button.addEventListener('click',async ()=>{
    const json = {
        nome_ingrediente: nomeCampo.value,
        marca_ingredientes: marcaCampo.value,
        data_validade: validadeCampo.value,
        foto_ingrediente: imagemCampo.value,
        quantidade_ingredientes: quantidadeCampo.value,

    }
    const result = await postIngrediente(json)
    if(result){
        window.location.href='../pages/estoque.html'
    } else {
        alert("Deu erro aí, fi")
    }
})