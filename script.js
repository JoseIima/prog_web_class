function submeter() {
    let nome = document.getElementById("nome").value 
    let cpf = document.getElementById("cpf").value

    console.log(cpf)
}

function validaCPF(cpf) {
    if(cpf = "") {
        alert("Campo CPF não pode ser vazio")
        return false
    }
}