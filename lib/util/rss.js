var FeedMe = require('feedme'),
    http = require('http'),
    promise = require('promise');

function RSS(url) {
    return new Promise(function (resolve, reject) {
        var obj = {};
        http.get(url, function(res) {
            var items = [];
            var parser = new FeedMe();
            parser.on('item', function(item) {
                item.description = item.description.trim();

                items.push(item);
            });
            res.pipe(parser);
            obj.items = items;
            obj.generated = new Date();
            resolve(obj);
        });
    });
}

module.exports = RSS;
