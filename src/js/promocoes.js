import { getPromocao, postPromocao, putPromocao, deletePromocao} from "./ingrediente.js";

function criarCard(promocao) {
    const card = document.createElement('div')
    const nome = document.createElement('h1')
    const preco = document.createElement('p')
    const imagem = document.createElement('img')
    const divIcones = document.createElement('div')



    nome.textContent = promocao.nomePromocao
    preco.textContent = promocao.precoPromocao
    imagem.src = promocao.fotoPromocional


    card.classList.add('w-60', 'h-80', 'bg-white' ,'flex' ,'flex-col', 'rounded-[26px]', 'items-center', 'justify-center')
    nome.classList.add('font-acme', 'text-[#704608]')
    preco.classList.add('font-acme', 'text-[#77af37]')
    imagem.classList.add('w-40', 'h-40')

    divIcones.classList.add('divIcones', 'flex')
    const iconeDeletar = document.createElement('img')
    iconeDeletar.classList.add('w-12', 'h-12', 'cursor-pointer')
    iconeDeletar.src = '../img/excluir.png'

    const iconeAtualizar = document.createElement('img')
    iconeAtualizar.classList.add('w-8', 'h-10',  'cursor-pointer')
    iconeAtualizar.src = '../img/editar produto.png'

    const iconeAdicionar = document.getElementById('adicionar')
    console.log(iconeAdicionar);
      iconeAdicionar.addEventListener('click', ()=>{
        window.location.href = '../pages/adicionarPromocao.html'
    })

    divIcones.replaceChildren(iconeDeletar,iconeAtualizar)
    iconeDeletar.addEventListener('click',()=>{
        deletePromocao(promocao.idPromocoes)
        window.location.reload()
    })

    iconeAtualizar.addEventListener('click',()=>{
        window.location.href='../pages/atualizarPromocao.html?idPromocoes='+promocao.idPromocoes
    })

    preco.appendChild(divIcones)

    card.append (imagem,nome, preco)
    return card
}

    const cardPromocao = document.getElementById('promo')
    const promocao = await getPromocao()
    const promocaoObj = promocao.nomePromocao
    promocaoObj.forEach(promocao => {
        const linha = criarCard(promocao)
        cardPromocao.appendChild(linha)
    })
