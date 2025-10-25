let recepcionista = "Morgana"
let heroi = "Kenochis";
let xp = 1000;

console.log(heroi + " entrou na guilda de aventureiros.");
console.log(recepcionista + ": Olá " + heroi + "! Seja bem-vindo à Guilda de Aventureiros.")
console.log(heroi + ": Olá! Vim vender os monstros que derrotei para ganhar Xp.");
console.log(recepcionista + ": Certo, e quais monstros você trouxe? Lembrando que diferentes monstros dão diferentes quantidades de Xp.");

let monstros = [
    ["Abyssal Hydra", 4000],
    ["Golem Gigante", 6000],
    ["Gargoyle King", 8000]
];
console.log(heroi + ": Aqui estão os monstros: " + monstros[0][0] + " e " + monstros[1][0] + ".");
console.log(recepcionista + ": Ótimo! Vou calcular o Xp total que você ganhou.");

let xpTotal = monstros[0][1] + monstros[1][1];

console.log(recepcionista + ": Seu pagamento total é de " + xpTotal + " Xp com esses monstros.");

while (xp < 11000){
    console.log("Você ganhou 1000 Xp.");
    xp += 1000;
}

console.log(recepcionista + ": Parabéns! Você agora tem " + xp + " Xp.");
console.log(recepcionista + ": Sua classificação anterior era de Bronze.");
console.log(recepcionista + ": Você gostaria de saber sua classificação atual?");
console.log(heroi + ": Sim, por favor.");

switch (true){
    case (xp <= 1000):
    console.log("Classificação: Bronze");
    break;

    case (xp >= 1001 && xp <= 2000):
    console.log("Classificação: Prata");
    break;

    case (xp >= 2001 && xp <= 3000):
    console.log("Classificação: Ouro");
    break;

    case (xp >= 3001 && xp <= 4000):
    console.log("Classificação: platina");
    break;

    case (xp >= 4001 && xp <= 5000):
    console.log("Classificação: Diamante");
    break;

    case (xp >= 5001 && xp <= 7000):
    console.log("Classificação: Ascendente");
    break;

    case (xp >= 7001 && xp <= 8000):
    console.log("Classificação: Imortal");
    break;

    case (xp >= 8001 && xp <= 10000):
    console.log("Classificação: Radiant");
    break;

    case (xp > 10000):
        console.log("Classificação: Mythic");
        break;

}
console.log(recepcionista + ": Parabéns " + heroi + "! Sua classificação atual é Mythic!");
console.log(heroi + ": Uau! Muito obrigado!");
console.log(recepcionista + ": O prazer é meu. Volte sempre que quiser vender mais monstros ou verificar sua classificação.");