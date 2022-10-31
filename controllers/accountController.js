const db = require('../config');
class AccountController{
    static register = async (userObject) => {
        db.connect()
        return new Promise((resolve, reject)=>{
            const sql = `INSERT INTO users (fullname,email,password) VALUE 
            ('${userObject.fullname}','${userObject.email}','${userObject.password}')`
            db.query(sql,(err,result)=>{
                if(result) resolve('registeration successful')
                else reject(err)
            })
        })
    }

    static login = async (userObject) => {
        db.connect()
        return new Promise((resolve, reject)=> {
            const sql = `SELECT * FROM users WHERE email = '${userObject.email}' AND password = '${userObject.password}' `
            db.query(sql,(err,result)=>{
                if (err) {
                    reject(err);
                } 
                else resolve(result)
                // else {
                //     sql = `SELECT * FROM userdata WHERE userid = ${result.id}`;
                //     db.query(sql, (error, res)=>{
                //         if (error) reject(error)
                //         else {
                //             resolve({...result[0], data: res})
                //         }

                //     })
                // }
            } )
        })
    }
}

module.exports= AccountController