const { validateRegister } = require('../config/validate')
const signUp = (req, res) => {
  validateRegister(req.body)
    .then(/* Checking, Hashing */)
    .catch(err => res.json(err));
}

module.exports = signUp