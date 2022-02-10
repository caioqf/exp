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
import bcrypt, { hash } from 'bcrypt';

// nao loga nem registra nada de fato. No momento apenas implementando a validação de token
// num register/login fake
const login = async (req, res) => {

  if(!req.body.email || !req.body.password){
    throw new Error()
  }
  await myknex.select('pass')
  .from('usuarios')
  .where('email', req.body.email)
  .pluck('pass')
  .then(async (passReturned) => {

    if(passReturned.length != 0 &&  await bcrypt.compare(req.body.password, JSON.stringify(passReturned).replace(/[\[\]"]+/g,''))){
      return res.status(200).json({msg: 'Logado'})
    }
    return res.status(401).json({msg: "Email ou senha inválidos"})
  }).catch(err=> {
    console.log(`[ERROR]: ${err}`);
  })
}

const register = async (req, res) => {
  let hashPass = await bcrypt.hash(req.body.password, 10)

  myknex.select('email')
  .from('usuarios')
  .where('email', req.body.email)
  .then(userReturned => {
    if(userReturned.length === 0){
      return myknex('usuarios')
        .insert({
          first_name: req.body.first_name,
          second_name: req.body.second_name,
          gender: req.body.gender,
          email: req.body.email,
          pass: hashPass
        })
        .then(()=>{res.status(200).json({msg: "cadastrado com sucesso"})})
    }
    return res.status(404).json({msg: "email ja cadastrado"}) 
  })

}

//talvez esteja redundante com a função de registrar alguem, que verifica se ja existe antes
const verifyUser = async (req, res, next) => {

  myknex.select('email')
  .from('usuarios')
  .where('email', req.body.email)
  .then(userReturned => {
    if(userReturned.length === 0){
      console.log('nao existe esse login');
      return res.sendStatus(401)
    } else next()
  })
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

export  {
  login, register, verifyUser, getUsers
}
