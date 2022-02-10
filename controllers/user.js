
import myknex from '../knex/db_knex.js';
import express from "express";
import jsonwebtoken from "jsonwebtoken";
import bcrypt, { hash } from 'bcrypt';

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
      
      const accessToken = jsonwebtoken.sign(req.body.email, process.env.JWT_SECRET)
      return res.status(200).json({
        msg: 'Logado',
        token: accessToken,
        code: 200
      })
    }
    return res.status(401).json({msg: "Email ou senha inválidos", token: null, code: 401})
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
