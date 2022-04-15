const { body, validationResult } = require('express-validator');

exports.registrationRules = () => {
    return [
        body('name').not().isEmpty(),
        body('phone_number').not().isEmpty(),
        body('email').not().isEmpty().isEmail(),
        body('password').not().isEmpty().isLength({ min: 8 })
    ];
}

exports.validate = (request, response, next) => {
    try {
        const errors = validationResult(request);
        if (!errors.isEmpty()) {
            return response.status(400).json({error: errors.array()})
        }
        next();
    }
    catch (error) {
        next(error);
    }
}