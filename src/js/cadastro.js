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

            let validaCadastro = '';

            try {
                const novoUsuario = {
                    nomeFucionario: nome,
                    emailFuncionario: email,
                    senhaFuncionario: senha
                }

                let resultAPI = await fetch('http://localhost:8080/v1/lanchonete/funcionario', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(novoUsuario)
                })

                validaCadastro = await resultAPI.json()


            } catch (error) {
                console.log(error)
            }


            if (validaCadastro.status_code == 201) {
                window.location.href = '../index.html'
            } else {
                alert(validaCadastro.status_code)
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


const eyeIcon2 = document.getElementById('eyeIcon2')
let senhaVisivel2 = false
eyeIcon2.addEventListener('click',()=>{
    if(senhaVisivel2){
        document.getElementById('confirmSenha').setAttribute('type','password')
        eyeIcon2.src='https://www.svgrepo.com/show/524041/eye-closed.svg'
        senhaVisivel2 = false
    } else {
        document.getElementById('confirmSenha').setAttribute('type','text')
        eyeIcon2.src='https://www.svgrepo.com/show/522847/eye.svg'
        senhaVisivel2 = true
    }
})


