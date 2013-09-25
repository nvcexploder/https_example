
var internals = {};

exports.register = function (plugin, options, next) {

    plugin.select('https').route({
        method: 'GET',
        path: '/monkeys',
        handler: internals.root,
    });

    return next();
};

internals.root = function(request) {
    request.reply('ohai. this is a request on your other server.');
}