const { newSubsucribe } = require('../../database/queries/subsicriptionsQueries');
const { newSubValidate } = require('../../config/validate')

const newSub = (req, res) => {
    
    const date = new Date();
    const fulldate = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`
   
    const body = {
        player_id: req.user.id, duration: req.body.duration, class_id: req.body.class_id , creation_time: fulldate
    }

        newSubsucribe(body).then(res.status(201).send())
        .catch(res.status(500).send());
}

module.exports = newSub;
