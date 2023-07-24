
# Relatório do projeto
Este projeto tem como objetivo construir uma API REST utilizando NodeJs e MongoDB.

Nele, simulamos um app de compras, permitindo obter os produtos disponíveis e manipulá-los no carrinho de compras.

Para a construção da API foram também utilizados o Express, Mongoose, Nodemon e Docker. A escolha de construir a API e o banco de dados utilizando Docker se baseou na flexibilidade e portabilidade que essa solução oferece.

Para inicializar o projeto:

- git clone <git@github.com>:sthefanimartinelli/enafood.git
- docker compose up --build (para subir o projeto)

Utilizamos a extensão Thunder Client para verificar as requisições à API, concluindo que estava funcionando corretamente.

Para construir uma API que respeitasse os requisitos do projeto (inserir, escolher quantidades e remover produtos do carrinho), criamos uma estrutura que altera os dados de cada documento do banco à medida que um campo é alterado (informações de quantidade, preço ou notas dos produtos, email ou nome do cliente).

Uma decisão que foi tomada durante a construção da API é que seria necessário que a informação do preço do produto fosse enviada no body da requisição (ao invés de ser enviado apenas o id do produto para então ser pesquisado no banco). Isso se deve ao fato de que o produto pode passar por variações de preço durante o dia, porém queremos que o cliente seja cobrado pelo valor no momento em que selecionou o produto, evitando assim possíveis problemas judiciais devido à inconsistência de informações. Vale observar, que estamos assumindo que somente o frontend da aplicação terá acesso à API (por algum meio de autenticação), e que o preço do produto será enviado corretamente.

Estudando a escalabilidade da aplicação, ou mesmo em uso em datas comemorativas com picos de acessos, seria interessante que a alteração no banco fosse realizada uma única vez, somente após o cliente finalizar o pedido, para evitar múltiplas chamadas ao banco que causariam um gargalo na aplicação (comum nesses cenários). As informações relativas ao carrinho seriam armazenadas no front-end, diminuindo a quantidade de acessos ao banco, o tempo de resposta para o cliente e a necessidade de escalar em replicas o banco.

Outra decisão de projeto foi utilizar o ODM Mongoose e uma estrutura em duas camadas (Controller e Model) pensando na maior abstração e organização do código, e futura escalabilidade.

Para definir a performance da API, eu utilizaria a biblioteca JMeter para fazer um teste de carga na API e verificar características como o tempo gasto em cada fase especificada, a latência, entre outros fatores.
Um teste significativo seria estimar em quais momentos do dia haveriam picos de uso (por exemplo, 80% dos acessos durante duas horas do almoço e três horas do jantar), para simular a quantidade média real de requests simultâneas que o servidor receberia e assim analisar se a API conseguiria lidar com essa quantidade de acessos e quais possíveis mudanças deveriam ser realizadas.

Infelizmente não foi possível realizar tais testes no prazo especificado do projeto dada à minha curva pessoal de aprendizado.