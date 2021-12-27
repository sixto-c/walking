const joi = require('@hapi/joi');

const schemas = {
    auth : joi.object().keys({
        user : joi.string().required(),
        pass : joi.string().min(3).max(15).required()
    })
}
module.exports = {schemas};
//ctrl y alt para ver funciones de joi