import { getAllUsersDb, verifyUserEmailDb, registerNewUserDb } from "../a/db.js"

var dataBase = await getAllUsersDb()

export async function getUsers(){
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