//spread operator
let primeiros = [1, 2, 3]

let numeros = [primeiros, 4, 5, 6]

let numeros2 = [primeiros, 4, 5, 6]


console.log(numeros);
console.log(numeros2);

//spredando um obj

let pessoa = {
    nome: 'Bernardo',
    idade: '16',
    cargo: 'programador',
};

let dadosPessoa = {
    ...pessoa,
    status: 'ativo',
    ciade: 'campo largo'
}

console.log(dadosPessoa)
console.log(dadosPessoa.cargo);

//exemplificando de uma forma mais realista

function novoUsuario(info) {
    //console.log(info);
    let dados = {
        ...info,
        status: 'ativo',
        inicio: '20/09/2024',
        codigo: '123'

    };
    console.log(dados);
}

novoUsuario({ nome: 'Ademir', sobrenome: 'Santos', cargo: 'Estágiario' });