var intervalo = parseInt(prompt('Digite um número para o intervalo Máximo do número secreto: '))
var numeroSecreto = parseInt(Math.random()*intervalo)
var tentativas = 3

while (tentativas > 0){
  var chute = prompt('Digite um número entre 0 e 10: ')
  chute = parseInt(chute)

  if (numeroSecreto == chute){
    alert('Acertou!. O número secreto é: '+ numeroSecreto)
    console.log('Acertou!. O número secreto é: '+ numeroSecreto)
    exit
  }else if (chute > numeroSecreto){
    alert('O número secreto é menor.')
    console.log('O número secreto é menor')
    tentativas -= 1
  }else if (chute < numeroSecreto){
    alert('O número secreto é maior.')
    console.log('O número secreto é menor')
    tentativas -= 1
  }
}

if (chute != numeroSecreto){
  alert('Suas tentativas acabaram. O número secreto era: ' + numeroSecreto)
  console.log('Suas tentativas acabaram. O número secreto era: '+ numeroSecreto)  
}

/*
MENTALISTA E NÚMEROS ALEATÓRIOS
PARTICIPE E VÁ MAIS FUNDO
Nesta terceira aula da Imersão Dev, vamos criar uma jogo de adivinhação, onde o programa escolhe um número aleatório e nós vamos tentar acertar. O projeto inicial se encontra no link abaixo:

https://codepen.io/imersao-dev/pen/c9bc2321ec180ad7483501ad8a1e7d3d

Não se esqueça de fazer o fork desse projeto para a sua conta, e de marcar a hashtag da #imersaodev e #alura.

Nesta aula, enquanto escrevemos nosso programa vamos aprender mais ferramentas de lógica de programação, que podem ser utilizadas juntas e que permitem que nossos programas sigam por diversos caminhos, de acordo com as informações e dados recebidos.

Conteúdo detalhado dessa aula
Realizar o fork do projeto com template inicial;
Fazer testes utilizando console.log();
Criar a lógica por trás do "chute" com if, else if e else;
Criar a lógica para controlar a quantidade de tentativas com while;
Utilizar a função Math.random() do JavaScript para criar números aleatórios;
Praticar o uso em conjunto de condicionais e loops, e refletir sobre em que momento cada trecho de código é executado.
Desafios dessa aula!
Modifique o cenário do mentalista e adicione mecanismos de chances, pontos e etc!
O comando break pode ser substituído para que o código saia do while sem ele. Você consegue pensar em uma alternativa?
Alterar o math.random() para funcionar com outros intervalos entre números.
Links importantes para você acompanhar a aula
Repositório do código final da aula 2
Conteúdos extras:
while no MDN
Math.random() no MDN
Como compartilhar seu CodePen:
Clique na opção Settings no canto superior direito;
Selecione a opção Pen Details (Detalhes);
No campo Pen Title você pode dar o nome do seu projeto;
No campo Pen Description, você pode dar detalhes sobre o projeto (o que ele faz, qual objetivo do projeto);
Para compartilhar seu projeto, no campo Tags, você pode adicionar #imersaodev,#alura
Agora só salvar seu projeto e compartilhar o link marcando a Alura nas redes sociais!
*/