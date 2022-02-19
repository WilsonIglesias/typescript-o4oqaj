// Import stylesheets
import { greeter } from './greeter';
import './style.css';

//declaracao de constantes
const myVar1: number = 42;
const myVar2: number = 42;

//declaracao de variaveis
let myVar3 = 42;
let myVar4: number = 42;
let myVar5: string = 'olá';

let mySentence: string = `aaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
`;

//utilizando o console
console.log('Olá mundo');

//declarando arrays
let list: number[] = [21, 2, 65, 51, 78, 75, 87, 23, 32, 11];

//utilizando laços de repetição
console.log('Laço');
for (let i = 0; i < 10; i++) {
  console.log(i);
  console.log(list[i]);
}

//utilizando condicionais
if (myVar1 % 2 == 0) {
  console.log(myVar1 + 'é PAR');
} else {
  console.log(myVar1 + 'é ÍMPAR');
}

//utilizando laços e condicionais
for (let i = 1; i <= 10; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}

//declarando tipos enumerados
enum Color {
  Red,
  Green,
  Blue,
}
let c: Color = Color.green;

enum ColorWithReferences {
  Red = 1,
  Green = 2,
  Blue = 3,
}
let c2: ColorWithReferences = ColorWithReferences.Green;

//declarando any
let notSure: any = 42;
notSure = 'Maybe a string instead';
notSure = false;

//declarado void
function aviso(): void {
  console.log('mensagem de alerta!');
}
aviso();

//declarando funções
function soma(n1: number, n2: number): number {
  return n1 + n2;
}
console.log(soma(21, 21));
console.log(soma(1, 2));
function getFullname(pessoa: { name: string; LastName: string }): string {
  return pessoa.name + ' ' + pessoa.LastName;
}
let p = { name: 'Wilson', LastName: 'Oliveira' };
console.log(getFullname(p));

//implementando um contador
let counter = 0;
let intervalId = setInterval(() => {
  counter += 1;
  const counterDiv: HTMLElement = document.getElementById('counterDiv');
  counterDiv.innerHTML = 'Contador: ' + counter;
}, 1000);

//utilizando classe externa
let saudacao = new greeter('Mundo');

let title: string = 'Olá Mundo!';
let paragraph: string = 'aaaaaaaaaaaa';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `
<h1>${title}</h1>
<p>${paragraph}</p>
<div id='counterDiv'></div>
<hr/>
<button id='appButton' onclick="alertTsMethod()">Alertar</button>
<hr/>
<div>${saudacao.getGreeting()}</div>
`;

//declarando uma função para ser invocada por um evento
const btn = document.getElementById('appButton');
btn?.addEventListener('click', alertTsMethod);
function alertTsMethod(this: HTMLElement, ev: Event) {
  alert('Alertando usando typescript');
}
