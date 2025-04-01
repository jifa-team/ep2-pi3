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
│   │   ├── home.css        # Estilos específicos para a página de home
│   │   ├── login.css       # Estilos específicos para a página de login
│   │   ├── clinica.css       # Estilos específicos para a página clínica
│   │   ├── painel-cliente.css  # Estilos específicos para a página painel-cliente
│   │   └── cadastro.css    # Estilos específicos para a página de cadastro
│   ├── dados/              # Pasta de dados JSON
│   │   ├── dados.json      # Arquivo com dados json para validação de formulário
│   ├── js/                 # Arquivos JavaScript
│   │   ├── main.js         # Scripts globais
│   │   ├── login.js        # Scripts específicos para a página de login
│   │   └── cadastro.js     # Scripts específicos para a página de cadastro
│   │   └── padronizacao.js # Scripts que faz o carregamento do Header e Footer nos placeholders
│   └── images/             # Imagens utilizadas no projeto
│       └── home/           # Imagens específicas da home
│       └── quemsomos/      # Imagens específicas da página quem somos
│       └── clinica/        # Imagens específicas da página clínica
│           ├── apresentacao-clinica.png     # Imagem do plano coletivo
│           ├── img-instalacao-1.png    # imagem da instalação 1
│           ├── img-instalacao-2.png    # imagem da instalação 2
│           ├── img-instalacao-3.png    # imagem da instalação 3
│       └── painel-cliente/         # Imagens específicas da página painel do cliente
│           ├── blog1-jifa.png     # blog post 1
│           ├── blog2-jifa.png    # blog post 2
│           ├── blog3-jifa.png    # blog post 3
│           ├── profile.jpg    # imagem perfil do usuario
│       └── planos/         # Imagens específicas dos planos
│           ├── img.png     # Imagem do plano coletivo
│           ├── img1.png    # Benefício 1
│           ├── img2.png    # Benefício 2
│           └── img3.png    # Benefício 3
│       └── videos/         # vídeo específico para uso na página quem somos 
├── views/                    # Pasta para páginas relacionadas ao views
│   ├── templates/            # Pasta com os templates padronizados
│   │   ├── header.html       # Template do Header padronizado
│   │   ├── footer.html       # Template do Footer padronizado
│   ├── login                 # Página de login (🔐 views/login)
│   ├── cadastro              # Página de cadastro (📝 views/cadastro)
│   ├── home                  # Página de home (📝 views/home)
│   ├── quemsomos             # Página de quem somos (📝 views/quem somos)
│   ├── clinica/              # Página clínica (📝 views/clinica)
│   ├── painel-cliente/       # Página painel do cliente (📝 views/painel-cliente)
│   ├── aquisicao.html        # Página de aquisição do plano escolhido (🛒 views/planos)
│   ├── plano-coletivo.html   # Página do plano coletivo, benefícios e carências           
│   ├── plano-familiar.html   # Página do plano familiar, benefícios e carências          
│   ├── plano-individual.html # Página do plano individual, benefícios e carências
│   └── telainicio.html       # Página de início com os tipos de planos e benefícios gerais
```

---


### Como utilizar o projeto?
- **1. Clonar o Projeto:**
git clone https://github.com/jifa-team/ep2-pi3.git
- **2. Dentro do projeto, clique do mouse direito em alguma página dentro de "Views", e abra a página com o seu Live Server do VSCode!**

### Fluxo de Trabalho Simplificado
- **1. Clonar o Projeto:**
git clone https://github.com/jifa-team/ep2-pi3.git
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
- **🦷 Clínica**: Página de apresentação da estrutura da clínica. 
- **📊 Painel do Cliente**: Página para acessar área logada do sistema.
<<<<<<< HEAD
- **🏠 Home**: Página inicial do sistema, apresentando informações gerais.
- **📄 Quem Somos**: Página institucional sobre a empresa.
- **🛒 Aquisição de Planos**: Página para aquisição do plano escolhido.
- **👥 Plano Coletivo**: Página com informações sobre o plano coletivo, benefícios e carências.
- **👨‍👩‍👧 Plano Familiar**: Página com informações sobre o plano familiar, benefícios e carências.
- **🧍 Plano Individual**: Página com informações sobre o plano individual, benefícios e carências.
- **📌 Tela de Início**: Página inicial com apresentação dos tipos de planos e benefícios gerais.
=======
- **📊 Planos**: Página de início dos planos de saúde ofertados pela Clínica.
- **🦷 Tipos de Planos**: Página de tipos de planos de saúde ofertados pela Clínica e suas carências.
- **💰 Aquisição de Planos**: Página de aquisição de planos de saúde ofertados pela Clínica e forma de pagamento.


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
