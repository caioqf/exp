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

    var data = []

    var fName = document.querySelector('#fName').value
    var sName = document.querySelector('#sName').value
    var email = document.querySelector('#modal-email').value
    var pass = document.querySelector('#modal-password').value
    var gender = document.querySelector('#gender').value

    data = [
        {
            name: fName,
            second_name: sName,
            email: email,
            pass: pass,
            gender: gender
        }
    ]

    // var myInit = { method: 'POST',
    //         accept: 'applicatiom',
    //         headers: {
    //             'Accept': 'application/json',
    //             'Content-Type':'application/json'
    //             },
    //         mode: 'cors',
    //         cache: 'default',
    //         body: data 
    //         };

    // const url = 'http://localhost:3000/registrar'
    // const res = await fetch(url, myInit)
    //     .then(response => {
    //         return response.json()
    //     })
    // console.log('api = ', res)

    const rawResponse = await fetch('http://localhost:3000/registrar', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
      const content = await rawResponse.json();
    
      console.log(content);

})