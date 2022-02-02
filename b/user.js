import { getAllUsersDb, isUserRegistered, loginUserDb, registerNewUserDb } from "../db/db.js"

export async function getUsers(){
  var dataBase = await getAllUsersDb()
  return dataBase
}

export async function registerNewUser(userDataJson){
  if(!await isUserRegistered(userDataJson.email)){
    registerNewUserDb(userDataJson)
    return true
  }else return false
  
}

export async function loginUser(userDataJson){
  if (await isUserRegistered(userDataJson.email)) {
    loginUserDb(userDataJson.email, userDataJson.password)
  }
}