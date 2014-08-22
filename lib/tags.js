var _ = require("lodash");

exports = module.exports = {};

function isNumber(value) {
    return /^[0-9]+$/.test(value);
}

function parseIfNumber(value) {
    if (isNumber(value)) {
        value = parseInt(value, 10);
    }
    return value;
}
exports.parse = function (args) {
    var options = {
        foo: 'bar'
    };

    _.each(args, function (arg) {
        arg = arg.substr(2);

        var keyValue = arg.split('='),
            key = keyValue[0],
            value = keyValue[1];

        value = parseIfNumber(value);

        options[key] = value;
    });

    return options;
};
