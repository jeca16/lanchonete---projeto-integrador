import { postPromocao } from "./ingrediente.js";

const imagemCampo = document.getElementById('img')
const nomeCampo = document.getElementById('nome')
const precoCampo = document.getElementById('preco')


const button = document.querySelector('button')
button.addEventListener('click',async ()=>{
    const json = {
        nomePromocao: nomeCampo.value,
        precoPromocao: precoCampo.value,
        fotoPromocional: imagemCampo.value,
    }
    const result = await postPromocao(json)
    if(result){
        window.location.href='../pages/promocoes.html'
    } else {
        alert("Deu erro aí, fi")
    }
})