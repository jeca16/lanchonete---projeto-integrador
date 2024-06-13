/**********************************ingredientes**********************************/

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
    console.log(ingredienteId);
    console.log(ingrediente)
    const url = `http://localhost:8080/v1/lanchonete/editeIngrediente/${ingredienteId}`
    // console.log(ingredienteId);
    // console.log(ingrediente)
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





/**********************************produtos**********************************/
  export async function getProduto(){
    const url = 'http://localhost:8080/v1/lanchonete/produtos'
    const response = await fetch (url)
    const data = await response.json()
    return data
}

export async function getProdutos(produtoId){
    const url = `http://localhost:8080/v1/lanchonete/produtoId/${produtoId}`
    const response = await fetch (url)
    const data = await response.json()
    return data
}

export async function postProduto(produto){
    const url = `http://localhost:8080/v1/lanchonete/produto`
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(produto)
    }
    const response = await fetch(url, options)
    return response.ok
}


export async function putProduto(produtoId, produto){
    const url = `http://localhost:8080/v1/lanchonete/editeProduto/${produtoId}`
    console.log(produtoId);
    console.log(produto)
    const options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(produto)
    }
    const response = await fetch(url, options)
    return response.ok
}

export async function deleteProduto(produtoId){
    const url = `http://localhost:8080/v1/lanchonete/produto/${produtoId}`
    const options = {
        method: 'DELETE',
    }
    const response = await fetch(url, options)
    return response.ok
}


/**********************************pedidos**********************************/

export async function getPedido(){
    const url = 'http://localhost:8080/v1/Lanchonete/pedidos'
    const response = await fetch (url)
    const data = await response.json()
    return data
}

export async function getPedidos(pedidoId){
    const url = `http://localhost:8080v1/Lanchonete/pedidos/${pedidoId}`
    const response = await fetch (url)
    const data = await response.json()
    return data
}

export async function postPedido(pedido){
    const url = `http://localhost:8080/v1/Lanchonete/postarPedidos/`
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(pedido)
    }
    const response = await fetch(url, options)
    return response.ok
}


export async function putPedido(pedidoId, pedido){
    const url = `http://localhost:8080/v1/Lanchonete/editarPedidos/${pedido}`
    console.log(pedidoId);
    console.log(pedido)
    const options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(pedido)
    }
    const response = await fetch(url, options)
    return response.ok
}

export async function deletePedido(pedidoId){
    const url = `http://localhost:8080/v1/Lanchonete/deletarPedidos/${pedidoId}`
    const options = {
        method: 'DELETE',
    }
    const response = await fetch(url, options)
    return response.ok
}



/**********************************combos**********************************/

export async function getCombo(){
    const url = 'http://localhost:8080/v1/lanchonete/combos'
    const response = await fetch (url)
    const data = await response.json()
    return data
}

export async function getCombos(ComboId){
    const url = `http://localhost:8080/v1/lanchonete/comboId/${ComboId}`
    const response = await fetch (url)
    const data = await response.json()
    return data
}

export async function postCombo(Combo){
    const url = `http://localhost:8080/v1/lanchonete/combo`
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(Combo)
    }
    const response = await fetch(url, options)
    return response.ok
}


export async function putCombo(ComboId, Combo){
    const url = `http://localhost:8080/v1/lanchonete/editeCombo/${ComboId}`
    // console.log(ComboId);
    // console.log(Combo)
    const options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(Combo)
    }
    const response = await fetch(url, options)
console.log(response);
    return response.ok
}

export async function deleteCombo(ComboId){
    const url = `http://localhost:8080/v1/lanchonete/combo/${ComboId}`
    const options = {
        method: 'DELETE',
    }
    const response = await fetch(url, options)
    return response.ok
}
