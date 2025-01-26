"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    title: 'Landing Page',
    name: 'landingPage',
    type: 'document',
    fields: [
        { title: 'Sections',
            name: 'sections',
            type: 'array',
            of: [
                { type: 'hero' },
                { type: 'Creamics' },
                { type: 'PopularProducts' },
            ]
        }
    ]
};
