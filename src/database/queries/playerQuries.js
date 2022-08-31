const  connection=require('../config/connection');

class PlayerQueries {
  constructor (){
      let query ;
    }
      getUserById = (email) => {
          this.query='select * from players where email=$1'
          return connection.query(this.query,[email])
    }
    storeUser = (name_,email,hashPasword) => {
      this.query='insert into players(name,email,hashpassword) values($1,$2,$3) returning id'
      return connection.query(this.query,[name_,email,hashPasword])
}

}
module.exports=PlayerQueries;