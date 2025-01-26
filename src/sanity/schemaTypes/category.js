"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Category = void 0;
var sanity_1 = require("sanity");
exports.Category = (0, sanity_1.defineType)({
    name: "category",
    title: "Category",
    type: "document",
    fields: [
        (0, sanity_1.defineField)({
            name: "name",
            title: "Name",
            type: "string",
            validation: function (rule) { return rule.required(); },
        }),
        (0, sanity_1.defineField)({
            name: "slug",
            title: "Slug",
            type: "slug",
            validation: function (rule) { return rule.required(); },
            options: {
                source: "name",
            }
        })
    ]
});
