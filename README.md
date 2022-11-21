Este aplicativo foi desenvolvido para consumir o modelo react native em um dispositivo móvel ou emulador.
O Aplicativo foi desenvovido usando um template react Native e expo  Bare workflow.
Para o banco de dados foi usado o Firebase. 
Para o funcionamento é necessário estar conectado a uma rede de internet. 


## Fluxo de cadastro

1. O primeiro passo é criar uma conta informando um email e senha  válidos. 
2. Em seguida, clicar no botão de cadastrar.
3. Caso o cadastro for concluido com sucesso, o usuário será direcionado para a página de login. 

## Fluxo de login

1. O usuário deverá informar um email e senha cadastrado. 
2. Em seguida, caso os dados informados estiverem corretos, será direcionado para página home. 

## Fluxo de logout

1. Na página home, o usuário deverá cliclar no botão flutuanre localizado no canto inferior esquerdo do footer. Em seguida será direcionado para página de login.

## Fluxo de Criação de tarefas 

1. Na página home, o usuário logado deverá selecioar quais os serviços deseja agendar.
2. Selecionado os serviços, deverá ir para a página de agendamento clicando no botão de agendar.
3. O usuário deverá selecionar a data e hora clicando no botão de selecionar data e hora. 
4. O usuário deverá informar o nome do cliente.
4. Em seguida agendar o serviço clicando no botão Finalizar Agendamento. O usuário será direcionado a pagina HOME caso o serviço seja agendado com sucesso.

## Fluxo de visualização de tarefas 

1. Na página home, o usuário deverá cliclar no botão flutuanre localizado no canto inferior direito do footer.
2. O usuário verá uma lista de tarefas caso tenham sido agendadas na etapa de criação de tarefas.
3. O usuário poderá voltar á pagina anterior clicando no botão voltar.

## Fluxo de recuperação de conta

1. Na página de login, o usuário deverá clicar em esqueci minha senha, em seguida será direcionado a página de recuperação de conta.
2. o usuário deverá digitar o email, caso o email seja um email cadastrado no banco de dados, o usuário receberá na caixa de entrada, um email para recuperação de senha.


## scripts 

## `npm i `
instala as dependências
 
## `expo start` 
Executa o aplicativo 
