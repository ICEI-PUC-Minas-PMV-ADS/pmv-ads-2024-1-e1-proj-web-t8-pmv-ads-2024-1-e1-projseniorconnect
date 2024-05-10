document.addEventListener('DOMContentLoaded', function () {
    // Função para exibir postagens armazenadas
    function exibirPostagens() {
        var postagens = JSON.parse(localStorage.getItem('postagens')) || [];

        // Ordenar postagens por ordem decrescente de data
        postagens.sort((a, b) => new Date(b.data) - new Date(a.data));

        var postagensHtml = '';

        postagens.forEach(function (postagem, index) {
            postagensHtml += `
    <div class="postagem" data-index="${postagem.id}">
        <div class="postagem-info">
            <h3>${postagem.titulo}</h3>
            <p>${postagem.conteudo}</p>
            <div class="postagem-footer">
                <span class="postagem-usuario"><i class="fas fa-user"></i> ${postagem.nomeUsuario}</span>
                <span class="postagem-data">${postagem.data}</span>
            </div>
            <div class="btn-group mt-3" role="group" aria-label="Botões de like e dislike">
                <button type="button" class="btn btn-outline-success like-btn"><i class="fas fa-arrow-up"></i></button>
                <button type="button" class="btn btn-outline-danger dislike-btn"><i class="fas fa-arrow-down"></i></button>
            </div>
            <span class="badge bg-success">Likes: <span class="likes-count">${postagem.likes || 0}</span></span>
        </div>
        <div class="mb-3">
            <label for="comentario-${postagem.id}" class="form-label">Comentário</label>
            <input type="text" class="form-control comment-box" id="comentario-${postagem.id}" placeholder="Digite seu comentário">
        </div>
        <button type="button" class="btn btn-primary btn-sm enviar-comentario" data-index="${postagem.id}">Enviar Comentário</button>
        <div class="comentarios mt-3">
            ${exibirComentarios(postagem.comentarios)}
        </div>
    </div>
`;
        });

        document.getElementById('postagens').innerHTML = postagensHtml;
    }

    // Função para adicionar like a uma postagem
    function adicionarLike(postagemId) {
        var postagens = JSON.parse(localStorage.getItem('postagens')) || [];
        var postagem = postagens[postagemId];

        // Verificar se o usuário já deu like
        if (!postagem.likesGiven || !postagem.likesGiven.includes('user123')) { // Substitua 'user123' pelo identificador do usuário
            postagem.likes = (postagem.likes || 0) + 1;
            postagem.likesGiven = postagem.likesGiven || [];
            postagem.likesGiven.push('user123'); // Registrar que o usuário deu like
            updateLikes(postagemId, postagem.likes);
        } else {
            alert('Você já deu like nesta postagem.');
        }
    }

    // Função para adicionar dislike a uma postagem
    function adicionarDislike(postagemId) {
        var postagens = JSON.parse(localStorage.getItem('postagens')) || [];
        var postagem = postagens[postagemId];

        // Verificar se o usuário já deu dislike
        if (!postagem.dislikesGiven || !postagem.dislikesGiven.includes('user123')) { // Substitua 'user123' pelo identificador do usuário
            postagem.likes = (postagem.likes || 0) - 1;
            postagem.dislikesGiven = postagem.dislikesGiven || [];
            postagem.dislikesGiven.push('user123'); // Registrar que o usuário deu dislike
            updateLikes(postagemId, postagem.likes);
        } else {
            alert('Você já deu dislike nesta postagem.');
        }
    }

    // Função para exibir os comentários
    function exibirComentarios(comentarios) {
        if (!comentarios || comentarios.length === 0) return '';

        return comentarios.map(comentario => `
            <div class="comentario-info">
                <div class="comentario-usuario">
                    <i class="fas fa-user comentario-icon-usuario"></i>
                    <span class="comentario-nome-usuario">${comentario.nomeUsuario}</span>
                </div>
                <div class="comentario-texto">${comentario.texto}</div>
            </div>
        `).join('');
    }

    function gerarId() {
        var randomGuid = "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx".replace(/x/g, function (c) {
            var r = Math.random() * 16 | 0;
            var v = c === 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
        return randomGuid;
    }

    // Função para adicionar uma nova postagem
    function adicionarPostagem(nomeUsuario, titulo, conteudo) {
        var postagens = JSON.parse(localStorage.getItem('postagens')) || [];

        postagens.push({
            id: gerarId() ,
            nomeUsuario: nomeUsuario,
            titulo: titulo,
            conteudo: conteudo,
            likes: 0,
            data: new Date().toLocaleString()
        });

        localStorage.setItem('postagens', JSON.stringify(postagens));
    }

    // Função para limpar o formulário
    function limparFormulario() {
        document.getElementById('titulo').value = '';
        document.getElementById('conteudo').value = '';
    }

    // Função para atualizar o número de likes de uma postagem
    function updateLikes(postagemId, likes) {
        var postagens = JSON.parse(localStorage.getItem('postagens')) || [];

        postagens.find(x => x.id === postagemId).likes = likes;

        localStorage.setItem('postagens', JSON.stringify(postagens));
        exibirPostagens();
    }

    // Função para limpar o armazenamento local
    function limparLocalStorage() {
        localStorage.removeItem('postagens');
        exibirPostagens();
    }

    // Exibir postagens ao carregar a página
    exibirPostagens();

    // Adicionar evento de envio para o formulário
    document.getElementById('postForm').addEventListener('submit', function (event) {
        event.preventDefault();

        var nomeUsuario = "Usuário"; // Nome temporário
        var titulo = document.getElementById('titulo').value;
        var conteudo = document.getElementById('conteudo').value;

        adicionarPostagem(nomeUsuario, titulo, conteudo);
        exibirPostagens();
        limparFormulario();
    });

    // Adicionar evento de clique para limpar o armazenamento local
    document.getElementById('limparLocalStorage').addEventListener('click', limparLocalStorage);

    // Adicionar evento de clique para os botões de like e dislike
    document.getElementById('postagens').addEventListener('click', function (event) {
        if (event.target.classList.contains('like-btn')) {
            var postagemId = event.target.closest('.postagem').dataset.index;
            var postagens = JSON.parse(localStorage.getItem('postagens')) || [];
            var likes = postagens.find(x => x.id === postagemId).likes || 0;
            likes++;
            updateLikes(postagemId, likes);
        }
        if (event.target.classList.contains('dislike-btn')) {
            var postagemId = event.target.closest('.postagem').dataset.index;
            var postagens = JSON.parse(localStorage.getItem('postagens')) || [];
            var likes = postagens.find(x => x.id === postagemId).likes || 0;
            likes--;
            updateLikes(postagemId, likes);
        }
        if (event.target.classList.contains('enviar-comentario')) {
            var postagemId = event.target.dataset.index;
            var comentario = document.getElementById(`comentario-${postagemId}`).value;
            var postagens = JSON.parse(localStorage.getItem('postagens')) || [];
            if (!postagens.find(x => x.id === postagemId).comentarios) postagens.find(x => x.id === postagemId).comentarios = [];
            postagens.find(x => x.id === postagemId).comentarios.push({
                nomeUsuario: "Usuário", // Nome temporário
                texto: comentario
            });
            localStorage.setItem('postagens', JSON.stringify(postagens));
            exibirPostagens();
        }
    });
});