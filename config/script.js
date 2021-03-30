function adicionarFilmeFavorito() {
    var campoFilmeFavorito = document.querySelector('#filme')

    var filmeFavorito = campoFilmeFavorito.value

    //Validação
    if (filmeFavorito.endsWith('.jpg')){

        listarFilmesNaTela(filmeFavorito)

    } else {
        alert("Imagem Invalida! Impossivel adicionar")
    } 
    //Excluir texto
    campoFilmeFavorito.value = ""
    
}

function listarFilmesNaTela(filme) {
    var listaFilmes = document.querySelector('#listaFilmes')

    var elementoFilme = `<img src= ${filme}>`

    listaFilmes.innerHTML = listaFilmes.innerHTML + elementoFilme

}

