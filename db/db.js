
import bcrypt, { hash } from 'bcrypt';
import jsonwebtoken from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

export async function getAllUsersDb(){
    try {

        let result = myknex.select('*').table('usuarios')
        return result
    
    } catch (error) {

        console.log(`[ERRO]: ${error}`);
    }
}

// export async function isUserRegistered(emailArg){

//         let exists = myknex.select('email')
//         .from('usuarios')
//         .where('email', emailArg)
//         .then(result => {
//             if(result.length===0){
//                 return false
//             }else return true
//         })

//         return await exists;
// }

// export async function registerNewUserDb(userDataJson){   

//     // ao invés de criar uma const pra salt, é possivel passar direto
//     //pelo segundo parametro de hash() o tamaho da salt, no caso abaixo, 10
//     // const salt = await bcrypt.genSalt()

//     let hashPass = await bcrypt.hash(userDataJson.password, 10)
//     myknex('usuarios')
//     .insert({
//         first_name: userDataJson.first_name,
//         second_name: userDataJson.second_name,
//         gender: userDataJson.gender,
//         email: userDataJson.email,
//         pass: hashPass
//     })
//     .catch(err => {
//         console.log(`[ERROR]: ${err}`);
//     })
// }

// export async function loginUserDb(emailUser, passwordUser){
    
//     try {
//         let pass = await myknex('usuarios')
//         .select('pass')
//         .where({
//             email: emailUser
//         }).pluck('pass')
        
//         //possivel gambiarra abaixo 
//         if(await bcrypt.compare(passwordUser, JSON.stringify(pass).replace(/[\[\]"]+/g,''))) {
//             console.log('é igual');
//             const accessToken = jsonwebtoken.sign(emailUser, process.env.JWT_TOKEN)
//             return { accessToken: accessToken}
//         } else {
//             console.log('nao é igual');
//             return { accessToken: false }
//             }

//     } catch (err) {
        
//         console.log(`[ERROR AQ]: ${err}`);
//     }
// }

