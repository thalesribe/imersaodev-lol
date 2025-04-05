// criar lista com os jogadores 
function jogar () {personagem = ["","",""]
adversario = ["","",""]

forcapersonagem = 0
forcaavdversario = 0
alert ("O array personagem contém: " + personagem)
for (let i=0; i<3; i++){
  escolhapersonagem = prompt("Digite o nome do seu personagem! " + (i + 1))
    personagem[i] = escolhapersonagem
  forcapersonagem = forcapersonagem + Math.floor(Math.random() * 10) + 1 
  // calcular força dos jogadores e depois somar para saber a força total 
  // forcapersonagem += Math.floor(Math.random() * 10) + 1 as duas formas fazem a mesma coisa 
  
 
}

console.log("Agora o array personagem contém: " + personagem)
console.log("Inicio Adversários: " + adversario)

for (let i=0; i<3; i++) {
  indicealeatorio = Math.floor(Math.random() * 10)
possiveisadversarios = ["Teemo", "Tristana", "Lulu", "Rumble", "Veigar", "Poppy", "Heimerdinger", "Kennen", "Ziggs", "Vex"]
  adversario[i] = possiveisadversarios[indicealeatorio]
  forcaavdversario = forcaavdversario + Math.floor(Math.random() * 10) + 1
    // forcaadversario += Math.floor(Math.random() * 10) + 1 as duas formas fazem a mesma coisa 
  alert("Os adversarios são: " + adversario[i])
  // calcular a força do time adversário
} 
console.log("Adverários: " + adversario)

// comparar os dois times para saber quem ganhou 

if (forcapersonagem > forcaavdversario) {
  alert("Vitória! Seu time (" + personagem.join(", ") + ") deu " + forcapersonagem + " de dano e destruiu o Nexus inimigo!");
} 
                   else if (forcapersonagem < forcaavdversario) {
  alert("Derrota! Seu time (" + personagem.join(", ") + ") deu apenas " + forcapersonagem + " de dano. O Nexus foi destruído!\n" +
  "Tomou GAP do time adversário (" + adversario.join(", ") + "), que causou " + forcaavdversario + " de dano.");

} 
                   else {
  alert(
  "Empate!!! Seu time (" + personagem.join(", ") + ") deu " + forcapersonagem + " de dano. " +
  "O time adversário (" + adversario.join(", ") + ") também causou " + forcaavdversario + " de dano. " +
  "Será que foi FF aos 15?"
);
                                
}
}
