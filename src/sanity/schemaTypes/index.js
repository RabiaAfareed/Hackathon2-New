"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.schema = void 0;
var product_1 = require("./product");
var category_1 = require("./category");
var hero_1 = require("./landingPage-sections/hero");
var Creamics_1 = require("./landingPage-sections/Creamics");
var PopularProducts_1 = require("./landingPage-sections/PopularProducts");
var userSchema_1 = require("./user");


exports.schema = {
    types: [userSchema_1.user,
        product_1.product,
        category_1.Category,
        hero_1.default,
        Creamics_1.default,
        PopularProducts_1.default,
    ],
};
