/*

O operador && (E lógico) retorna true apenas se ambos 
os operandos forem true.
 Caso contrário, retorna false.

*/

const idade = 17;
const possuiCarteira = true;

if (idade >= 18 && possuiCarteira) {
    console.log("Pode dirigir, possui idade suficiente e carteira de motorista.");
} else {
    console.log("Não pode dirigir.");
}