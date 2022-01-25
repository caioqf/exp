var dataBase = 
{
  users:
  [
    {
      first_name: "Caio",
      second_name: "Faria",
      gender: "M",
      email: "caio8200@gmail.com",
      password: "131322%!@ASGA",
    },
    {
      first_name: "Pedro",
      second_name: "Faria",
      gender: "M",
      email: "pedro@gmail.com",
      password: "1234ASFAS56"
    },
    {
      first_name: "Arthur",
      second_name: "Veiga",
      gender: "M",
      email: "arthur@gmail.com",
      password: "17FASF@46"
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

  if(!isUserRegistered(userDataJson)){

    try {
      dataBase.users.push(userDataJson)
      console.log('Usuário cadastrado com sucesso.');
      console.log(dataBase.users);
    } catch (error) {
      console.log(error)
    }
  }else{
    console.log('Email ja cadastrado.');
  }
}

