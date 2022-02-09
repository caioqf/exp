//cod antigo não modular

// import { getAllUsersDb, isUserRegistered, loginUserDb, registerNewUserDb } from "../db/db.js"
// import jsonwebtoken from 'jsonwebtoken';
// import dotenv from 'dotenv';

// dotenv.config();


// export async function getUsers(){
//   //createDb()
//   var dataBase = await getAllUsersDb()
//   return dataBase
// }

// export async function registerNewUser(userDataJson){
//   if(!await isUserRegistered(userDataJson.email)){
//     registerNewUserDb(userDataJson)
//   }
// }

// export async function loginUser(userDataJson){
//   if (await isUserRegistered(userDataJson.email)) {
//     loginUserDb(userDataJson.email, userDataJson.password)
//     .then(token => {
//       console.log('TOKEN: ',token);
//     })
//     return true
//   }else return false
// }

// export async function authenticateToken(req, res, next) {
//   const authHeader = req.headers['authorization']
//   const token = authHeader && authHeader.split(' ',[1])

//   if(token == null) return res.sendStatus(401)

//   jsonwebtoken.verify(token, procecss.env.JWT_TOKEN, (err, user)=>{
//       if(err) return res.sendStatus(403)
//       const auth = false
//       next()
//   })
// }
import myknex from '../knex/db_knex.js';
import express from "express";
import jsonwebtoken from "jsonwebtoken";

// nao loga nem registra nada de fato. No momento apenas implementando a validação de token
// num register/login fake
const login = async (req, res) => {
  const email = req.body.email
  const password = req.body.password

  if(!email || !password){
    throw new Error()
  }
  
  const token = jsonwebtoken.sign(email, process.env.JWT_SECRET)

  res.status(200).json({msg: 'user created', token})
}

const register = async (req, res) => {
  let hashPass = await bcrypt.hash(req.body.password, 10)
  myknex('usuarios')
  .insert({
      first_name: req.body.first_name,
      second_name: req.body.second_name,
      gender: req.body.gender,
      email: req.body.email,
      pass: hashPass
  })
  .catch(err => {
      console.log(`[ERROR]: ${err}`);
  })
}
// -----

const verifyUser = async (req, res) => {
  let exists = myknex.select('email')
  .from('usuarios')
  .where('email', req.body.email)
  .then(result => {
      if(result.length===0){
          return false
      }else return true
  })
  if(!exists){
    res.status(401).json({exists: exists})
  }else{
    res.status(200).json({exists: exists})
    next()
  }
}

const getUsers = async (req, res) => {

  try {

    let result = myknex.select('*').table('usuarios')
    .then(result => {
      res.status(200).json(result)
    })


  } catch (error) {
      console.log(`[ERROR]: ${error}`);
  }
}

export {
  login, register, verifyUser, getUsers
}