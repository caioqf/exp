var dataBase = 
{
  users:
  [
    {
      first_name: null,
      second_name: null,
      gender: null,
      email: "caio8200@gmail.com",
      password: null,
    },
    {
      first_name: "Pedro",
      second_name: "Faria",
      gender: "M",
      email: "pedro@gmail.com",
      password: "123456"
    },
    {
      first_name: "Arthur",
      second_name: "Veiga",
      gender: "M",
      email: "arthur@gmail.com",
      password: "1746"
    },
  ]
}


function isUserRegistered(userDataJson){
  //checar se o email passado pelo JSON existe no "banco de dados"
  var result = dataBase.users.filter(e => e.email === userDataJson.find(e => e.email).email)

  if(result.length != 0){
    return true
  }else return false
}

export function registerNewUser(userDataJson){

  if(isUserRegistered(userDataJson)){
    
  }

  }

