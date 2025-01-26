"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    title: 'Popular Products Section',
    name: 'PopularProducts',
    type: 'document',
    fields: [
        //heading name
        { title: 'PopularProducts Heading', name: 'PopularProductsHeading', type: 'string' },
        //image card
        { title: 'Cards',
            name: 'cards',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        { title: 'Card PopularProducts Image', name: 'cardPopularProductsImg', type: 'image' },
                        { title: 'Card PopularProducts Heading', name: 'cardPopularProductsHeading', type: 'string' },
                        { title: 'Popular Products Price', name: 'cardPopularProductsPrice', type: 'number' },
                    ]
                }
            ]
        },
    ]
};
