const { newSubsucribe } = require('../../database/queries/subsicriptionsQueries');
const { newSubValidate } = require('../../config/validate')
const newSub = (req, res) => {
    const body = {
        player_id: req.user.id, duration: req.body.duration, class_id: req.body.class_id
    }

    newSubValidate(body)
        .then(newSubsucribe)
        .then(req.status(201).send())
        .catch(req.status(500).send());
}

module.exports = newSub;
