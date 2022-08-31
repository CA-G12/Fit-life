const connection = require('../config/connection')

class UserQueries {

    static newSubsucribe = ({ player_id, duration, class_id }) => {
        const query = `INSERT INTO subscriptions (class_id, player_id, duration) VALUES ($0, $1, $2);`
        return connection.query(query, [class_id, player_id, duration])
    }

    static getUserSubsicriptions = (id) => {
        const query = 'SELECT * FROM subscriptions WHERE player_id = $0'
        return connection.query(query, [id]);
    }

    static disActivateSubsicription = (id) => {
        const query = `
            UPDATE subscriptions 
            SET STATUS = 1
            WHERE player_id = $0 
        `
        return connection.query(query, [id]);
    }

    static activateSubsicription = (id) => {
        const query = `
            UPDATE subscriptions 
            SET STATUS = 0
            WHERE player_id = $0 
        `
        return connection.query(query, [id]);
    }
}

module.exports = UserQueries
/*
fitlife

*/