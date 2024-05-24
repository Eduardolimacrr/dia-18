class Livro {
    Título
    Autor
    Editora
    AnoDePublicacao
    Disponibilidade = true
    constructor(titulo, autor, editora, anoDePublicacao) {
        this.Titulo = titulo
        this.Autor = autor
        this.Editora = editora
        this.AnoDePublicacao = anoDePublicacao
    }
}

let livros = []
livros.push(new Livro('Livro1', 'marcos', 'editoraA', 2001))
livros.push(new Livro('livro2', 'marcos', 'editoraF', 1997))
livros.push(new Livro('livro3', 'Carlos', 'editoraF', 2010))
livros.push(new Livro('livro4', 'João', 'editoraA', 2005))
livros.push(new Livro('livro5', 'Fábio', 'editoraC', 2020))

class Biblioteca {
    Nome
    Endereco
    Telefone
    AcervoLivros = []
    constructor(nome, endereco, telefone, acervo){
        this.Nome = nome
        this.Endereco = endereco
        this.Telefone = telefone
        this.AcervoLivros = acervo
    }
    BuscarLivroPeloTitulo(titulo) {
        this.AcervoLivros.forEach(livro => {
            if (livro.Titulo == titulo) {
                console.log(livro)
            }
        })
    }

    EmprestarLivro(titulo) {
        let emprestado = false
        this.AcervoLivros.forEach(livro => {
            if (livro.Titulo == titulo) {
                if (livro.Disponibilidade == true) {
                    livro.Disponibilidade = false
                    emprestado = true
                }
            }
        })
        if (emprestado) {
            return true
        } else {
            return false 
        }
    }

    DevolverLivro(titulo) {
        livros.forEach(livro => {
            if (livro.Titulo == titulo) {
                livroDisponibilidade = true
                console.log('Livro devolvido')
            }
        })
    }

}

let biblioteca = new Biblioteca('Biblioteca DoDev', '123456', 'Rua 2')

biblioteca.BuscarLivroPeloTitulo('livro2')
biblioteca.EmprestarLivro('livro1')
biblioteca.DevolverLivro('livro1')

