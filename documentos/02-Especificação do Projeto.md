# Especificação do Projeto

## Perfis de Usuários

<table>
<tbody>
<tr align=center>
<th colspan="2">Perfil 01 - Idosos </th>
</tr>
<tr>
<td width="150px"><b>Descrição</b></td>
<td width="600px">Célia, aposentada</td>
</tr>
<tr>
<td><b>Necessidades</b></td>
<td>
  
  - Interface simplificada;
  
  - Conteúdo relevante como notícias, artigos de interesse, histórias inspiradoras, dicas de saúde, bem-estar e finanças;

  - Saúde emocional;

  - Interação social;

  - Recursos de áudio e multimídia;

  - Entretenimento
</td>
</tr>
</tbody>
</table>

<table>
<tbody>
<tr align=center>
<th colspan="2">Perfil 02 - Cuidador de Idosos </th>
</tr>
<tr>
<td width="150px"><b>Descrição</b></td>
<td width="600px">Carlos, cuidador de idosos</td>
</tr>
<tr>
<td><b>Necessidades</b></td>
<td>
  
  - Controle dos conteúdos acessados pelos seus pacientes;
  
  - Informações sobre cuidados paliativos e fim de vida;

  - Informações sobre saúde mental;

  - Atividades que estimulem os idosos, sejam elas físicas, cognitivas, sociais ou recreativas.
</td>
</tr>
</tbody>
</table>

<table>
<tbody>
<tr align=center>
<th colspan="2">Perfil 03 - Parentes de idosos </th>
</tr>
<tr>
<td width="150px"><b>Descrição</b></td>
<td width="600px">Leonardo, neto de Laura</td>
</tr>
<tr>
<td><b>Necessidades</b></td>
<td>
  
  - Ter controle sobre os conteúdos acessados pelo idoso;
  
  - Informações sobre cuidados paliativos e fim de vida;
  
  - Informações sobre saúde mental;
  
  - Atividades que estimulem os idosos, sejam elas físicas, cognitivas, sociais ou recreativas.
</td>
</tr>
</tbody>
</table>

<table>
<tbody>
<tr align=center>
<th colspan="2">Perfil 04 - Terapêutas </th>
</tr>
<tr>
<td width="150px"><b>Descrição</b></td>
<td width="600px">Pedro, psicólogo</td>
</tr>
<tr>
<td><b>Necessidades</b></td>
<td>
  
  - Informações sobre cuidados paliativos e de fim de vida;

  - Informações sobre saúde mental;
  
  - Atividades que estimulem os idosos, sejam elas físicas, cognitivas, sociais ou recreativas.
</td>
</tr>
</tbody>
</table>

## Histórias de Usuários

|EU COMO... `QUEM`   | QUERO/PRECISO ... `O QUE` |PARA ... `PORQUE`                 |
|--------------------|---------------------------|----------------------------------|
| Idosa              | Deseja se cadastrar em cursos e conteúdos educacionais.| Quer aprender novas habilidades e manter sua mente ativa durante a aposentadoria.|
| Idoso              | Está em busca de cursos sobre história em sites de fácil navegação.| Tem interesse em aprender mais sobre eventos históricos e quer encontrar facilmente cursos relevantes.|
| Idosa              | Está interessada em notícias e atualidades.| Quer ficar atualizada sobre eventos e notícias locais que afetam sua comunidade.|
| Idoso              | Deseja interagir em um fórum de discussões.| Quer compartilhar suas experiências e aprender com outros membros da comunidade.|
| Idosa              | Busca acesso a recursos de aconselhamento nutricional.| Está obeso e deseja perder peso para melhorar sua saúde.| 
| Idoso              | Quer acessar vídeos educacionais.| Prefere aprender através de vídeos e quer acessar conteúdo em um formato visualmente envolvente.| 
| Idosa              | Quer fazer atividades desafiadoras e interativas na internet.| Gosta de participar de atividades interativas que o desafiam cognitivamente e tornam o aprendizado mais divertido.|
| Idoso              | Quer utilizar uma barra de pesquisas para encontrar um conteúdo específico nos sites.| Sabe exatamente o que está procurando e quer acessar o conteúdo rapidamente.|
| Parente de idoso   | Quer um site onde possa encontrar notícias confiáveis e boas orientações para evitar golpes via internet e celular e recomendar para sua avó.| Sua avó caiu em diversos golpes envolvendo celular e e-mails enganosos no último ano.|
| Parente de idoso   | Quer um aplicativo que forneça informação simplificada e de qualidade sobre novas tecnologias para indicar ao seu avô.| Seu avô tem muita resistência às novas tecnologias e não se sente confiante para aprender mais sobre elas.|
| Cuidadora de idosos| Quer um site onde possa encontrar orientações sobre alimentação, saúde mental e outros assuntos voltados para idosos.| Quer recomendar boas atividades online para os idosos ocuparem o tempo de forma construtiva.|
| Terapeuta          | Busca um site interativo e fácil de usar com atividades para melhorar o bem estar emocional e cognitivo de seus pacientes idosos.| A maioria de seus pacientes são idosos e têm dificuldade de lidar com tecnologias.|

## Requisitos do Projeto

### Requisitos Funcionais


|ID    | Descrição                | Prioridade |
|-------|---------------------------------|----|
| RF-01 | O sistema deve permitir ao usuário cadastrar uma conta fornecendo informações básicas como nome, idade, e-mail de acesso e senha.| **Alta** | 
| RF-02 | O sistema deve possuir uma funcionalidade de pesquisa para permitir ao usuário localizar com facilidade as sessões da aplicação. | **Alta**   |
| RF-03 | O sistema deve permitir ao usuário fazer o login e o logoff em sua conta. | **Alta** | 
| RF-04 | O sistema deve permitir ao usuário alterações no seu cadastro. | **Alta** |
| RF-05 | O sistema deve permitir que os usuários redefinam sua senha caso a esqueçam ou a percam através do envio de um e-mail de redefinição de senha. | **Alta** |
| RF-06 | O sistema deve permitir ao usuário a comunicação via chat com o setor de suporte da aplicação. REAVALIAR | **Média** |
| RF-07 | Os usuários devem poder navegar por uma lista de cursos disponíveis e filtrá-los por categoria de interesse e necessidade.   | **Média** |
| RF-08 | O sistema deve oferecer a possibilidade de integração com redes sociais, permitindo que os usuários compartilhem seu progresso, realizações ou atividades da plataforma em suas redes.  | **Baixa** |
| RF-09 | O sistema deve permitir ao usuário avaliar os recursos da aplicação através de notas sendo 1 ruim até 5 excelente. | **Baixa** |

**Prioridade: Alta / Média / Baixa. 

### Requisitos não Funcionais

[Utilize o modelo de tabela abaixo para apresentar os requisitos não-funcionais]

|ID      | Descrição               |Prioridade |
|--------|-------------------------|----|
| RNF-01 |  ...                    | ...   | 
| ...    |  ...                    | ...   | 

**Prioridade: Alta / Média / Baixa. 

