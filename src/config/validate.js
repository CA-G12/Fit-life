const Joi = require('joi')

const validateRegister = (user) => {
    const schema = Joi.object({
        name: Joi.string().required().min(3).max(50),
        email: Joi.string(),
        password: Joi.string().required().min(6).max(16),
        confirm: Joi.ref('password')
    });

    return schema.validateAsync(user, {
        abortEarly: false
    })
        .then(retVal)
        .catch(retVal)
}

const retVal = (message) => {

    return new Promise((response, reject) => {
        if (message.details) {
            const data = message.details.map(element => {
                return { el: element['context']['key'], msg: element.message }
            })
            reject(data);
        }
        else response(message);
    })

}

const validateSignIn = (user) => {
    const schema = Joi.object({
        email: Joi.string().required(),
        password: Joi.string().required().min(6).max(16),
    });

    return schema.validateAsync(user, {
        abortEarly: false
    })
        .then(retVal)
        .catch(retVal)
}

const newSubValidate = (user) => {
    const schema = Joi.object({
        class_id: Joi.number().required(),
        duration: Joi.number().required(),
    });

    return schema.validateAsync(user, {
        abortEarly: false
    })
        .then(retVal)
        .catch(retVal)
}
module.exports = {
    validateRegister,
    validateSignIn,
    newSubValidate
}
