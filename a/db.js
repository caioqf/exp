import var_dump from 'var_dump'
import pg from 'pg';


const pool = new pg.Pool({
    database: "exp",
    host: "localhost",
    port: 5432,
    user: "postgres",
    password: "1746"
})



export async function getAllUsersDb(){
    try {
        await pool.connect()
        let result = await pool.query("select * from usuarios")
        console.log(result.rows);
        return result.rows

    } catch (error) {
        console.log(`[ERRO]: ${error}`);
    }
}

export async function verifyUserEmailDb(email){
        //conecta ao db
        await pool.connect()

        const query = {
            text: 'select * from usuarios where email = $1',
            values: [email],
        }
        let result = await pool.query(query)
        
        if (result.rows.length === 1) {
            return true
        } else {
            return false
        }
}

export async function registerNewUserDb(userDataJson){
    const query = {
        text: 'insert into usuarios (first_name, second_name, gender, email, pass) values ($1, $2, $3, $4, $5)',
        values: [userDataJson.first_name,
                 userDataJson.second_name, 
                 userDataJson.gender, 
                 userDataJson.email, 
                 userDataJson.password],
    }
    try {
        let result = await pool.query(query)
        console.log('Usuario registrado.');
    } catch (error) {
        console.log(`[ERROR]: ${error}`);
    }
}














// const Client = pg.Client;

// const client = new Client({
//     host: "localhost",
//     database: "exp",
//     port: 5432,
//     user: "postgres",
//     password: "1746",
// })

// Usando Client, a conexão é fechada e bloqueada, apenas uma por cliente
// Diferente de pools, que uma pool é criada e o cliente fica nela por um
// tempo pre determinado, e assim podendo fazer mais requisições ao banco

// export async function getUsersDb(){
//     try {
//         await client.connect()
//         const result = await client.query("select * from usuarios")
//         // console.log(result.rows);
//         return result.rows
//     } catch (error) {
//         console.log(`[ERRO]: ${error}`);
//     }
//     finally{
//         await client.end()
//     }
// }
