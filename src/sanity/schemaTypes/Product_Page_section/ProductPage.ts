export default {
    title: 'Product Page',
    name: 'ProductPage',
    type: 'document',
    fields: [
        {
            title: 'Sections',
            name: 'sections',
            type: 'array',
            of: [
                {type:'cardsSection'}
            ]
        }
    ]
}
