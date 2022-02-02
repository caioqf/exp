import knex from "knex";
import knexfile from "../knexfile.js";

const myknex = knex(knexfile.development)

export default myknex