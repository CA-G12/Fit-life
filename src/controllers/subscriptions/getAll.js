const { getUserSubsicriptions } = require('../../database/queries/subsicriptionsQueries')

const getAll = (req, res) => {
    const id = req.user.id;
    getUserSubsicriptions(id).then(dta => res.status(200).send(dta.rows)).catch(err => res.status(500))
}

module.exports = getAll;