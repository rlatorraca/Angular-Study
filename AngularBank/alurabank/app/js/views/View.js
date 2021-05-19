System.register([], function (exports_1, context_1) {
    "use strict";
    var View;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            View = class View {
                constructor(selector, escape = false) {
                    this._element = $(selector);
                    this._escape = escape;
                }
                update(model, alertColor) {
                    let template = this.template(model, alertColor);
                    if (this._escape)
                        template = template.replace(/<script>[\s\S]*?<\/script>/, '');
                    this._element.html(template);
                }
            };
            exports_1("View", View);
        }
    };
});
