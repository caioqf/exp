document.addEventListener('DOMContentLoaded', ()=>{
    //carregar todos modais da pagina com a tag .modal
    // var elemens = document.querySelectorAll('.modal')
    // var instances = M.Modal.init(elemens)

    //Carregar só o modal #modal1
    var singleModalElem = document.querySelector('#modal1')
    var instance = M.Modal.getInstance(singleModalElem)
    const modalBtn = document.querySelector('#register')
    modalBtn.addEventListener('click', ()=>{
       M.Modal.init(singleModalElem)
    })
})
var btnLogin = document.querySelector('#enter')

btnLogin.addEventListener('click', async ()=> {

    let data_login = [
        {
            email: document.getElementById('email'),
            password: document.getElementById('password'),
        }
    ]

    const rawResponse = await fetch('http://localhost:3000/logar', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(data_login)
    })
    const content = await rawResponse.json()
    console.log(content);
})

var btnModalRegister = document.querySelector('#register-modal')

btnModalRegister.addEventListener('click',async e => {

    let data_register =  {
        first_name: document.querySelector('#fName').value,
        second_name: document.querySelector('#sName').value,
        gender: document.querySelector('#gender').value,
        email: document.querySelector('#modal-email').value,
        password: document.querySelector('#modal-password').value
    }
    
    // envia os dados do form por JSON pra api
    const rawResponse = await fetch('http://localhost:3000/user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data_register)
      })
        const content = await rawResponse.json()
        if (content.code === "404") {
            window.alert('EMAIL JA CADASTRADO')
        }
    })  
   