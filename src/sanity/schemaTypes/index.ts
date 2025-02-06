import { type SchemaTypeDefinition } from 'sanity'
import { product } from './product'
import { Category } from './category'
import hero from './landingPage-sections/hero'
import PopularProducts from './landingPage-sections/PopularProducts'
import { userSchema } from './user'
import Creamics from './landingPage-sections/Creamics'
import { comment } from './comment'
import { orderSchema } from './order'


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [userSchema,
         product,
          Category,
          hero,
          Creamics,
          PopularProducts,
           comment, 
           userSchema,
           orderSchema
  ],

}
