"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.schema = void 0;
var product_1 = require("./product");
var category_1 = require("./category");
var landingPage_1 = require("./landingPage-sections/landingPage");
var hero_1 = require("./landingPage-sections/hero");
var Creamics_1 = require("./landingPage-sections/Creamics");
var PopularProducts_1 = require("./landingPage-sections/PopularProducts");
exports.schema = {
    types: [product_1.product,
        category_1.Category,
        landingPage_1.default,
        hero_1.default,
        Creamics_1.default,
        PopularProducts_1.default,
    ],
};
