import var_dump from 'var_dump'
import pg from 'pg';


const Client = pg.Client;

const client = new Client({
    host: 'localhost',
    database: 'exp',
    port: 5432,
    user: 'postgres',
    password: '1746',
})

const pool = new pg.Pool({
    database: 'exp',
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: '1746',
})
 
export async function getUsersDb(){
    try {
        await pool.connect()
        const result = await pool.query("select * from usuarios")
        return result.rows
    } catch (error) {
        console.log(`[ERRO]: ${error}`);
    }
}


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
