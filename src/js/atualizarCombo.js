import { getCombo, getCombos, putCombo, validarData} from "./ingrediente.js";

const idCombo = new URLSearchParams(window.location.search).get('idCombo');

const infoCombos = await getCombos(idCombo)
const infoCombo = await infoCombos.combos[0]
const imagemCampo = document.getElementById('img')
const nomeCampo = document.getElementById('nome')
const descricaoCampo = document.getElementById('descricao')
const precoCampo = document.getElementById('preco')

nomeCampo.value = infoCombo.titulo
descricaoCampo.value = infoCombo.descricaoCombo
precoCampo.value = infoCombo.precoCombo

console.log(infoCombos);

const button = document.querySelector('button')
button.addEventListener('click',async ()=>{
    const json = {
        titulo: nomeCampo.value,
        fotoCombo: imagemCampo.value,
        precoCombo: precoCampo.value,
        descricaoCombo: descricaoCampo.value,
    }


    const result = await putCombo(idCombo,json)

    if(result){
        window.location.href='../pages/combos.html'
    } else {
        alert("Deu erro aí, fi")
    }
})