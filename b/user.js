var dataBase = 
{
  users:
  [
    {
      "first_name": "Caio",
      "second_name": "Faria",
      "gender": "M",
      "email": "caio8200@gmail.com",
      "password": "123"
    },
    {
      "first_name": "Pedro",
      "second_name": "Faria",
      "gender": "M",
      "email": "pedro@gmail.com",
      "password": "1234ASFAS56"
    },
    {
      "first_name": "Arthur",
      "second_name": "Veiga",
      "gender": "M",
      "email": "arthur@gmail.com",
      "password": "17FASF@46"
    }
  ]
}

export function getUsers(){
  return dataBase
}

function isUserRegistered(userDataJson){
  
  //checar se o email passado pelo JSON existe no "banco de dados"

  let result = dataBase.users.filter(e => e.email === userDataJson.email)
  if(result.length){
    return true
  }
  return false
}


export function registerNewUser(userDataJson){
  if(!isUserRegistered(userDataJson)){
    try {
      dataBase.users.push(userDataJson)
      console.log('Usuário cadastrado com sucesso.');
      return { "code": "200" }
      
    } catch (error) {
      console.log(error)
    }

  }else{
    console.log("esse email ja ta cadastrado");
    return { "code": "404"}
  }

}