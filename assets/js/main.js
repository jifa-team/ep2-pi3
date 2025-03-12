fetch("assets/dados/dados.json") // vai buscar os dados na file dados.json que está na raiz do arquivo
    .then(response => {
        if (!response.ok) {
            throw new Error(`Erro ao carregar JSON: ${response.status}`);
        }
        return response.json();
    })
    .then(data => console.log('Dados do JSON', data))
    .catch(error => console.log('Erro: ', error))
    