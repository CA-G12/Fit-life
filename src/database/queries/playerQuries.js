const  connection=require('../config/connection');

class PlayerQueries {
  constructor (){
      let query ;
    }
    getUserById = (id) => {
      this.query='select * from players where email=$1'
      return connection.query(this.query,[id])
}
getUserByI = (id) => {
  this.query='select * from players where id=$1'
  return connection.query(this.query,[id])
}
    storeUser = (name_,email,hashPasword) => {
      this.query='insert into players(name,email,hashpassword) values($1,$2,$3) returning id'
      return connection.query(this.query,[name_,email,hashPasword])
}

}
module.exports=PlayerQueries;