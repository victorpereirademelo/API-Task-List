// function fabrica() {
//     const nome = nome => nome;
//     const sobrenome = sobrenome => sobrenome;

//     return {
//         nome,
//         sobrenome
//     }
// };

// console.log(fabrica().nome('Victor'));
// console.log(fabrica().sobrenome('Pereira'));

// function Construtora() {
//     this.nome = nome => nome;
//     this.sobrenome = sobrenome => sobrenome;
// };

// console.log(new Construtora().nome('Victor'));
// console.log(new Construtora().sobrenome('Pereira'));

// class Pessoa {
//     constructor(nome, sobrenome) {
//         this.nome = nome;
//         this.sobrenome = sobrenome;
//     }

//     falarNome() {
//         return this.nome + ' ' + this.sobrenome;
//     }
// };

// console.log(new Pessoa('Victor', 'Pereira').falarNome());

// class Pessoa {
//     constructor() {
//         this.nome = 'Rafael';
//         this.sobrenome = 'Pereira'
//     }

//     static falarNome(nome, sobrenome) {
//         return nome + ' ' + sobrenome;
//     }

//     falarOutroNome() {
//         return this.nome + ' ' + this.sobrenome;
//     }

//     static teste = () => 'Teste na Class';
// };

// console.log(Pessoa.falarNome('Victor', 'Pereira'));
// console.log(new Pessoa().falarOutroNome());
// console.log(Pessoa.teste());

// const obj = {
//     normal() {
//         return 'Normal';
//     },

//     teste: () => 'Teste no Obj',
// };

// console.log(obj.normal());
// console.log(obj.teste());