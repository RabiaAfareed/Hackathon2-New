"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    title: 'Creamics Section',
    name: 'Creamics',
    type: 'document',
    fields: [
        //heading name
        { title: 'Creamics Heading', name: 'creamicsHeading', type: 'string' },
        //image card
        { title: 'Cards',
            name: 'cards',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        { title: 'Card Creamics Image', name: 'cardCremImg', type: 'image' },
                        { title: 'Card Creamics Heading', name: 'cardCremHeading', type: 'string' },
                        { title: 'Card Section Price', name: 'cardCremPrice', type: 'number' },
                    ]
                }
            ]
        },
    ]
};
