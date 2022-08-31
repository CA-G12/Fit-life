const { activateSubsicription } = require('../../database/queries/subsicriptionsQueries')

const activate = (req, res) => {
    const id = req.user.id;
    activateSubsicription(id).then(dta => res.status(200).send(true)).catch(err => res.status(500))
}

module.exports = activate;