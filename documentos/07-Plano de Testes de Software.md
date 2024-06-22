# Plano de Testes de Software

[Apresente os cenários de testes a serem utilizados na realização dos testes da aplicação. Escolha cenários de testes que demonstrem os requisitos sendo atendidos. ]

Os testes funcionais a serem realizados na aplicação são descritos a seguir. [Utilize a estrutura abaixo para cada caso de teste]

|Caso de Teste    | CT-01 - Verificar links e formulário da Homepage |
|:---|:---|
| Requisitos Associados | RF-02 e RF-11|
| Objetivo do Teste | Verificar se os links da página Home estão encaminhando para as respectivas páginas corretamente e se o formulário de contato está corretamente configurado |
| Passos | 1- Acessar o navegador / 2- Informar o endereço do site / 3- Visualizar a Homepage / 4- Clicar em todos links da Homepage / 5- Verificar se os campos do formulário estão corretamente configurados |
| Critérios de êxito | Todos os links da página Home devem encaminhar os usuários para alguma das sessões do site e o formulário de contato deve estar funcionando.  |
| Responsável pela elaborar do caso de Teste | Rafael |

|Caso de Teste    | CT-02 - Verificar login e cadastro |
|:---|:---|
| Requisitos Associados | RF-01 e RF-03|
| Objetivo do Teste | Verificar se o login e cadastro estão funcionando corretamente |
| Passos | 1- Acessar o navegador / 2- Informar o endereço do site / 3- Clicar em "Entrar" na barra de navegação / 4- Preencher dados de cadastro e login / 5- Verificar se os campos do formulário estão corretamente configurados / 6- Cadastrar e fazer o login / 7- Ser direcionado para a Página de Perfil|
| Critérios de êxito | Após o cadastro o usuário deve ser direcionado para a aba de login e após o login ser direcionado para a página de perfil. Obs.: as informações devem ficar registradas no Local Storage. |
| Responsável pela elaborar do caso de Teste | Rafael |
 
|Caso de Teste    | CT-03 - Verificar página de perfil e funcionalidade do botão de logout |
|:---|:---|
| Requisitos Associados | RF-04|
| Objetivo do Teste | Verificar se os links da página de perfil e o botão de logout estão funcionando corretamente |
| Passos | 1- Acessar o navegador / 2- Informar o endereço do site / 3- Verificar se dados do usuário na página de perfil estão corretos / 4- Verificar se links na barra de navegação estão funcionando / 5- Retornar à página de perfil / 6- Pressionar o botão de logout / 7- Ser redirecionado para página de login e cadastro.|
| Critérios de êxito | Links devem estar funcionando e após o logout o usuario deve ser redirecionado para página de login e cadastro Obs.: informações do usuário logado devem ter desaparecido do local storage. |
| Responsável pela elaborar do caso de Teste | Rafael |
