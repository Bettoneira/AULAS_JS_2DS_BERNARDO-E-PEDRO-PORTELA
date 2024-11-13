//MAP
//percorre todo o array e executada a ação que tivermos programando

// let lista = ['Altamiro','Barnabé','Cremildo'];

// lista.map((nome,posicao)=>{
//     console.log(`O nome é ${nome} e ele ocupa a posição ${posicao}`);
// })


//REDUCE
//procura reduzir uma array, normalmente através de operações matemáticas, transformando todo o conteúdo do array em um único valor

// let numeros = [2,3,5,10]

// let total = numeros.reduce((acumulador,numero,indice,original)=>{
//     console.log(`${acumulador} - total até agora`);
//     console.log(`${numero} - valor atual`);
//     console.log(`${indice} - valor até agora`);
//     console.log(`${original} - array original`);

//     console.log('--------------------')
//     return acumulador = acumulador*numero;

// });

// console.log(`Total do reduce é ${total}`);

// FIND 
//faz uma busca dentro do array e devolve o primeiro item que ele encontra que corresponde ao critério de busca

// let listagem = [2,3, 'Bernardo',5, 'Aluno'];

// let busca = listagem.find((item2)=>{
//     if (item2 =='Bernardo'){
//         return console.log('Nome encontrado')
//     }else{
//         return console.log('Nome não encontado')
//     };
// });

// FILTER
//filtra itens dentro do array

let palavras = {'alface','beterraba','cenoura'}