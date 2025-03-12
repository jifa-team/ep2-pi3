# Jifa Odonto - Sistema de Clínica Odontológica

Este projeto é um sistema web para uma clínica odontológica, desenvolvido como parte da disciplina de Projeto Integrado III junto com Desenvolvimento para Web. O sistema permite que os clientes realizem login, cadastro, visualizem informações sobre a clínica, planos odontológicos e acessem uma área restrita com funcionalidades personalizadas.

---

## Estrutura de Pastas
```
jifa-odonto/
├── index.html              # Página inicial (🏠 views/home)
├── README.md               # Documentação do projeto
├── assets/                 # Pasta para recursos estáticos
│   ├── css/                # Arquivos CSS
│   │   ├── styles.css      # Estilos globais
│   │   ├── footer.css      # Estilos aplicados ao footer
│   │   ├── header.css      # Estilos aplicados ao header
│   │   ├── login.css       # Estilos específicos para a página de login
│   │   └── cadastro.css    # Estilos específicos para a página de cadastro
│   ├── dados/              # Pasta de dados JSON
│   │   ├── dados.json      # Arquivo com dados json para validação de formulário
│   ├── js/                 # Arquivos JavaScript
│   │   ├── main.js         # Scripts globais
│   │   ├── login.js        # Scripts específicos para a página de login
│   │   └── cadastro.js     # Scripts específicos para a página de cadastro
│   │   └── padronizacao.js # Scripts que faz o carregamento do Header e Footer nos placeholders
│   └── images/             # Imagens utilizadas no projeto
├── views/                  # Pasta para páginas relacionadas ao views
│   ├── templates/          # Pasta com os templates padronizados
│   │   ├── header.html     # Template do Header padronizado
│   │   ├── footer.html     # Template do Footer padronizado
│   ├── login/              # Páginas de login
│   │   ├── index.html      # Página de login (🔐 views/login)
│   │   └── error.html      # Página de erro de login (⚠️ views/login/error)
│   └── cadastro/           # Página de cadastro
│       └── index.html      # Página de cadastro (📝 views/cadastro)
└── ...
```


---

### Fluxo de Trabalho Simplificado
- **1. Clonar o Projeto:**
git clone https://github.com/jifa-team/ep1-pi3.git  
- **2. Criar Nova Branch:**
git checkout -b nome-da-sua-branch
- **3. Fazer um Commit**
    - git add .  
    - git commit -m "Descrição clara do commit, não tão longa, mas que seja intuitiva e descreva o trabalho que você fez" 
>[!WARNING] Atualizar o README.MD, na parte de **ESTRUTURA DE PASTAS** e de **PÁGINAS DISPONÍVEIS** com as pastas criadas por você durate o desenvolvimento e sua descrição.

- **4. Enviar para o GitHub:**
git push origin nome-da-sua-branch  
- **5. Abrir Pull Request (PR):**
    - Acesse o repositório no GitHub.
    - Vá para Pull Requests > New Pull Request.
    - Selecione nome-da-sua-branch e descreva as mudanças mais abrangentemente.
## Tecnologias Utilizadas

- **HTML5**: Para a estruturação das páginas.
- **CSS3**: Para a estilização e design responsivo.
- **JavaScript**: Para a interatividade e validação de formulários.
- **Fetch API**: Para comunicação assíncrona com o backend (feito mockado, ou seja, simulado.).

---



## Páginas Disponíveis

- **🔐 Login**: Página de login para clientes.
- **📝 Cadastro**: Página de cadastro de novos clientes.

---

## Critérios Avaliativos e Requisitos do Projeto - Desenvolvimento para Web

### 1. Estrutura e Estilização das Páginas (2.5 pontos)
- **HTML Semântico**: Uso correto de elementos semânticos.
- **CSS Responsivo**: Design que funcione em mobile e desktop.
- **Layout Limpo**: Posicionamento adequado de elementos, com margens, paddings e alinhamentos corretos.
- **Esquema de Cores e Tipografia**: Harmonioso e com boa experiência de usuário.

### 2. Funcionalidades e Validação de Formulários (3.0 pontos)
- **Tela Principal**: Exibição de informações relevantes e barra de navegação funcional.
- **Tela de Login**: Validação de credenciais e mensagens de erro específicas.
- **Tela de Cadastro**: Formulário completo com validações robustas (nome, e-mail, senha, etc.).
- **Tela de Sobre/Dashboard**: Informações institucionais ou personalizadas, com elementos dinâmicos.

### 3. Manipulação de Eventos e Comunicação com Backend (2.0 pontos)
- **Eventos Interativos**: Pelo menos cinco eventos, como clique, validação dinâmica e feedback visual.
- **Fetch API**: Requisições assíncronas simulando comunicação com o backend.
- **Contratos de Comunicação**: Estruturação de requisições e respostas no formato JSON.

### 4. Qualidade do Código e Organização (1.5 pontos)
- **Separação de Arquivos**: HTML, CSS e JavaScript em arquivos distintos.
- **Boas Práticas**: Nomenclatura significativa, código legível e organização modular.
- **Versionamento**: Uso do Git com commits descritivos e branches organizadas.
- **README.md**: Documentação detalhada do projeto.

### 5. Critérios Adicionais de Avaliação (1.0 ponto)
- **Consistência Visual**: Padrão visual uniforme entre as telas.
- **Versionamento**: Estrutura clara de commits e branches no Git.

---

## Critérios Avaliativos e Requisitos do Projeto - Projeto Integrado III (Entregável II)

### 1. Funcionalidades Principais Funcionando 
- **Explicação do Código-Fonte**: Documentação clara das funcionalidades implementadas.
- **Processos de Software**: Uso de boas práticas de desenvolvimento e modularização.

### 2. Validação dos Formulários e Responsividade
- **Validação de Formulários**: Validação no lado do cliente (JavaScript) e simulação no lado do servidor.
- **Feedback ao Usuário**: Mensagens de erro claras e específicas para entradas inválidas.
- **Design Responsivo**: Funcionamento em dispositivos móveis e desktop.

### 3. Organização do Repositório no GitHub
- **Estrutura de Pastas**: Organização clara e lógica dos arquivos.
- **Versionamento**: Uso do Git com commits descritivos e branches bem definidas.
- **Disponibilidade do Código-Fonte**: Repositório público no GitHub.

### 4. Documentação Detalhada 
- **README.md Completo**: Explicação do projeto, tecnologias utilizadas e instruções de execução.
- **Justificativas e Discussões**: Decisões de projeto embasadas e discutidas.
- **Detalhamento de Processos**: Explicação dos processos de validação e responsividade.

### 5. Critérios Adicionais de Avaliação 
- **Consistência Visual**: Padrão visual uniforme entre as telas.
- **Uso Correto de Versionamento**: Estrutura clara de commits e branches no Git.

----