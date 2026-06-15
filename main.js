function verificar() {
    
    let idade = Number(document.getElementById("idade").value);
    let genero = document.getElementById("genero").value;
    
    alert("Idade: " + idade + " | Gênero: " + genero);
    
    let generoLower = genero.toLowerCase();
    
    if (idade >= 18) {
        if (generoLower == "masculino") {
            alert("Você é um HOMEM");
        } else if (generoLower == "feminino") {
            alert("Você é uma MULHER");
        } else {
            alert("Gênero não reconhecido. Digite 'masculino' ou 'feminino'");
        }
    } else {
        if (generoLower == "masculino") {
            alert("Você é um MENINO");
        } else if (generoLower == "feminino") {
            alert("Você é uma MENINA");
        } else {
            alert("Gênero não reconhecido. Digite 'masculino' ou 'feminino'");
        }
    }
    
    if (idade >= 18) {
        alert("Você é maior de idade");
    } else {
        alert("Você é menor de idade");
    }
}