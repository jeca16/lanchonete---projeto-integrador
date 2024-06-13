import { getCombo, postCombo, putCombo, deleteCombo} from "./ingrediente.js";

function criarTabela(combo) {
    const linha = document.createElement('tr')
    const nome = document.createElement('td')
    const preco = document.createElement('td')
    const divIcones = document.createElement('div')

    nome.textContent = combo.titulo
    preco.textContent = "R$ " + combo.precoCombo
   


    nome.classList.add('border', 'border-slate-400', 'pl-10')
    preco.classList.add('border', 'border-slate-400', 'flex', 'h-16', 'gap-10', 'pl-10', 'items-center', 'justufy-center')
    

    divIcones.classList.add('divIcones', 'flex')
    const iconeDeletar = document.createElement('img')
    iconeDeletar.classList.add('w-12', 'h-12', 'cursor-pointer')
    iconeDeletar.src = '../img/excluir.png'

    const iconeAtualizar = document.createElement('img')
    iconeAtualizar.classList.add('w-8', 'h-10',  'cursor-pointer')
    iconeAtualizar.src = '../img/editar produto.png'

    const iconeAdicionar = document.getElementById('adicionar')

    iconeAdicionar.addEventListener('click', ()=>{
        window.location.href = '../pages/adicionarCombo.html'
    })

    divIcones.replaceChildren(iconeDeletar,iconeAtualizar)

    iconeDeletar.addEventListener('click',()=>{
        deleteCombo(combo.idCombo)
        window.location.reload()
    })

    iconeAtualizar.addEventListener('click',()=>{
        window.location.href='../pages/atualizarCombo.html?idCombo='+combo.idCombo
    })

    preco.appendChild(divIcones)

    linha.append (nome, preco)
    return linha
}

const linhaCombo = document.getElementById('produtos')
    const combos = await getCombo()
    const produtosObj = combos.titulo
    produtosObj.forEach(combo => {
        const linha = criarTabela(combo)
        linhaCombo.appendChild(linha)
    })