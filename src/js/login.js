const button = document.getElementById('login');

async function validarLogin() {
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    let logado = false

    try {
        const users = await fetch('http://localhost:8080/v1/lanchonete/funcionarios')
        const listUsers = await users.json()
        console.log(listUsers)
        listUsers.nomeFuncionario.forEach((user) => {
            if (email === user.emailFuncionario && senha === user.senhaFuncionario) {
                logado = true
                localStorage.setItem("idusuario", user.id)
                window.location.href = './pages/estoque.html'
            }
            console.log(user.email)
            console.log(user.senha)
            console.log(user.id)
        })

        if (!logado) {
            alert('login inválido')
        }
    } catch (error) {
        console.log(error)
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

// ** link validação de user