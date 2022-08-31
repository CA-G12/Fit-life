const connection =require('../config/connection')

  class ClassesQueries { 
      constructor(){
        let query ;
      }
        showAllClasses(){
            return connection.query('SELECT name, description, price, image FROM classes ');
        }

        showClassById(id){
            this.query = { 
              text :'SELECT name, description, price, image FROM classes WHERE id=$1' ,
              values : [id]
            }
            return connection.query(this.query);
        }

        showCoachOfClass(coach_id){
          this.query = {
              text : 'SELECT name ,email , phonenumber FROM coaches WHERE id=$1',
              values : [coach_id]
            }
            return connection.query(this.query);
        }

        showClassByPrice(sort){
          this.query = sort =='descending'? 'SELECT name , description ,price ,image FROM classes Order By price DESC' 
          : 'SELECT name , description ,price ,image FROM classes ';
            return connection.query(this.query);
        }
 }
 module.exports = ClassesQueries