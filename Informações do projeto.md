# O que é para ser feito?

<ul> 
    <li>
    Criar uma Home (página inicial) de listagem de alguns pokemons,
    utilizando a api https://pokeapi.co/
    </li>
    <li>
    Criar uma página interna de detalhe do pokemon.
    </li>
</ul>

<h2>Considerações:</h2>

<ul style='list-style-type: square'>
    <li>
    [ X ] A home deve apresentar uma listagem com 10 pokemons iniciais.
    </li>
    <li>
    [ X ] A home deve ter um botão "Carregar mais" abaixo dessa lista,
    que quando clicado deve buscar mais 10 pokemons e adicionar
    a listagem atual.
    </li>
    <li>
    [ X ] Essa listagem deve mostrar a imagem e nome de cada pokemon.
    </li>
    <li>
    [ X ] Na listagem cada pokemon deve ser clicável e ao clicar o usuário
    deve poder acessar uma página interna desse pokemon com
    informações detalhadas, nessa página de detalhes devem
    aparecer as seguintes informações:
     <ul>
        <li>Imagem do pokemon</li>
        <li>Nome</li>
        <li>Lista de movimentos do pokemon (moves)</li>
        <li>Lista de habilidades do pokemon (abilities)</li>
        <li>a lista de habilidades deve apresentar o nome e o texto</li>
        <li>descritivo da habilidade</li>
        <li>Tipo do pokemon (type)</li>
    </ul>
    </li>
    <li>
        <strong>
            Essa home deve ter um botão para que o usuário possa alternar de cor entre tema claro e tema escuro (light/dark)
        </strong>
    </li>
</ul>

<h2>Requisitos Tecnicos</h2>

<p>Para realização deste desafio, deverão ser observados os seguintes requisitos:</p>

<ul>
    <li>
        A aplicação deverá ser Single Page Application (SPA);
    </li>
    <li>
        Utilizar React.js para o desenvolvimento da aplicação;
    </li>
    <li>
       Utilizar Context API para criação do Theme Toggler (Alternador entre tema claro e escuro);
    </li>
    <li>
       Utilizar styled-components para estilização dos componentes;
    </li>
    <li>
       Utilizar react-router-dom para a navegação entre as páginas;
    </li>
</ul>

<h2>README.md</h2>

<ul>
    <li>
        Breve descrição do propósito da aplicação;
    </li>
    <li>
        Breve descrição das funcionalidades da
        aplicação entregue;
    </li>
    <li>
        Ferramentas utilizadas, e o por que estas foram
        escolhidas para a realização do desafio;
    </li>
    <li>
        Decisões adotadas durante o planejamento e
        execução do desafio, justificando-as;
    </li>
    <li>
        Passo a passo dos comandos para que
        possamos rodar o seu projeto no nosso
        computador
    </li>
</ul>

<h2>O que será avaliado?</h2>

<ul>
    <li>Usabilidade</li>
    <li>Criatividade</li>
    <li>Boas práticas</li>
    <li>Código limpo e organização</li>
    <li>Capacidade de tomada de decisões técnicas</li>
</ul>

<h2>Desafio Bônus(vai te destacar)</h2>

<ul>
    <li>
    Implementar testes utilizando jest ou outra biblioteca para testes unitários.
    </li>
    <li>
    Fazer um campo input de filtro ou select para que o usuário possa filtrar pelo tipo de pokemon e listar só pokemons daquele tipo
</li>
</ul>