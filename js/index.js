

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

var btnModalRegister = document.querySelector('#register-modal')

btnModalRegister.addEventListener('click',async e => {

    var data = [
        {
            name: document.querySelector('#fName').value,
            second_name: document.querySelector('#sName').value,
            email: document.querySelector('#modal-email').value,
            pass: document.querySelector('#modal-password').value,
            gender: document.querySelector('#gender').value
        }
    ]
    
    // envia os dados do form por JSON pra api
    const rawResponse = await fetch('http://localhost:3000/registrar', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
      const content = await rawResponse.json();
    
      console.log(content)
})