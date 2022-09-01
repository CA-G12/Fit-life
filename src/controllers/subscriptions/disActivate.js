const { disActivateSubsicription } = require('../../database/queries/subsicriptionsQueries')

const disActivate = (req, res) => {
    const id = req.params.id;
    disActivateSubsicription(id).then(dta => res.status(200).send(true)).catch(err => res.status(500))
}

module.exports = disActivate;