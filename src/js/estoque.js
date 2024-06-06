import { getIngrediente, postIngrediente, putIngrediente, deleteIngrediente} from "./ingrediente.js";

function criarTabela(ingrediente) {
    const linha = document.createElement('tr')
    const nome = document.createElement('td')
    const marca = document.createElement('td')
    const quantidade = document.createElement('td')
    const validade = document.createElement('td')
    const divIcones = document.createElement('div')

    nome.textContent = ingrediente.nome_ingrediente
    marca.textContent = ingrediente.marca_ingredientes
    quantidade.textContent = ingrediente.quantidade_ingredientes
    validade.textContent = ingrediente.data_validade

    nome.classList.add('border', 'border-slate-400', 'pl-10', 'cursor-pointer')
    marca.classList.add('border', 'border-slate-400', 'pl-10')
    quantidade.classList.add('border', 'border-slate-400', 'pl-10')
    validade.classList.add('border', 'border-slate-400', 'flex', 'h-16', 'gap-10', 'pl-10', 'items-center')
    

    divIcones.classList.add('divIcones', 'flex')
    const iconeDeletar = document.createElement('img')
    iconeDeletar.classList.add('w-12', 'h-12', 'cursor-pointer')
    iconeDeletar.src = '../img/excluir.png'

    const iconeAtualizar = document.createElement('img')
    iconeAtualizar.classList.add('w-8', 'h-10',  'cursor-pointer')
    iconeAtualizar.src = '../img/editar produto.png'

    const iconeAdicionar = document.getElementById('adicionar')

    iconeAdicionar.addEventListener('click', ()=>{
        window.location.href = '../pages/adicionarIngrediente.html'
    })

    divIcones.replaceChildren(iconeDeletar,iconeAtualizar)

    iconeDeletar.addEventListener('click',()=>{
        deleteIngrediente(ingrediente.id_ingredientes)
        window.location.reload()
    })

    nome.addEventListener('click', ()=>{
        window.location.href = '../pages/mostrarIngrediente.html'
    })

    iconeAtualizar.addEventListener('click',()=>{
        window.location.href='../pages/atualizarIngrediente.html?idIngrediente='+ingrediente.id_ingredientes
    })

    validade.appendChild(divIcones)

    linha.append (nome, marca, quantidade, validade)
    return linha
}

const linhaIngrediente = document.getElementById('ingredientes')
    const ingredientes = await getIngrediente()
    ingredientes.ingredientes.forEach(ingrediente => {
        const linha = criarTabela(ingrediente)
        linhaIngrediente.appendChild(linha)
    })