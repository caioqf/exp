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
