import sqlite3 from 'sqlite3'

const db = await new sqlite3.Database('src/profhacks2024-db/db.sqlite', sqlite3.OPEN_READWRITE, err => {
    if(err){
        console.log(err.message)
    } else {
        console.log('db connection successful')
    }
})

export const getCounties = async() => {
    return await db.run('SELECT * FROM nj_counties;')
}