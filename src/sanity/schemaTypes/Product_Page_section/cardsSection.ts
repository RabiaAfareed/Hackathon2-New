export default {
    title: 'Cards Section',
    name: 'cardsSection',
    type: 'object',
    fields: [
        {
            title: 'Card',
            name: 'card',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        { title: 'Card Image', name: 'cardImg', type: 'image' },
                        { title: 'Heading', name: 'heading', type: 'string' },
                        { title: 'Price', name: 'price', type: 'number' },
                    ]
                }
            ]
        }
    ]
}