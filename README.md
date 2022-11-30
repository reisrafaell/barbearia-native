Este aplicativo foi desenvolvido para consumir o modelo react native em um dispositivo móvel ou emulador.
O Aplicativo foi desenvovido usando um template react Native e expo  Bare workflow.
Para o banco de dados foi usado o Firebase. 
Para o funcionamento é necessário estar conectado a uma rede de internet. 


## Fluxo de cadastro do cliente

1. O primeiro passo é criar uma conta informando um email e senha  válidos. 
2. Em seguida, clicar no botão de cadastrar.
3. Caso o cadastro for concluido com sucesso, o usuário será direcionado para a página de login. 

## Fluxo de login do cliente e do barbeiro

1. O usuário deverá informar um email e senha cadastrado.
   * O barbeiro já possuí um login previamente cadastrado. 
2. Em seguida, caso os dados informados estiverem corretos, será direcionado para página home. 

## Fluxo de logout do cliente e do barbeiro

1. Na página home, o usuário deverá cliclar no botão flutuanre localizado no canto inferior esquerdo do footer. Em seguida será direcionado para página de login.

## Fluxo de agendamento do cliente

1. Na página home, o usuário logado deverá selecioar quais os serviços deseja agendar.
2. Selecionado os serviços, deverá ir para a página de agendamento clicando no botão de agendar.
3. O usuário é redirecionado para uma página que mostra a confirmação dos serviços selecionados anteriormente e agora tem a possibilidade de ver a agenda do barbeiro para escolher o melhor horário e data que esteja disponível e adicionar o seu nome para salvar na agenda.
4. Para marcar uma data e hora o usuário deve clicar no botão "Selecionar a Data e Hora".
5. Já na aba de Data e Hora o usuário consegue visualizar os dias e horários disponíveis na agenda do barbeiro, visto isso ele pode selecionar um horário disponível e clicar no botão "Confirmar". 
6. Ao confirmar ele volta para a aba onde os serviços selecionados são listados.
7. O usuário deverá informar o nome do cliente caso não tenha sido informado anteriormente.
8. Em seguida deve clicar no botão "Finalizar agendamento".
9. Ele receberá um alerta informando que a agenda foi cadastrada com sucesso e será redirecionado para a tela inicial onde poderá selecionar novos serviços para realizar um novo agendamento.

## Fluxo de visualização de agendamento do cliente 

1. Na página home, o usuário deverá cliclar no botão flutuanre localizado no canto inferior direito do footer.
2. O usuário verá uma lista de tarefas caso tenham sido agendadas na etapa de criação de tarefas.
3. O usuário poderá voltar á pagina anterior clicando no botão voltar.

## Fluxo de visualização de agenda do barbeiro

1. O barbeiro deve realizar o login.
2. Sua página hom e já lista um menu na parte superior da tela onde ele pode selecionar as agendas "Abertas" ou "Fechadas"
3. As agendas fechadas lista todos os horários marcados por cliente que ainda não foram finalizados, nesse caso o barbeiro tem a possibilidade de fechar esse agendamento.
4. Já na aba "Fechados" ele visualiza todos os agendamentos que foram finalizados, tendo assim um histórico de atividades realizadas.
5. O barbeiro ainda tem a possibilidade de selecionar o botão "Quadro de Horários" que está centralizado na parte inferior da tela.
6. Na aba de Quadro de horários o barbeiro visualizada as datas e horários disponíveis e já agendados pelos usuários.
7. O barbeiro tem a possibilidade de liberar a agenda clicando no botão "Liberar Agenda" onde todos os horários marcados são liberados.
8. E também tem a opção de clicar em "Trancar Agenda" deixando sua agenda congelada impedindo que os clientes marquem algum horário.

## Fluxo de recuperação de conta

1. Na página de login, o usuário deverá clicar em esqueci minha senha, em seguida será direcionado a página de recuperação de conta.
2. o usuário deverá digitar o email, caso o email seja um email cadastrado no banco de dados, o usuário receberá na caixa de entrada, um email para recuperação de senha.


## scripts 

## `npm i `
instala as dependências
 
## `expo start` 
Executa o aplicativo 
