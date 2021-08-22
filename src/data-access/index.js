import makeUsersDb from './users-db.js'
import makeChecksDb from './checks-db.js'
import mysql from 'mysql2/promise'
import dotenv from 'dotenv'
dotenv.config()

const host = process.env.MYSQL_HOST
const user = process.env.MYSQL_USER
const password = process.env.MYSQL_PASSWORD
const database = process.env.MYSQL_DATABASE

export async function makeDb () {
  const pool = await mysql.createPool({ 
    host     : host,
    user     : user,
    password : password,
    database : database
  });

  return pool;
}

const usersDb = makeUsersDb({ makeDb })
const checksDb = makeChecksDb({ makeDb })

const DatabaseService = Object.freeze({
  usersDb,
  checksDb
})

export default DatabaseService
export { usersDb, checksDb }