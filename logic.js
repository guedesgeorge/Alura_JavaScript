/*
O operador && (E lógico) retorna true apenas 
se ambos os operandos 
forem true. Caso contrário, retorna false.

*/

const temExperiencia = true;
const temDiploma = false;

if (temExperiencia || temDiploma) {
    console.log("Pode se candidatar ao emprego, pois possui experiência ou diploma.");
} else {
    console.log("Não pode se candidatar ao emprego.");
}