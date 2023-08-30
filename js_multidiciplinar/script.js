
const form = document.getElementById('formLogin')



class Cadastro  {
    constructor(email,senha,identificador) {
        this.email = email,
        this.senha = senha,
        this.identificador = identificador

    }

        checarIdentificador(identificador) {
            let iden = Number(identificador)
            
        if(Number.isNaN(iden)){
            alert("Insira um numero")
        } else {
            console.log("deu certo")
        }
    }

    

        

        


    
    

}


form.addEventListener("submit", (event) => {
    event.preventDefault();
    let n = true;

    const campos = document.querySelectorAll('.required')

    let email = campos[0].value
    let senha = campos[1].value
    let identificador = campos[2].value



    console.log(email)


    let user =  new Cadastro (email,senha,identificador)

    console.log(user)



    user.checarIdentificador(campos[2].value)

    


})



