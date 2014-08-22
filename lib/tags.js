var _ = require("lodash");

exports = module.exports = {};

exports.parse = function (args) {
    var options = {};

    _.each(args, function (arg) {
        arg = arg.substr(2);

        var keyValue = arg.split('='),
            key = keyValue[0];

        options[key] = keyValue[1];
    });

    return options;
};
