// let num = 10;
// console.log(typeof num);

// let isFalsy: boolean = false;
// let langName: string = 'Typescript';



// function greeter1(receiver: string){
// 	return "Hello " + receiver + ".";
// }

// console.log(greeter1('10'));

// const booleanArray: boolean[] = [true, false];
// const strArray: string[] = ['str', 'str2'];
// const numArray: number[] = [1, 2, 3]
// console.log(booleanArray);

// enum NatureTypes {
//     Human = 'human',
// 	Robot = 'robot',
// 	Animal = 'animal'
// }

// interface IEntity {
//  natureType: NatureTypes;
//  name: string;
//  code?: number;
//  birthdate?: number;
// }

// const person: IEntity = {
// 	natureType: NatureTypes.Human,
// 	name: 'Lara',
// 	birthdate: 14081997
// }

// const android: IEntity = {
// 	natureType: NatureTypes.Robot,
// 	name: 'JSBot',
// 	code: 1111
// }

// function analyzer2(receiver: IEntity): string {
// 	return `Hello, ${receiver.name}. You are ${receiver.natureType}.`;
// }

// function analyzer3(param?: string): void {
// 	console.log(param);
// }

// class Animal implements IEntity {
// 	constructor(natureType: NatureTypes, name: string, birthdate?:number){
// 		this.natureType = natureType;
// 		this.name = name;
// 	}
// 	natureType: NatureTypes;
// 	name: string;
// 	birthdate: number | undefined;
// }

// function analyzer3(receiver: IEntity = horse, test?: string): string {
// 	console.log(test);
// 	return `Hello, ${receiver.name}. You are ${receiver.natureType}.`;
//   }

// const horse: Animal = {
// 	natureType: NatureTypes.Animal,
// 	name: 'Cavalo',
// 	birthdate: 11111111
// }

// console.log(analyzer3(horse, 'teste'));

// console.log(analyzer2(person));


// class Queue<T> {
// 	private data = [];
// 	push(item: T) { this.data.push(item); }
// 	pop(): T | undefined { return this.data.shift(); }
//   }

//   const queue = new Queue<number>();
//   queue.push(0);
//   queue.push(1);
// //   queue.push("1");

// /////1. Dado as variáveis abaixo, informe a tipagem de cada um para que o código fique correto.
// const sequence: number[] = Array.from(Array(10).keys());
// const animals: string[] = ['passaro', 'gato', 'cachorro', 'coelho'];
// const stringsAndNumbers: any[] = [1, 'one', 2, 'two', 3, 'three'];
// const stringsAndNumbers2: (string|number)[] = [1, 'one', 2, 'two', 3, 'three'];

// //////2.Crie uma Interface Book para que a função abaixo funcione corretamente. Adicione o parâmetro opcional "author".
// interface IBook {
// 	title: string;
// 	author?: string;
// }

// function addToLibrary(item: IBook) {
//     const response = `Adicionado o livro ${item.title} à sua biblioteca.`;
//     console.log(response);
// }

// const book: IBook = {
// 	title: "Titulo do Livro",
// 	author: 'Autor do Livro'
// }

// console.log(addToLibrary(book));


// /////3.Crie uma Função que adicione dinheiro a uma conta de banco. A função deverá receber dois argumentos: o argumento obrigatório money e o argumento opcional message. Caso message esteja presente, mostre uma mensagem avisando que o dinheiro foi adicionado à conta. Senão mostra só o valor


// function deposit(money: number, message?: string): void {
// 	if (message) {
// 		console.log(message + ': R$ ' + money);
// 	} else {
// 		console.log('R$ ' + money);
// 	}
// }

// deposit(150, 'O dinheiro foi adicionado à conta');


// //////4. Modifique a função baixo para que ela possa receber vários tipos de dados utilizando seu conhecimento de Generics.
// // class Queue<T> {
// // 	private data  = [];
// // 	passValue(value: T) { return value; }
// // }

// function passValue <T>(value: T): T {
//     return value;
// }


// // const queue = new Queue<number>();
// console.log(passValue<number>(15));

// const isAvailable: any = true;

// const getPresents = (isAvailable: any) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (isAvailable) {
//         resolve("I got the presents!");
//       } else {
//         reject(new Error("I'm sorry!"));
//       }
//     }, 2000);
//   });
// };

// getPresents(isAvailable).then(result => {
// 	console.log(result);
// }).catch(err => console.log(err));


// async function getUser (){
// 	const gitHubResponse = fetch('https://api.github.com.br/vangoncalez').then(response => {
// 		response.json().then(user => {
// 			console.log(user);
// 		})
// 	})
// }


/* async function getUserAwait() {
  const githubReponse = await fetch(`https://api.github.com/users/vangoncalez`);

  if (!githubReponse) {
  console.log("erro");
  }

  const githubUser = await githubReponse.json();

  console.log(githubUser);
}

getUserAwait(); */
// const url = 'https://foodish-api.herokuapp.com/api/images';

// async function getFood(){

// 	const request = await fetch(url + '/pizza/');
//   const response = await request.json();

//   console.log(response);
// }

// getFood();


// const param = false;

// const getUser = (param) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (param) {
//         resolve("Promise funcionou");
//       } else {
//         reject("Erro: Promise não funcionou!");
//       }
//     }, 2000);
//   });
// };

// /* getUser(param).then(result => {
//   console.log(result);
// }).catch(error => console.log(error)); */

// async function getResponse() {

// try {
//     const response = await getUser();
//     console.log(typeof response, response);
//   } catch (error) {
//     console.log(error);
//   }

// }
// getResponse();


