/// <amd-module name="emoji"/>
define("emoji", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var base = window.config.relative_path + "/plugins/nodebb-plugin-emoji";
    exports.base = base;
    var buster = window.config['cache-buster'];
    exports.buster = buster;
    function buildEmoji(emoji, defer) {
        var whole = ":" + emoji.name + ":";
        var deferClass = defer ? ' defer' : '';
        if (emoji.image) {
            return "<img\n      " + (defer ? 'data-' : '') + "src=\"" + base + "/emoji/" + emoji.pack + "/" + emoji.image + "?" + buster + "\"\n      class=\"not-responsive emoji emoji-" + emoji.pack + " emoji--" + emoji.name + " " + deferClass + "\"\n      title=\"" + whole + "\"\n      alt=\"" + emoji.character + "\"\n    />";
        }
        return "<span\n    class=\"emoji-" + emoji.pack + " emoji--" + emoji.name + "\"\n    title=\"" + whole + "\"\n  ><span>" + emoji.character + "</span></span>";
    }
    exports.buildEmoji = buildEmoji;
    exports.strategy = {
        match: /\B:([^\s\n:]+)$/,
        search: function (term, callback) {
            callback(exports.search(term.toLowerCase().replace(/[_-]/g, '')).slice(0, 10));
        },
        index: 1,
        replace: function (emoji) {
            return ':' + emoji.name + ': ';
        },
        template: function (emoji) {
            return buildEmoji(emoji) + ' ' + emoji.name;
        },
        cache: true,
    };
    var initialized = false;
    function init(callback) {
        if (initialized) {
            if (callback) {
                setTimeout(callback, 0);
            }
            return;
        }
        initialized = true;
        Promise.all([
            new Promise(function (resolve_1, reject_1) { require(['fuzzysearch'], resolve_1, reject_1); }),
            new Promise(function (resolve_2, reject_2) { require(['leven'], resolve_2, reject_2); }),
            new Promise(function (resolve_3, reject_3) { require(['composer/formatting'], resolve_3, reject_3); }),
            $.getJSON(base + "/emoji/table.json?" + buster),
        ]).then(function (_a) {
            var fuzzy = _a[0], leven = _a[1], formatting = _a[2], tableData = _a[3];
            exports.table = tableData;
            var all = Object.keys(exports.table).map(function (name) {
                var emoji = exports.table[name];
                return {
                    name: name,
                    aliases: emoji.aliases,
                    keywords: emoji.keywords,
                    character: emoji.character,
                    image: emoji.image,
                    pack: emoji.pack,
                };
            });
            function fuzzyFind(term, arr) {
                var l = arr.length;
                for (var i = 0; i < l; i += 1) {
                    if (fuzzy(term, arr[i])) {
                        return arr[i];
                    }
                }
                return null;
            }
            function fuzzySearch(term) {
                function score(match, weight) {
                    var weighted = weight * (1 + leven(term, match));
                    return match.startsWith(term) ? weighted - 2 : weighted;
                }
                return all.filter(function (obj) {
                    if (fuzzy(term, obj.name)) {
                        obj.score = score(obj.name, 1);
                        return true;
                    }
                    var aliasMatch = fuzzyFind(term, obj.aliases);
                    if (aliasMatch) {
                        obj.score = score(aliasMatch, 3);
                        return true;
                    }
                    var keywordMatch = fuzzyFind(term, obj.keywords);
                    if (keywordMatch) {
                        obj.score = score(keywordMatch, 7);
                        return true;
                    }
                    return false;
                }).sort(function (a, b) { return a.score - b.score; }).sort(function (a, b) {
                    var aPrefixed = +a.name.startsWith(term);
                    var bPrefixed = +b.name.startsWith(term);
                    return bPrefixed - aPrefixed;
                });
            }
            exports.search = fuzzySearch;
            formatting.addButtonDispatch('emoji-add-emoji', function (textarea) {
                new Promise(function (resolve_4, reject_4) { require(['emoji-dialog'], resolve_4, reject_4); }).then(function (_a) {
                    var toggleForInsert = _a.toggleForInsert;
                    return toggleForInsert(textarea);
                });
            });
            if (callback) {
                setTimeout(callback, 0);
            }
        }).catch(function (err) {
            var e = Error('[[emoji:meta-load-failed]]');
            console.error(e);
            window.app.alertError(e);
            throw err;
        });
    }
    exports.init = init;
});
//# sourceMappingURL=emoji.js.map