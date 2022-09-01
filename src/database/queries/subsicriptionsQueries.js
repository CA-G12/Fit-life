const connection = require('../config/connection')

class UserQueries {

    static newSubsucribe = ({ player_id, duration, class_id }) => {
        const query = `INSERT INTO subscriptions (class_id, player_id, duration) VALUES ($1, $1, $2);`
        return connection.query(query, [class_id, player_id, duration])
    }

    static getUserSubsicriptions = (id) => {
        const query = `
        SELECT s.id, o.name as coach, c.name as class, s.creation_time + s.duration as Date, s.status FROM subscriptions s
join classes c 
on c.id = s.class_id
join coaches o
on o.id = c.coach_id
WHERE s.player_id = $1;
        
        `
        return connection.query(query, [id]);
    }

    static disActivateSubsicription = (id) => {
        console.log(id)
        const query = `
            UPDATE subscriptions 
            SET STATUS = 1
            WHERE id = $1 
        `
        return connection.query(query, [id]);
    }

    static activateSubsicription = (id) => {
        const query = `
            UPDATE subscriptions 
            SET STATUS = 0
            WHERE id = $1 
        `
        return connection.query(query, [id]);
    }
}

module.exports = UserQueries
