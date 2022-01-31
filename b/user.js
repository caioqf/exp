import { getAllUsersDb, verifyUserEmailDb, registerNewUserDb } from "../a/db.js"

export async function getUsers(){
  var dataBase = await getAllUsersDb()
  return dataBase
}

async function isUserRegistered(userDataJson){
  let res = await verifyUserEmailDb(userDataJson.email)
  // console.log(res);
  return res

}

export async function registerNewUser(userDataJson){
   if(!await isUserRegistered(userDataJson)){
      await registerNewUserDb(userDataJson)
   }
   
}