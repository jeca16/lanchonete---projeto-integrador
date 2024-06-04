'use strict'

async function cadastrarUsuario() {
    const nome = document.getElementById('user').value
    const email = document.getElementById('email').value
    const senha = document . getElementById ('senha').value
    const confirmarSenha = document.getElementById('confirmSenha').value

    if (nome == '' || email == '' || senha == '' || confirmarSenha == '') {
        alert('preencha os campos devidamente!')

    }else{
        if (confirmarSenha != senha) {
            alert('As senhas informadas não são iguais')
        }else{
            try {
                const novoUsuario = {
                    nome: nome,
                    email: email,
                    senha: senha
                }
                await fetch('http://back-login.vercel.app/usuarios', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(novoUsuario)
                })
                window.location.href = './estoque.html'
            } catch (error) {
                console.log(error)
            }
        }
    }
}

const eyeIcon = document.getElementById('eyeIcon')
let senhaVisivel = false
eyeIcon.addEventListener('click',()=>{
    if(senhaVisivel){
        document.getElementById('senha').setAttribute('type','password')
        eyeIcon.src='https://www.svgrepo.com/show/524041/eye-closed.svg'
        senhaVisivel = false
    } else {
        document.getElementById('senha').setAttribute('type','text')
        eyeIcon.src='https://www.svgrepo.com/show/522847/eye.svg'
        senhaVisivel = true
    }
})


