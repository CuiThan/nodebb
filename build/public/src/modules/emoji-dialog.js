/// <amd-module name="emoji-dialog"/>
define("emoji-dialog", ["require", "exports", "translator", "composer/controls", "scrollStop", "emoji"], function (require, exports, translator_1, controls_1, scrollStop_1, emoji_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var $html = $('html');
    exports.dialogActions = {
        open: function (dialog) {
            $html.addClass('emoji-insert');
            dialog.addClass('open');
            dialog.find('.emoji-dialog-search').focus();
            return dialog;
        },
        close: function (dialog) {
            $html.removeClass('emoji-insert');
            return dialog.removeClass('open');
        },
    };
    var priorities = {
        people: 10,
        nature: 9,
        food: 8,
        activity: 7,
        travel: 6,
        objects: 5,
        symbols: 4,
        flags: 3,
        regional: 2,
        modifier: 1,
        other: 0,
    };
    // create modal
    function init(callback) {
        Promise.all([
            $.getJSON(emoji_1.base + "/emoji/categories.json?" + emoji_1.buster),
            $.getJSON(emoji_1.base + "/emoji/packs.json?" + emoji_1.buster),
            new Promise(function (resolve) { return emoji_1.init(resolve); }),
        ]).then(function (_a) {
            var categoriesInfo = _a[0], packs = _a[1];
            var categories = Object.keys(categoriesInfo).map(function (category) {
                var emojis = categoriesInfo[category].map(function (name) { return emoji_1.table[name]; });
                return {
                    name: category,
                    emojis: emojis.map(function (emoji) { return ({
                        name: emoji.name,
                        html: emoji_1.buildEmoji(emoji, true),
                    }); }),
                };
            }).sort(function (a, b) {
                var aPriority = priorities[a.name] || 0;
                var bPriority = priorities[b.name] || 0;
                return bPriority - aPriority;
            });
            window.templates.parse('partials/emoji-dialog', {
                categories: categories,
                packs: packs,
            }, function (result) {
                translator_1.translate(result, function (html) {
                    var dialog = $(html).appendTo('body');
                    dialog.find('.emoji-dialog-search').on('input', function (e) {
                        var value = e.target.value;
                        if (!value) {
                            dialog.find('.emoji-dialog-search-results').addClass('hidden');
                            dialog.find('.nav-tabs .emoji-dialog-search-results').next().find('a').tab('show');
                            return;
                        }
                        var html = emoji_1.search(value)
                            .slice(0, 100)
                            .map(function (emoji) {
                            return "<a class=\"emoji-link\" name=\"{../name}\" href=\"#\">" + emoji_1.buildEmoji(emoji, false) + "</a>";
                        })
                            .join('\n');
                        dialog.find('.tab-pane.emoji-dialog-search-results').html(html);
                        dialog.find('.emoji-dialog-search-results').removeClass('hidden');
                        dialog.find('.nav-tabs .emoji-dialog-search-results a').tab('show');
                    });
                    var tabContent = dialog.find('.emoji-tabs .tab-content');
                    function showDeferred(container) {
                        var rect = tabContent[0].getBoundingClientRect();
                        var num = Math.ceil((rect.width * rect.height) / (40 * 40));
                        container
                            .find('.emoji-link img.defer')
                            .filter(function (i, elem) {
                            if (i <= num) {
                                return true;
                            }
                            var elemRect = elem.getBoundingClientRect();
                            return elemRect.right > rect.left &&
                                elemRect.left < rect.right &&
                                elemRect.bottom > rect.top &&
                                elemRect.top < rect.bottom;
                        })
                            .removeClass('defer')
                            .each(function (i, elem) {
                            var src = elem.getAttribute('data-src');
                            elem.setAttribute('src', src);
                        });
                    }
                    var firstTab = dialog.find('.emoji-tabs .nav-tabs a').click(function (e) {
                        e.preventDefault();
                        $(e.target).tab('show');
                    }).on('show.bs.tab', function (e) {
                        showDeferred($(e.target.getAttribute('href')));
                    }).eq(1);
                    setTimeout(function () { return firstTab.trigger('show.bs.tab'); }, 10);
                    tabContent.on('scroll', function (e) {
                        showDeferred(tabContent.find('.tab-pane.active'));
                    });
                    scrollStop_1.apply(tabContent[0]);
                    var close = function () { return exports.dialogActions.close(dialog); };
                    $(window).on('action:composer.discard action:composer.submit', close);
                    dialog.find('.close').click(close);
                    if (dialog.draggable) {
                        dialog.draggable({
                            handle: '.top-bar',
                        });
                    }
                    callback(dialog);
                });
            });
        });
    }
    exports.init = init;
    function toggle(opener, onClick) {
        function after(dialog) {
            if (dialog.hasClass('open')) {
                exports.dialogActions.close(dialog);
                return;
            }
            dialog.off('click').on('click', '.emoji-link', function (e) {
                e.preventDefault();
                var name = e.currentTarget.name;
                onClick(e, name, dialog);
            });
            var buttonRect = opener.getBoundingClientRect();
            var position = {
                bottom: 'auto',
                top: 'auto',
                right: 'auto',
                left: 'auto',
            };
            if (buttonRect.top > 440) {
                position.top = buttonRect.top - 400 + "px";
            }
            else {
                position.top = buttonRect.top + 40 + "px";
            }
            if (buttonRect.left < window.innerWidth / 2) {
                position.left = buttonRect.left + 40 + "px";
            }
            else {
                position.left = buttonRect.left - 400 + "px";
            }
            dialog.css(position);
            exports.dialogActions.open(dialog);
        }
        var dialog = $('#emoji-dialog');
        if (dialog.length) {
            after(dialog);
        }
        else {
            init(after);
        }
    }
    exports.toggle = toggle;
    function toggleForInsert(textarea) {
        toggle($('[data-format="emoji-add-emoji"]').filter(':visible')[0], function (e, name) {
            var text = ":" + name + ": ";
            var selectionStart = textarea.selectionStart, selectionEnd = textarea.selectionEnd;
            var end = selectionEnd + text.length;
            var start = selectionStart === selectionEnd ? end : selectionStart;
            controls_1.insertIntoTextarea(textarea, text);
            controls_1.updateTextareaSelection(textarea, start, end);
            $(textarea).trigger('input');
        });
    }
    exports.toggleForInsert = toggleForInsert;
});
//# sourceMappingURL=emoji-dialog.js.map