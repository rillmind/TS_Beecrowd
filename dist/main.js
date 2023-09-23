"use strict";
function HelloWorld() {
    let mensagem = 'Hello, World!';
    alert(mensagem);
}
function soma() {
    let número1 = prompt('insira o primeiro número aqui');
    let número2 = prompt('insira o segundo número aqui');
    let n1 = Number(número1);
    let n2 = Number(número2);
    let soma = n1 + n2;
    alert('A soma é: ' + soma);
}
function area_do_circulo() {
    const n = 3.14159;
    let valor_do_raio = prompt('Digite o valor do raio');
    const raio = Number(valor_do_raio);
    const raioQ = raio * raio;
    const area = raioQ * n;
    alert('A área do círculo é: ' + area);
}
function multiplicação() {
    let n1 = prompt('Digite o primeiro número');
    let n2 = prompt('Digite o segundo');
    let an = Number(n1);
    let bn = Number(n2);
    alert(an * bn);
}
function media1() {
    let nota1 = prompt('Digite a primeira nota:');
    let nota2 = prompt('Digite a segunda nota:');
    let n1 = Number(nota1);
    let n2 = Number(nota2);
    const p1 = 3.5;
    const p2 = 7.5;
    let media = ((n1 * p1) + (n2 * p2)) / (p1 + p2);
    alert(media);
}
