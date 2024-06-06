export async function getIngrediente(){
    const url = 'http://localhost:8080/v1/lanchonete/Ingredientes'
    const response = await fetch (url)
    const data = await response.json()
    return data
}

export async function getIngredientes(ingredienteId){
    const url = `http://localhost:8080/v1/lanchonete/ingredienteId/${ingredienteId}`
    const response = await fetch (url)
    const data = await response.json()
    return data
}

export async function postIngrediente(ingrediente){
    const url = `http://localhost:8080/v1/lanchonete/ingrediente`
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(ingrediente)
    }
    const response = await fetch(url, options)
    return response.ok
}


export async function putIngrediente(ingredienteId, ingrediente){
    const url = `http://localhost:8080/v1/lanchonete/editeIngrediente/${ingredienteId}`
    console.log(ingredienteId);
    console.log(ingrediente)
    const options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(ingrediente)
    }
    const response = await fetch(url, options)
    return response.ok
}

export async function deleteIngrediente(ingredienteId){
    const url = `http://localhost:8080/v1/lanchonete/ingrediente/${ingredienteId}`
    const options = {
        method: 'DELETE',
    }
    const response = await fetch(url, options)
    return response.ok
}

export function validarData(data){
    const reducedData = data.substr(0,10)
    const dataSplit = reducedData.split('-')
    const dataFinal = dataSplit[2]+"/"+dataSplit[1]+"/"+dataSplit[0]
    return dataFinal
  }