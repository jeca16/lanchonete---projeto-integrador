import { getIngrediente, getIngredientes, putIngrediente, validarData} from "./ingrediente.js";

const idIngrediente = new URLSearchParams(window.location.search).get('idIngrediente');

const infoIngrediente = await getIngredientes(idIngrediente)
console.log(infoIngrediente);
const nomeCampo = document.getElementById('nome')
const marcaCampo = document.getElementById('marca')
const validadeCampo = document.getElementById('validade')
const quantidadeCampo = document.getElementById('quantidade')


nomeCampo.value = infoIngrediente.ingredientes[0].nome_ingrediente
marcaCampo.value = infoIngrediente.ingredientes[0].marca_ingredientes
quantidadeCampo.value = infoIngrediente.ingredientes[0].quantidade_ingredientes
console.log(validadeCampo)
validadeCampo.value = validarData(infoIngrediente.ingredientes[0].data_validade)


const button = document.querySelector('button')
button.addEventListener('click',async ()=>{
    const json = {
        nome_ingrediente: nomeCampo.value,
        quantidade_ingredientes: quantidadeCampo.value,
        marca_ingredientes: marcaCampo.value,
        data_validade: validadeCampo.value,

    }
    const result = await putIngrediente(idIngrediente,json, idIngrediente)
    if(result){
        window.location.href='../pages/estoque.html'
    } else {
        alert("Deu erro aí, fi")
    }
})