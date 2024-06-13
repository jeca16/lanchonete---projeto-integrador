import { postCombo } from "./ingrediente.js";

const imagemCampo = document.getElementById('img')
const nomeCampo = document.getElementById('nome')
const descricaoCampo = document.getElementById('descricao')
const precoCampo = document.getElementById('preco')


const button = document.querySelector('button')
button.addEventListener('click',async ()=>{
    const json = {
        titulo: nomeCampo.value,
        descricaoCombo: descricaoCampo.value,
        fotoCombo: imagemCampo.value,
        precoCombo: precoCampo.value,

    }
    const result = await postCombo(json)
    if(result){
        window.location.href='../pages/combos.html'
    } else {
        alert("Deu erro aí, fi")
    }
})