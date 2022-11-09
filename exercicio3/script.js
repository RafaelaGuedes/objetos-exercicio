const pokemon1 = {
	nome: "Bulbasaur",
	tipo: "Grama",
	nivel: 5
};

const copiapoke ={
    ...pokemon1
}

//letra a
copiapoke.nome=("Squirtle")
copiapoke.tipo=("Água")
console.log(copiapoke)

//letra b
pokemon1.ataques=[]
console.log(pokemon1)

//letra c-
const ataque = {
    nome: "Investida",
    dano: 40,
    tipo: "Normal",
    precisao: 100
}

pokemon1.ataques.push(ataque)
console.log(pokemon1)

//letra c
copiapoke.ataques = {...pokemon1.ataques}

console.log(copiapoke)

//letra d


pokemon1.ataques[1]={
    nome: "Folha Navalha",
    dano: 45,
    precisao: 100,
    tipo: "Grama"
}

console.log(pokemon1)

//letra e

copiapoke.ataque={
    nome: "Jato de Água",
    dano: 40,
    precisao: 100,
    tipo: "Água"
}
console.log(copiapoke)





