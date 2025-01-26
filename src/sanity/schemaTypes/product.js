"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.product = void 0;
var sanity_1 = require("sanity");
exports.product = (0, sanity_1.defineType)({
    name: "product",
    title: "Product",
    type: "document",
    fields: [
        (0, sanity_1.defineField)({
            name: "category",
            title: "Category",
            type: "reference",
            to: [{
                    type: "category"
                }]
        }),
        (0, sanity_1.defineField)({
            name: "name",
            title: "Title",
            validation: function (rule) { return rule.required(); },
            type: "string"
        }),
        (0, sanity_1.defineField)({
            name: "slug",
            title: "Slug",
            validation: function (rule) { return rule.required(); },
            type: "slug"
        }),
        (0, sanity_1.defineField)({
            name: "image",
            type: "image",
            validation: function (rule) { return rule.required(); },
            title: "Product Image"
        }),
        (0, sanity_1.defineField)({
            name: "price",
            type: "number",
            validation: function (rule) { return rule.required(); },
            title: "Price",
        }),
        (0, sanity_1.defineField)({
            name: "quantity",
            title: "Quantity",
            type: "number",
            validation: function (rule) { return rule.min(0); },
        }),
        (0, sanity_1.defineField)({
            name: "tags",
            type: "array",
            title: "Tags",
            of: [{
                    type: "string"
                }]
        }),
        (0, sanity_1.defineField)({
            name: 'description',
            title: 'Description',
            type: 'text',
            description: 'Detailed description of the product',
        }),
        (0, sanity_1.defineField)({
            name: 'features',
            title: 'Features',
            type: 'array',
            of: [{ type: 'string' }],
            description: 'List of key features of the product',
        }),
        (0, sanity_1.defineField)({
            name: 'dimensions',
            title: 'Dimensions',
            type: 'object',
            fields: [
                { name: 'height', title: 'Height', type: 'string' },
                { name: 'width', title: 'Width', type: 'string' },
                { name: 'depth', title: 'Depth', type: 'string' },
            ],
            description: 'Dimensions of the product',
        }),
    ]
});
exports.default = {
    name: 'product',
    type: 'document',
    title: 'Product',
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'Product Name',
        },
        {
            name: 'description',
            type: 'string',
            title: 'Description'
        },
        {
            name: 'price',
            type: 'number',
            title: 'Product Price',
        },
        {
            name: 'discountPercentage',
            type: 'number',
            title: 'Discount Percentage',
        },
        {
            name: 'priceWithoutDiscount',
            type: 'number',
            title: 'Price Without Discount',
            description: 'Original price before discount'
        },
        {
            name: 'rating',
            type: 'number',
            title: 'Rating',
            description: 'Rating of the product'
        },
        {
            name: 'ratingCount',
            type: 'number',
            title: 'Rating Count',
            description: 'Number of ratings'
        },
        {
            name: 'tags',
            type: 'array',
            title: 'Tags',
            of: [{ type: 'string' }],
            options: {
                layout: 'tags'
            },
            description: 'Add tags like "new arrival", "bestseller", etc.'
        },
        {
            name: 'sizes',
            type: 'array',
            title: 'Sizes',
            of: [{ type: 'string' }],
            options: {
                layout: 'tags'
            },
            description: 'Add sizes like S , M , L , XL , XXL'
        },
        {
            name: 'image',
            type: 'image',
            title: 'Product Image',
            options: {
                hotspot: true // Enables cropping and focal point selection
            }
        }
    ]
};
