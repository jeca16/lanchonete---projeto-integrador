import { getIngrediente, getIngredientes, putIngrediente, validarData} from "./ingrediente.js";

const idIngrediente = new URLSearchParams(window.location.search).get('idIngrediente');

const infoIngrediente = await getIngredientes(idIngrediente)
const imagemCampo = document.getElementById('img')
const nomeCampo = document.getElementById('nome')
const marcaCampo = document.getElementById('marca')
const validadeCampo = document.getElementById('validade')
const quantidadeCampo = document.getElementById('quantidade')

nomeCampo.value = infoIngrediente.ingredientes[0].nome_ingrediente
marcaCampo.value = infoIngrediente.ingredientes[0].marca_ingredientes
quantidadeCampo.value = infoIngrediente.ingredientes[0].quantidade_ingredientes
validadeCampo.value = infoIngrediente.ingredientes[0].data_validade.slice(0,10)


const button = document.querySelector('button')
button.addEventListener('click',async ()=>{
    const json = {
        foto_ingrediente: imagemCampo.value,
        nome_ingrediente: nomeCampo.value,
        quantidade_ingredientes: quantidadeCampo.value,
        marca_ingredientes: marcaCampo.value,
        data_validade: validadeCampo.value,

    }
    const result = await putIngrediente(idIngrediente,json)
    if(result){
        window.location.href='../pages/estoque.html'
    } else {
        alert("Deu erro aí, fi")
    }
})