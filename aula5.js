<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Aula 5</title>
<script src="aula5.js"></script>
</head>
<body>


</body>
</html>





//concat - método de criar uma nova matriz mesclando matrizes já existentes sem alterar a matriz principal
var meninas=["Thais", "Valentina", "Maria"];
var meninos=["Thales", "Enzo", "José"];

var pessoas=meninas.concat(meninos);
document.write("<br>" + pessoas);


//exemplo com 3 vetores
var v1=["Thais", "Valentina", "Maria"];
var v2=["Thales", "Enzo", "José"];
var v3=["Caio", "Luiza"];

var juncao=v1.concat(v2,v3);
document.write("<br>" + juncao);


//método slice - usado para dividir a matriz em uma nova matriz sem alterar a matriz principal
var frutas = ["Maçã", "Uva", "Abacaxi", "Laranja", "Manga"];

document.write("<br>" + frutas); //impressão normal da matriz
document.write("<br>" + frutas.slice(2)); //nova matriz 


//método splice - usado para inserir novos elementos no array sem alterar a matriz principal
var frutas = ["Maçã", "Uva", "Abacaxi", "Laranja", "Manga"];

document.write("<br>" + frutas.splice(2, 1, "Morango", "Banana")); //"2" - indice a ser excluido; "1" - qtd de elementos a serem excluidos
document.write("<br>" + frutas); //nova matriz

//fila fifo - First in, First out - o primeiro a entrar e o primeiro a sair


//método push - adiciona o elemento no final do array
var alunos = ["Paulo", "Rebeca", "Helen"];
document.write("<br>A quantidade de elementos na fila é: " +alunos.push("Victor")); //na execução do código fica explicitado a quantidade de elementos
document.write("<br>A nova lista é: " +alunos);


//método shift - para remover o primeiro elemento do array
var alunos1 = ["Paulo", "Rebeca", "Helen"];
document.write("<br> O aluno excluido foi: " + alunos1.shift()); //mostrando elemento apagado
document.write("<br> A nova lista é: " + alunos1); //nova matriz


//método unshift - para adicionar elementos no inicio do array
var alunos2 = ["Paulo", "Rebeca", "Helen"];
document.write("<br>A quantidade de elementos na fila é: " + alunos2.unshift("Victor")); //mostrando elemento adicionado
document.write("<br>A nova lista é: " + alunos2); //nova matriz


//Função every - verifica se todos os elementos atendem as condições
var alunos3 = ["Paulo", "Rebeca", "Helen"]; //colocando algo que não seja string, a condição final será "False"
	function todos(elem){
		return(typeof elem=="string");
	}
	document.write("<br>Os elementos atendem todas as condições? " + alunos3.every(todos));


//Função some - verifica se pelo menos um elemento atende as condições
var alunos4 = ["Paulo", "Rebeca", "Helen"];
	function teste(elem){
		return(typeof elem=="number"); //dará false pois NENHUM elemento atende as condições
	}
	document.write("<br>Os elementos atendem todas as condições? " + alunos4.some(teste))


//Função filter - filtra o array com base na busca definida
var frutas = ["Maçã", "Uva", "Abacaxi", "Laranja", "Manga", "Banana"];	
	function lista(elem){
		return(elem.indexOf ("an")>0); //posição do indice (ou vetor) de cada elemento do array
	}
	document.write("<br>" + frutas.filter(lista));
