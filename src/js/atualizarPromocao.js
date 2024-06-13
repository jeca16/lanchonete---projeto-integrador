import { getPromocoes, putPromocao } from "./ingrediente.js";
const idpromocao = new URLSearchParams(window.location.search).get('idPromocoes');
console.log(idpromocao)
const infopromocao = await getPromocoes(idpromocao)

const imagemCampo = document.getElementById('img')
const nomeCampo = document.getElementById('nome')
const precoCampo = document.getElementById('preco')

imagemCampo.value = infopromocao.promocoes[0].fotoPromocional
nomeCampo.value = infopromocao.promocoes[0].nomePromocao
precoCampo.value = infopromocao.promocoes[0].precoPromocao


const button = document.querySelector('button')
button.addEventListener('click',async ()=>{
    const json = {
        nomePromocao: nomeCampo.value,
        precoPromocao: precoCampo.value,
        fotoPromocional: imagemCampo.value,
    }
    const result = await putPromocao(idpromocao,json)
    if(result){
        window.location.href='../pages/promocoes.html'   
    } else {
        alert("Deu erro aí, fi")
    }
})