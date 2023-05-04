
const Languages = require('./Languages');
const Translate = require('./Translate');
const Detect = require('./Detect');

exports.index = (req, res) => {
    res.render('./index');
}

exports.detect = (req, res, next) => {

    const text = req.body.text || req.query.text;
    if (text) {

        let result = Detect(text);

        result.then((result) => {
            res.status(200).json(result);
        });
    
    } else {
        let err = new Error('Bad Request');
        err.status = 400;
        next(err);
    }
}

exports.languages = (req, res, next) => {

    const scope = req.body.scope || req.query.scope;

    if (scope) {
        let result = Languages(scope);

        result.then((result) => {
            res.status(200).json(result);
        });

    } else {
        let err = new Error('Bad Request');
        err.status = 400;
        next(err);
    }
}
    exports.translate = (req, res, next) => {

        const text = req.body.text || req.query.text;
        const from = req.body.from || req.query.from;
        const to = req.body.to || req.query.to;

        if (text  && to) {   
            let result = Translate(text, to, from);

            result.then((result) => {
                res.status(200).json(result);
            });

        }
        else {
            let err = new Error('Bad Request');
            err.status = 400;
            next(err);
        }

    }


