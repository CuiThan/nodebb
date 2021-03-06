var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
define(["require", "exports", "preact", "emoji"], function (require, exports, preact_1, emoji_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    // import 'preact/devtools';
    var setsEqual = function (arr1, arr2) {
        if (arr1.length !== arr2.length) {
            return false;
        }
        var h1 = {};
        arr1.forEach(function (val) { return h1[val] = true; });
        return arr2.every(function (val) { return h1[val]; });
    };
    var Emoji = function (_a) {
        var editing = _a.editing, canSave = _a.canSave, emoji = _a.emoji, onSave = _a.onSave, onDelete = _a.onDelete, onEditName = _a.onEditName, onEditImage = _a.onEditImage, onEditAliases = _a.onEditAliases, onEditAscii = _a.onEditAscii;
        var imageForm;
        var imageInput;
        var fileNameInput;
        var editImage = function () {
            imageInput.click();
            $(imageInput).one('change', function () {
                if (!imageInput.files.length) {
                    return;
                }
                var fileName = window.utils.generateUUID() + "-" + imageInput.files[0].name;
                fileNameInput.value = fileName;
                $(imageForm).ajaxSubmit({
                    success: function () {
                        onEditImage(fileName);
                        imageInput.value = '';
                    },
                    error: function () {
                        var err = Error('Failed to upload file');
                        console.error(err);
                        window.app.alertError(err);
                        imageInput.value = '';
                    },
                });
            });
        };
        return (preact_1.h("tr", null,
            preact_1.h("td", null,
                preact_1.h("input", { type: "text", className: "form-control", value: emoji.name, onInput: function (e) { return onEditName(e.target.value); } })),
            preact_1.h("td", null,
                preact_1.h("button", { type: "button", className: "btn btn-default", onClick: editImage, dangerouslySetInnerHTML: { __html: emoji_1.buildEmoji({
                            character: '',
                            pack: 'customizations',
                            keywords: [],
                            name: emoji.name,
                            aliases: emoji.aliases,
                            image: emoji.image,
                        }) } }),
                preact_1.h("form", { action: window.config.relative_path + "/api/admin/plugins/emoji/upload", method: "post", encType: "multipart/form-data", style: { display: 'none' }, ref: function (form) { return imageForm = form; } },
                    preact_1.h("input", { type: "file", name: "emojiImage", accept: "image/*", ref: function (input) { return imageInput = input; } }),
                    preact_1.h("input", { type: "hidden", name: "fileName", ref: function (input) { return fileNameInput = input; } }))),
            preact_1.h("td", null,
                preact_1.h("input", { type: "text", className: "form-control", value: emoji.aliases.join(','), onInput: function (e) { return onEditAliases(e.target.value.split(',').filter(Boolean)); } })),
            preact_1.h("td", null,
                preact_1.h("input", { type: "text", className: "form-control", value: emoji.ascii.join(','), onInput: function (e) { return onEditAscii(e.target.value.split(',').filter(Boolean)); } })),
            preact_1.h("td", null, editing ? (preact_1.h("button", { className: "btn btn-success", type: "button", onClick: function () { return onSave(null); }, disabled: !canSave },
                preact_1.h("i", { className: "fa fa-check" }))) : (preact_1.h("button", { className: "btn btn-warning", type: "button", onClick: function () { return onDelete(null); } },
                preact_1.h("i", { className: "fa fa-trash" }))))));
    };
    var blankEmoji = {
        name: '',
        image: '',
        aliases: [],
        ascii: [],
    };
    var EmojiList = /** @class */ (function (_super) {
        __extends(EmojiList, _super);
        function EmojiList(_a) {
            var emojis = _a.emojis;
            var _this = _super.call(this) || this;
            _this.state.previous = emojis.slice();
            _this.state.emojis = emojis.slice();
            _this.state.messages = [];
            _this.state.newEmoji = blankEmoji;
            _this.state.newEmojiMessage = null;
            return _this;
        }
        EmojiList.equal = function (a, b) {
            if (a === b) {
                return true;
            }
            return (a.name === b.name) &&
                (a.image === b.image) &&
                setsEqual(a.aliases, b.aliases) &&
                setsEqual(a.ascii, b.ascii);
        };
        EmojiList.validate = function (all, emoji) {
            var pattern = /^[a-z\-.+0-9_]*$/i;
            var validations = [
                {
                    fn: function () { return !!emoji.name; },
                    message: '<strong>Name</strong> is required',
                },
                {
                    fn: function () { return !!emoji.image; },
                    message: '<strong>Image</strong> is required',
                },
                {
                    fn: function () { return pattern.test(emoji.name); },
                    message: '<strong>Name</strong> can only contain letters, numbers, and <code>_-+.</code>',
                },
                {
                    fn: function () { return emoji.aliases.every(function (alias) { return pattern.test(alias); }); },
                    message: '<strong>Aliases</strong> can only contain ' +
                        'letters, numbers, and <code>_-+.</code> (comma-separated)',
                },
                {
                    fn: function () { return all.every(function (_a) {
                        var name = _a.name;
                        return emoji.name !== name;
                    }); },
                    message: 'Multiple custom emojis cannot have the same <strong>Name</strong>',
                },
            ];
            return validations.filter(function (validation) { return !validation.fn(); });
        };
        EmojiList.prototype.onAdd = function () {
            var emojis = this.state.emojis.slice();
            var previous = this.state.previous.slice();
            var emoji = this.state.newEmoji;
            emojis.push(emoji);
            previous.push(emoji);
            var i = previous.length - 1;
            this.setState({
                previous: previous,
                emojis: emojis,
                newEmoji: blankEmoji,
            });
            this.props.onEdit([emoji.name, emoji]);
        };
        EmojiList.prototype.onSave = function (i) {
            var emojis = this.state.emojis.slice();
            var previous = this.state.previous.slice();
            var emoji = this.state.emojis[i];
            var old = previous.splice(i, 1, emoji)[0];
            emojis.splice(i, 1, emoji);
            this.setState({
                previous: previous,
                emojis: emojis,
            });
            this.props.onEdit([old.name, emoji]);
        };
        EmojiList.prototype.onDelete = function (i) {
            var _this = this;
            var messages = this.state.messages.slice();
            var confirm = function () { return _this.onConfirmDelete(i); };
            var nope = function () {
                var messages = _this.state.messages.slice();
                messages[i] = null;
                _this.setState({
                    messages: messages,
                });
            };
            messages[i] = (preact_1.h("tr", null,
                preact_1.h("td", null,
                    preact_1.h("button", { className: "btn btn-default", type: "button", onClick: nope }, "Cancel")),
                preact_1.h("td", { colSpan: 3 },
                    preact_1.h("span", { class: "help-block" }, "Are you sure you want to delete this emoji?")),
                preact_1.h("td", null,
                    preact_1.h("button", { className: "btn btn-danger", type: "button", onClick: confirm }, "Yes"))));
            this.setState({
                messages: messages,
            });
        };
        EmojiList.prototype.onConfirmDelete = function (i) {
            var emojis = this.state.emojis.slice();
            var previous = this.state.previous.slice();
            var old = previous.splice(i, 1)[0];
            emojis.splice(i, 1);
            this.setState({
                emojis: emojis,
                previous: previous,
            });
            this.props.onDelete(old.name);
        };
        EmojiList.prototype.onEdit = function (i, emoji) {
            var emojis = this.state.emojis.slice();
            emojis.splice(i, 1, emoji);
            this.setState({
                emojis: emojis,
            });
        };
        EmojiList.prototype.render = function (_a, _b) {
            var _this = this;
            var previous = _b.previous, emojis = _b.emojis, messages = _b.messages, newEmoji = _b.newEmoji, newEmojiMessage = _b.newEmojiMessage;
            var rows = [];
            emojis.forEach(function (emoji, i) {
                var all = previous.slice();
                all.splice(i, 1);
                var failures = EmojiList.validate(all, emoji);
                var props = {
                    emoji: emoji,
                    onSave: function () { return _this.onSave(i); },
                    onDelete: function () { return _this.onDelete(i); },
                    onEditName: function (name) { return _this.onEdit(i, __assign({}, emoji, { name: name })); },
                    onEditImage: function (image) { return _this.onEdit(i, __assign({}, emoji, { image: image })); },
                    onEditAliases: function (aliases) { return _this.onEdit(i, __assign({}, emoji, { aliases: aliases })); },
                    onEditAscii: function (ascii) { return _this.onEdit(i, __assign({}, emoji, { ascii: ascii })); },
                    editing: !EmojiList.equal(emoji, previous[i]),
                    canSave: !failures.length,
                };
                rows.push(preact_1.h(Emoji, __assign({}, props, { key: i })));
                rows.push.apply(rows, failures.map(function (_a) {
                    var message = _a.message;
                    return (preact_1.h("tr", { className: "text-danger" },
                        preact_1.h("td", { colSpan: 5, dangerouslySetInnerHTML: { __html: message } })));
                }));
                if (messages[i]) {
                    rows.push(messages[i]);
                }
            });
            var newEmojiFailures = EmojiList.validate(previous, newEmoji);
            return (preact_1.h("table", { className: "table" },
                preact_1.h("thead", null,
                    preact_1.h("tr", null,
                        preact_1.h("th", null, "Name"),
                        preact_1.h("th", null, "Image"),
                        preact_1.h("th", null, "Aliases"),
                        preact_1.h("th", null, "ASCII patterns"),
                        preact_1.h("th", null))),
                preact_1.h("tbody", null, rows),
                preact_1.h("tfoot", null,
                    preact_1.h(Emoji, { emoji: newEmoji, onSave: function () { return _this.onAdd(); }, onDelete: function () { }, onEditName: function (name) { return _this.setState({ newEmoji: __assign({}, newEmoji, { name: name }) }); }, onEditImage: function (image) { return _this.setState({ newEmoji: __assign({}, newEmoji, { image: image }) }); }, onEditAliases: function (aliases) { return _this.setState({ newEmoji: __assign({}, newEmoji, { aliases: aliases }) }); }, onEditAscii: function (ascii) { return _this.setState({ newEmoji: __assign({}, newEmoji, { ascii: ascii }) }); }, editing: true, canSave: !newEmojiFailures.length }),
                    EmojiList.equal(newEmoji, blankEmoji) ? null : newEmojiFailures.map(function (_a) {
                        var message = _a.message;
                        return (preact_1.h("tr", { className: "text-danger" },
                            preact_1.h("td", { colSpan: 5, dangerouslySetInnerHTML: { __html: message } })));
                    }),
                    newEmojiMessage)));
        };
        return EmojiList;
    }(preact_1.Component));
    var Adjunct = /** @class */ (function (_super) {
        __extends(Adjunct, _super);
        function Adjunct() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Adjunct.prototype.render = function (_a) {
            var _this = this;
            var editing = _a.editing, canSave = _a.canSave, adjunct = _a.adjunct, onSave = _a.onSave, onDelete = _a.onDelete, onEditName = _a.onEditName, onEditAliases = _a.onEditAliases, onEditAscii = _a.onEditAscii;
            var emoji = adjunct.name && emoji_1.table[adjunct.name];
            return (preact_1.h("tr", null,
                preact_1.h("td", null,
                    preact_1.h("input", { type: "text", className: "form-control", value: adjunct.name, onInput: function (e) { return onEditName(e.target.value); }, ref: function (input) { return _this.nameInput = input; } })),
                preact_1.h("td", { dangerouslySetInnerHTML: { __html: emoji ? emoji_1.buildEmoji(emoji) : '' } }),
                preact_1.h("td", null,
                    preact_1.h("input", { type: "text", className: "form-control", value: adjunct.aliases.join(','), onInput: function (e) { return onEditAliases(e.target.value.split(',').filter(Boolean)); } })),
                preact_1.h("td", null,
                    preact_1.h("input", { type: "text", className: "form-control", value: adjunct.ascii.join(','), onInput: function (e) { return onEditAscii(e.target.value.split(',').filter(Boolean)); } })),
                preact_1.h("td", null, editing ? (preact_1.h("button", { className: "btn btn-success", type: "button", onClick: function () { return onSave(null); }, disabled: !canSave },
                    preact_1.h("i", { className: "fa fa-check" }))) : (preact_1.h("button", { className: "btn btn-warning", type: "button", onClick: function () { return onDelete(null); } },
                    preact_1.h("i", { className: "fa fa-trash" }))))));
        };
        Adjunct.prototype.componentDidMount = function () {
            var _this = this;
            $(this.nameInput).on('textComplete:select', function () {
                _this.props.onEditName(_this.nameInput.value);
            }).textcomplete([__assign({}, emoji_1.strategy, { replace: function (emoji) { return emoji.name; }, match: /^(.+)$/ })], {
                zIndex: 20000,
            });
        };
        return Adjunct;
    }(preact_1.Component));
    var blankAdjunct = {
        name: '',
        aliases: [],
        ascii: [],
    };
    var AdjunctList = /** @class */ (function (_super) {
        __extends(AdjunctList, _super);
        function AdjunctList(_a) {
            var adjuncts = _a.adjuncts;
            var _this = _super.call(this) || this;
            _this.state.previous = adjuncts.slice();
            _this.state.adjuncts = adjuncts.slice();
            _this.state.messages = [];
            _this.state.newAdjunct = blankAdjunct;
            _this.state.newAdjunctMessage = null;
            return _this;
        }
        AdjunctList.equal = function (a, b) {
            if (a === b) {
                return true;
            }
            return (a.name === b.name) &&
                setsEqual(a.aliases, b.aliases) &&
                setsEqual(a.ascii, b.ascii);
        };
        AdjunctList.validate = function (all, emoji) {
            var pattern = /^[a-z\-.+0-9_]*$/i;
            var validations = [
                {
                    fn: function () { return !!emoji.name; },
                    message: '<strong>Name</strong> is required',
                },
                {
                    fn: function () { return !!emoji_1.table[emoji.name]; },
                    message: '<strong>Name</strong> must be an existing emoji',
                },
                {
                    fn: function () { return emoji.aliases.every(function (alias) { return pattern.test(alias); }); },
                    message: '<strong>Aliases</strong> can only contain ' +
                        'letters, numbers, and <code>_-+.</code> (comma-separated)',
                },
                {
                    fn: function () { return all.every(function (_a) {
                        var name = _a.name;
                        return emoji.name !== name;
                    }); },
                    message: 'Multiple custom extensions cannot have the same <strong>Name</strong>',
                },
            ];
            return validations.filter(function (validation) { return !validation.fn(); });
        };
        AdjunctList.prototype.onAdd = function () {
            var adjuncts = this.state.adjuncts.slice();
            var previous = this.state.previous.slice();
            var adjunct = this.state.newAdjunct;
            adjuncts.push(adjunct);
            previous.push(adjunct);
            var i = previous.length - 1;
            this.setState({
                previous: previous,
                adjuncts: adjuncts,
                newAdjunct: blankAdjunct,
            });
            this.props.onEdit([adjunct.name, adjunct]);
        };
        AdjunctList.prototype.onSave = function (i) {
            var adjuncts = this.state.adjuncts.slice();
            var previous = this.state.previous.slice();
            var adjunct = this.state.adjuncts[i];
            var old = previous.splice(i, 1, adjunct)[0];
            adjuncts.splice(i, 1, adjunct);
            this.setState({
                previous: previous,
                adjuncts: adjuncts,
            });
            this.props.onEdit([old.name, adjunct]);
        };
        AdjunctList.prototype.onDelete = function (i) {
            var _this = this;
            var messages = this.state.messages.slice();
            var confirm = function () { return _this.onConfirmDelete(i); };
            var nope = function () {
                var messages = _this.state.messages.slice();
                messages[i] = null;
                _this.setState({
                    messages: messages,
                });
            };
            messages[i] = (preact_1.h("tr", null,
                preact_1.h("td", null,
                    preact_1.h("button", { className: "btn btn-default", type: "button", onClick: nope }, "Cancel")),
                preact_1.h("td", { colSpan: 3 },
                    preact_1.h("span", { class: "help-block" }, "Are you sure you want to delete this extension?")),
                preact_1.h("td", null,
                    preact_1.h("button", { className: "btn btn-danger", type: "button", onClick: confirm }, "Yes"))));
            this.setState({
                messages: messages,
            });
        };
        AdjunctList.prototype.onConfirmDelete = function (i) {
            var adjuncts = this.state.adjuncts.slice();
            var previous = this.state.previous.slice();
            var old = previous.splice(i, 1)[0];
            adjuncts.splice(i, 1);
            this.setState({
                adjuncts: adjuncts,
                previous: previous,
            });
            this.props.onDelete(old.name);
        };
        AdjunctList.prototype.onEdit = function (i, emoji) {
            var adjuncts = this.state.adjuncts.slice();
            adjuncts.splice(i, 1, emoji);
            this.setState({
                adjuncts: adjuncts,
            });
        };
        AdjunctList.prototype.render = function (_a, _b) {
            var _this = this;
            var previous = _b.previous, adjuncts = _b.adjuncts, messages = _b.messages, newAdjunct = _b.newAdjunct, newAdjunctMessage = _b.newAdjunctMessage;
            var rows = [];
            adjuncts.forEach(function (adjunct, i) {
                var all = previous.slice();
                all.splice(i, 1);
                var failures = AdjunctList.validate(all, adjunct);
                var props = {
                    adjunct: adjunct,
                    onSave: function () { return _this.onSave(i); },
                    onDelete: function () { return _this.onDelete(i); },
                    onEditName: function (name) { return _this.onEdit(i, __assign({}, adjunct, { name: name })); },
                    onEditAliases: function (aliases) { return _this.onEdit(i, __assign({}, adjunct, { aliases: aliases })); },
                    onEditAscii: function (ascii) { return _this.onEdit(i, __assign({}, adjunct, { ascii: ascii })); },
                    editing: !AdjunctList.equal(adjunct, previous[i]),
                    canSave: !failures.length,
                };
                rows.push(preact_1.h(Adjunct, __assign({}, props, { key: i })));
                rows.push.apply(rows, failures.map(function (_a) {
                    var message = _a.message;
                    return (preact_1.h("tr", { className: "text-danger" },
                        preact_1.h("td", { colSpan: 5, dangerouslySetInnerHTML: { __html: message } })));
                }));
                if (messages[i]) {
                    rows.push(messages[i]);
                }
            });
            var newAdjunctFailures = AdjunctList.validate(previous, newAdjunct);
            return (preact_1.h("table", { className: "table" },
                preact_1.h("thead", null,
                    preact_1.h("tr", null,
                        preact_1.h("th", null, "Name"),
                        preact_1.h("th", null, "Emoji"),
                        preact_1.h("th", null, "Aliases"),
                        preact_1.h("th", null, "ASCII patterns"),
                        preact_1.h("th", null))),
                preact_1.h("tbody", null, rows),
                preact_1.h("tfoot", null,
                    preact_1.h(Adjunct, { adjunct: newAdjunct, onSave: function () { return _this.onAdd(); }, onDelete: function () { }, onEditName: function (name) { return _this.setState({ newAdjunct: __assign({}, newAdjunct, { name: name }) }); }, onEditAliases: function (aliases) { return _this.setState({ newAdjunct: __assign({}, newAdjunct, { aliases: aliases }) }); }, onEditAscii: function (ascii) { return _this.setState({ newAdjunct: __assign({}, newAdjunct, { ascii: ascii }) }); }, editing: true, canSave: !newAdjunctFailures.length }),
                    AdjunctList.equal(newAdjunct, blankAdjunct) ? null :
                        newAdjunctFailures.map(function (_a) {
                            var message = _a.message;
                            return (preact_1.h("tr", { className: "text-danger" },
                                preact_1.h("td", { colSpan: 5, dangerouslySetInnerHTML: { __html: message } })));
                        }),
                    newAdjunctMessage)));
        };
        return AdjunctList;
    }(preact_1.Component));
    var App = /** @class */ (function (_super) {
        __extends(App, _super);
        function App(_a) {
            var state = _a.state;
            var _this = _super.call(this) || this;
            _this.state = state;
            return _this;
        }
        App.prototype.render = function (_a, _b) {
            var onEditEmoji = _a.onEditEmoji, onDeleteEmoji = _a.onDeleteEmoji, onEditAdjunct = _a.onEditAdjunct, onDeleteAdjunct = _a.onDeleteAdjunct;
            var emojis = _b.emojis, adjuncts = _b.adjuncts;
            return (preact_1.h("div", null,
                preact_1.h("p", null,
                    "Below you can add custom emoji, and also add new aliases and ASCII patterns for existing emoji. While this list is edited live, you must still ",
                    preact_1.h("strong", null, "Build Emoji Assets "),
                    "to actually use these customizations."),
                preact_1.h("div", { className: "panel panel-default" },
                    preact_1.h("div", { className: "panel-heading" },
                        preact_1.h("h3", { className: "panel-title" }, "Custom Emoji")),
                    preact_1.h(EmojiList, { emojis: emojis, onEdit: onEditEmoji, onDelete: onDeleteEmoji })),
                preact_1.h("div", { className: "panel panel-default" },
                    preact_1.h("div", { className: "panel-heading" },
                        preact_1.h("h3", { className: "panel-title" }, "Custom Extensions")),
                    preact_1.h(AdjunctList, { adjuncts: adjuncts, onEdit: onEditAdjunct, onDelete: onDeleteAdjunct }))));
        };
        return App;
    }(preact_1.Component));
    var initialized = false;
    function init(elem, cb) {
        if (initialized) {
            cb(null);
            return;
        }
        initialized = true;
        socket.emit('admin.plugins.emoji.getCustomizations', function (err, customizations) {
            var props = {
                state: customizations,
                onEditEmoji: function (args) {
                    socket.emit('admin.plugins.emoji.editEmoji', args);
                },
                onDeleteEmoji: function (name) {
                    socket.emit('admin.plugins.emoji.deleteEmoji', name);
                },
                onEditAdjunct: function (args) {
                    socket.emit('admin.plugins.emoji.editAdjunct', args);
                },
                onDeleteAdjunct: function (name) {
                    socket.emit('admin.plugins.emoji.deleteAdjunct', name);
                },
            };
            emoji_1.init(function () {
                preact_1.render((preact_1.h(App, __assign({}, props))), elem);
                cb(null);
            });
        });
    }
    exports.init = init;
});
//# sourceMappingURL=custom-emoji.js.map