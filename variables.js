const notaPrimeiroBi = 8;
const notaSegundoBi = 6.3;
const notaTerceiroBi = 7;
const notaQuartoBi = 9;

let media = (notaPrimeiroBi + notaSegundoBi + notaTerceiroBi + notaQuartoBi) / 4;


if(media  >= 7){
  media  += media * 0.1;

}

console.log(`a media é ${media.toFixed(2)}`);
